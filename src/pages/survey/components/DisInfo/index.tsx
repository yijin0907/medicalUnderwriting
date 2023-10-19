import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisSystem from './DisSystem'
import disCardBgImg from '/images/memphis-colorful.webp'
import DisMenu from './DisMenu'
import DisContext from '@/components/store/dis-context'

const DisInfo: React.FC = () => {
    const contextData = useContext(DisContext)
    const navigate = useNavigate()

    const previousPageHandler = () => {
        contextData?.setPageNum(
            'disinfo' + (parseInt(contextData?.pageNum.slice(-2), 10) - 1).toString().padStart(2, '0')
        )
        navigate(`/survey/${contextData?.pageNum}`)
    }
    const nextPageHandler = () => {
        contextData?.setPageNum(
            'disinfo' + (parseInt(contextData?.pageNum.slice(-2), 10) + 1).toString().padStart(2, '0')
        )
        navigate(`/survey/${contextData?.pageNum}`)
    }

    useEffect(() => {
        if (contextData?.pageNum === 'disinfo00') {
            contextData?.setPageNum('disinfo01')
            navigate(`/survey/personalInfo`)
            window.scrollTo({ top: 0, left: 0 })
        } else {
            navigate(`/survey/${contextData?.pageNum}`)
            window.scrollTo({ top: 0, left: 0 })
        }
    }, [contextData, navigate])
    return (
        <>
            <div className="w-full" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                <div className="p-10 mx-auto w-full">
                    <p className="my-4 text-4xl text-center font-mono font-bold">Disease Infomation</p>
                    <div className="flex mx-auto lg:p-10">
                        <div className="lg:m-4">{contextData?.pageNum !== 'disinfo00' && <DisMenu />}</div>
                        <div className="mx-4">
                            {contextData?.pageNum !== 'disinfo00' && <DisSystem />}
                            <div className="flex items-center justify-evenly my-10 lg:space-x-5">
                                <button
                                    className="btn sm:btn-wide btn-outline btn-accent"
                                    onClick={previousPageHandler}
                                >
                                    上一頁
                                </button>
                                <button className="btn sm:btn-wide btn-outline btn-accent" onClick={nextPageHandler}>
                                    下一頁
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisInfo
