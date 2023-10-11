import { useParams } from 'react-router-dom'
import DisOptions from './DisOptions'
import dbData from '@/disDB'

type DisInfomation = {
    level1: string
    level2: string
    dis_name: string
    leve2_disName: string
    dis_code: string
}

const DisSystem: React.FC = () => {
    const dbKey: string = 'K' + useParams().items?.slice(-2)
    const disSystem = Object.entries(dbData).filter((v) => v[0] === dbKey)
    const disSystemName = disSystem[0][1][0].level1 as string
    const disDatas = disSystem[0][1] as Array<DisInfomation>

    return (
        <>
            <p className="text-2xl text-start">{disSystemName}</p>
            <form>
                <div className="flex flex-col items-center justify-center">
                    {disDatas.map((v, index) =>
                        index % 2 !== 0 ? (
                            <div
                                className="opacity-[85%] w-full bg-primary rounded-xl mt-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                                key={v.dis_code}
                            >
                                <p className="sm:text-lg text-center w-1/2 p-4">{v.dis_name}</p>
                                <DisOptions disCode={v.dis_code} />
                            </div>
                        ) : (
                            <div
                                className="opacity-[85%] w-full bg-secondary rounded-xl mt-4 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                                key={v.dis_code}
                            >
                                <p className="sm:text-lg text-center w-1/2 p-4">{v.dis_name}</p>
                                <DisOptions disCode={v.dis_code} />
                            </div>
                        )
                    )}
                </div>
            </form>
        </>
    )
}

export default DisSystem
