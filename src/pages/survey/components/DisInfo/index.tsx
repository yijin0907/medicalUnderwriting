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
            // } else if (disKey === 'Q08') {
            //     navigate(`/result/resulttable`)
        } else {
            navigate(`/survey/${disKey}`)
        }
    }, [disKey, navigate])
    return (
        <>
            <div className="w-full" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                <div className="items-center text-center p-10">
                    <h2 className="mb-10 text-6xl">Disease Infomation</h2>
                    <form>
                        <DisSystem />
                    </form>
                </div>
                <div className="items-center text-right p-10">
                    <button
                        className="btn btn-wide btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        onClick={previousPageHandler}
                    >
                        上一頁
                    </button>
                    <button
                        className="btn btn-wide btn-outline btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        onClick={nextPageHandler}
                    >
                        下一頁
                    </button>
                </div>
            </div>
        </>
    )
}

export default DisInfo
