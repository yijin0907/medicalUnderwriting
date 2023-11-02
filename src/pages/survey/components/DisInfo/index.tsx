import { useContext, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisSystem from './DisSystem'
import disCardBgImg from '/images/memphis-colorful.webp'
import DisMenu from './DisMenu'
import { DisOptionReducerContext, DisPageNumContext } from '@/components/store/disContext'

const DisInfo: React.FC = () => {
    const contextData = useContext(DisPageNumContext)
    const disOptionContextData = useContext(DisOptionReducerContext)
    const navigate = useNavigate()

    const previousPageHandler = () => {
        contextData?.setPageNum(
            'disinfo' + (parseInt(contextData?.pageNum.slice(-2), 10) - 1).toString().padStart(2, '0')
        )
    }
    const nextPageHandler = () => {
        contextData?.setPageNum(
            'disinfo' + (parseInt(contextData?.pageNum.slice(-2), 10) + 1).toString().padStart(2, '0')
        )
    }

    useLayoutEffect(() => {
        console.log(contextData?.pageNum)
        switch (contextData?.pageNum) {
            case 'disinfo00':
                // contextData?.setPageNum('disinfo01')
                navigate(`/survey/personalInfo`)
                window.scrollTo({ top: 0, left: 0 })
                break
            case 'disinfo22':
                // contextData?.setPageNum('disinfo21')
                navigate(`/survey/fillOut`)
                window.scrollTo({ top: 0, left: 0 })
                break
            default:
                navigate(`/survey/${contextData?.pageNum}`)
                window.scrollTo({ top: 0, left: 0 })
                break
        }
    }, [contextData, navigate, disOptionContextData])
    return (
        <>
            {contextData?.pageNum !== 'disinfo00' && contextData?.pageNum !== 'disinfo22' && (
                <div className="w-full" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                    <div className="p-10 mx-auto w-full">
                        <p className="my-4 text-4xl text-center font-mono font-bold">Disease Infomation</p>
                        <div className="flex mx-auto lg:p-10">
                            <div className="lg:m-4">
                                <DisMenu />
                            </div>
                            <div className="mx-auto px-4">
                                <DisSystem />
                                <div className="flex items-center justify-evenly my-10 lg:space-x-5">
                                    <button
                                        className="btn sm:btn-wide btn-outline btn-accent"
                                        onClick={previousPageHandler}
                                    >
                                        上一頁
                                    </button>
                                    <button
                                        className="btn sm:btn-wide btn-outline btn-accent"
                                        onClick={nextPageHandler}
                                    >
                                        下一頁
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DisInfo
