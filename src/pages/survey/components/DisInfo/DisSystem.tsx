import { DisPageNumContext } from '@/components/store/disContext'
import DisOptions from './DisOptions'
import dbData from '@/disDB'
import filterDisDBData from '@/filterDisDB'
import { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

type DisInfomation = {
    level1: string
    level2: string
    dis_name: string
    leve2_disName: string
    dis_code: string
}

const DisSystem: React.FC = () => {
    const contextData = useContext(DisPageNumContext)

    const pageNum = contextData?.pageNum
    const gender: string = 'female'
    const age = 20

    const dbKey = 'K' + pageNum?.slice(-2)
    const disSystem = dbData[dbKey as keyof typeof dbData]
    // const disSystemName = disSystem[0].level1 as string
    const genderFilterData =
        gender === 'male'
            ? disSystem.filter((e) => filterDisDBData.onlyFemale.indexOf(e.dis_code) === -1)
            : disSystem.filter((e) => filterDisDBData.onlyMale.indexOf(e.dis_code) === -1)
    const above14yFilterData =
        age <= 14
            ? genderFilterData.filter((e) => filterDisDBData.above14y.indexOf(e.dis_code) === -1)
            : genderFilterData
    const under10yFilter =
        age > 10
            ? above14yFilterData.filter((e) => filterDisDBData.under10y.indexOf(e.dis_code) === -1)
            : above14yFilterData

    const disDatas = under10yFilter as Array<DisInfomation>

    return (
        <>
            <div className="">
                <form>
                    <div className="flex flex-wrap items-center justify-center">
                        {disDatas.length !== 0 ? (
                            disDatas.map((v, index) => {
                                return (
                                    <div
                                        className={`opacity-[85%] w-full ${
                                            index % 2 !== 0 ? 'bg-primary' : 'bg-secondary'
                                        } rounded-xl mt-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300`}
                                        key={v.dis_code}
                                    >
                                        <p className="lg:text-lg text-sm text-center w-1/2 p-4">{v.dis_name}</p>
                                        <DisOptions
                                            disCode={v.dis_code}
                                            hospOnly={filterDisDBData.onlyHosp.indexOf(v.dis_code) === -1 || false}
                                        />
                                    </div>
                                )
                            })
                        ) : (
                            <div className="w-full opacity-[70%] bg-blue-300 rounded-xl mt-4 flex justify-center shadow-2xl">
                                <p className="lg:text-xl xl:mx-72 p-6 font-mono font-bold">No System Disease！！！</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default DisSystem
