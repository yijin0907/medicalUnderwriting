import dbData from '@/disDB'
import filterDisDBData from '@/filterDisDB'
import DisCategory from './DisCategory'
import DisOption from './DisOption'
import DisEmpty from './DisEmpty'

type DisInfomation = {
    level1: string
    level2: string
    dis_name: string
    leve2_disName: string
    dis_code: string
}

const gender: string = 'female'
const age = 20

const DisSystem = ({ pageNum }: { pageNum: string }) => {
    const dbKey = 'K' + pageNum
    const disSystem = dbData[dbKey as keyof typeof dbData]
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
                                <DisCategory>
                                    {filterDisDBData.onlyHosp.indexOf(v.dis_code) === -1 || false ? (
                                        <DisOption disCode={v.dis_code} disName={v.dis_name} category="CATCH" />
                                    ) : null}
                                    <DisOption disCode={v.dis_code} disName={v.dis_name} category="HOSP" />
                                </DisCategory>
                            </div>
                        )
                    })
                ) : (
                    <DisEmpty />
                )}
            </div>
        </form>
    )
}

export default DisSystem
