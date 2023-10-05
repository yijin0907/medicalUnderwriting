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
            <p className="text-3xl text-start">{disSystemName}</p>
            <div className="flex flex-col items-center">
                {disDatas.map((v, index) =>
                    index % 2 !== 0 ? (
                        <div
                            className="opacity-[85%] w-[80%] bg-primary rounded-xl mt-8 px-8 py-2 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                            key={v.dis_code}
                        >
                            <p className="text-lg text-start w-1/3">{v.dis_name}</p>
                            <DisOptions disCode={v.dis_code} />
                        </div>
                    ) : (
                        <div
                            className="opacity-[85%] w-[80%] bg-secondary rounded-xl mt-8 px-8 py-2 flex justify-between items-center shadow-2xl hover:scale-105 duration-300"
                            key={v.dis_code}
                        >
                            <p className="text-lg text-start w-1/3">{v.dis_name}</p>
                            <DisOptions disCode={v.dis_code} />
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default DisSystem
