import { useNavigate } from 'react-router-dom'
import dbData from '@/disDB'
import { useEffect, useState } from 'react'

type DisKey = {
    disKey: string
}

const DisMenu: React.FC<DisKey> = (props: DisKey) => {
    const [pageNum, setPageNum] = useState(props.disKey)
    const navigate = useNavigate()

    const pangeHandler = (event: React.MouseEvent<HTMLParagraphElement>) => {
        setPageNum(props.disKey)
        navigate(`/survey/${props.disKey}`)
        console.log('pageNum', pageNum)
        console.log('EEEE', event.currentTarget.id)
    }
    useEffect(() => {
        console.log(pageNum)
        navigate(`/survey/${pageNum}`)
    }, [pageNum, navigate])
    return (
        <>
            <div className="">
                <ul className="menu bg-base-200 w-56 rounded-box text-lg font-bold italic">
                    <li className="menu-title">Title</li>
                    {Object.values(dbData).map((v, index) =>
                        parseInt(pageNum?.slice(-2) as string) === index + 1 ? (
                            <li key={index}>
                                <p
                                    className="active hover:bg-blue-300"
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
