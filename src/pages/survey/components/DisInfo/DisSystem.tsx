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
    const disSystem = dbData.K21
    const disSystemName = disSystem[0].level1 as string
    const disName = disSystem as Array<DisInfomation>
    return (
        <>
            <p className="text-3xl text-start">{disSystemName}</p>
            {disName.map((v) => (
                <div className="bg-violet-400 rounded-xl m-4 p-4 flex justify-between items-center">
                    <p className="text-xl text-start w-1/3">{v.dis_name}</p>
                    <DisOptions />
                </div>
            ))}
        </>
    )
}

export default DisSystem
