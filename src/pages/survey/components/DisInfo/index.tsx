import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DisSystem from './DisSystem'
import disCardBgImg from '/images/bgpic.webp'

const DisInfo: React.FC = () => {
    const [disKey, setDisKey] = useState('disinfo01')
    const navigate = useNavigate()
    const previousPageHandler = () => {
        setDisKey('disinfo' + (parseInt(disKey.slice(-2), 10) - 1).toString().padStart(2, '0'))
        navigate(`/survey/${disKey}`)
    }
    const nextPageHandler = () => {
        setDisKey('disinfo' + (parseInt(disKey.slice(-2), 10) + 1).toString().padStart(2, '0'))
        navigate(`/survey/${disKey}`)
    }

    useEffect(() => {
        if (disKey === 'disinfo00') {
            navigate(`/survey/personalInfo`)
            window.scrollTo({ top: 0, left: 0 })
        } else {
            navigate(`/survey/${disKey}`)
            window.scrollTo({ top: 0, left: 0 })
        }
    }, [disKey, navigate])
    return (
        <>
            <div className="w-full" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                <div className="p-10 mx-auto sm:w-4/5">
                    <h2 className="mb-10 text-4xl text-center font-mono font-bold">Disease Infomation</h2>
                    <DisSystem />
                </div>
                <div className="flex items-center justify-end p-10 space-x-5">
                    <button className="btn sm:btn-wide btn-outline btn-accent" onClick={previousPageHandler}>
                        上一頁
                    </button>
                    <button className="btn sm:btn-wide btn-outline btn-accent" onClick={nextPageHandler}>
                        下一頁
                    </button>
                </div>
            </div>
        </>
    )
}

export default DisInfo
