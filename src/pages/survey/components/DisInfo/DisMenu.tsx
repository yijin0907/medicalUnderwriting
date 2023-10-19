import dbData from '@/disDB'
import { useContext } from 'react'
import DisContext from '@/components/store/dis-context'

const DisMenu: React.FC = () => {
    const contextData = useContext(DisContext)
    // const navigate = useNavigate()

    const pangeHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
        contextData?.setPageNum(event.currentTarget.id)
    }

    return (
        <>
            <div className="hidden lg:flex">
                <ul className="menu lg:text-lg text-white bg-slate-300 w-56 rounded-box font-bold italic">
                    <li className="menu-title">系統疾病</li>
                    {Object.values(dbData).map((v, index) =>
                        parseInt(contextData?.pageNum?.slice(-2) as string) === index + 1 ? (
                            <li key={index}>
                                <p
                                    className="active hover:!bg-blue-30"
                                    id={'disinfo' + (index + 1).toString().padStart(2, '0')}
                                    onClick={pangeHandler}
                                >
                                    {v[0].level1}
                                </p>
                            </li>
                        ) : (
                            <li key={index}>
                                <p
                                    className="hover:bg-blue-300"
                                    id={'disinfo' + (index + 1).toString().padStart(2, '0')}
                                    onClick={pangeHandler}
                                >
                                    {v[0].level1}
                                </p>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    )
}

export default DisMenu
