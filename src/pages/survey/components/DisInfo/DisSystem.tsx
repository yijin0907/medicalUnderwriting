import { useParams } from 'react-router-dom'
import DisOptions from './DisOptions'
import dbData from '@/disDB'
import filterDisDBData from '@/filterDisDB'

type DisInfomation = {
    level1: string
    level2: string
    dis_name: string
    leve2_disName: string
    dis_code: string
}

type DisKey = {
    disKey: string
}

const DisSystem: React.FC<DisKey> = (props: DisKey) => {
    const gender: string = 'female'
    const age = 20
    const dbKey = 'K' + props.disKey?.slice(-2)
    const disSystem = dbData[dbKey as keyof typeof dbData]
    const disSystemName = disSystem[0].level1 as string
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
            <p className="text-2xl text-start font-mono font-bold">{disSystemName}</p>
            <form>
                <div className="flex flex-wrap items-center justify-center">
                    {disDatas.map((v, index) => {
                        const hospOnly = filterDisDBData.onlyHosp.indexOf(v.dis_code) === -1 || false
                        return index % 2 !== 0 ? (
                            <div
                                className="opacity-[85%] w-full bg-primary rounded-xl mt-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                                key={v.dis_code}
                            >
                                <p className="sm:text-lg text-center w-1/2 p-4">{v.dis_name}</p>
                                <DisOptions disCode={v.dis_code} hospOnly={hospOnly} />
                            </div>
                        ) : (
                            <div
                                className="opacity-[85%] w-full bg-secondary rounded-xl mt-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                                key={v.dis_code}
                            >
                                <p className="sm:text-lg text-center w-1/2 p-4">{v.dis_name}</p>
                                <DisOptions disCode={v.dis_code} hospOnly={hospOnly} />
                            </div>
                        )
                    })}
                </div>
            </form>
        </>
    )
}

export default DisSystem
