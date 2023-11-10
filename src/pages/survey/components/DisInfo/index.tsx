import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DisSystem from './DisSystem'
import disCardBgImg from '/images/memphis-colorful.webp'
import DisMenu from './DisMenu'
import Button from '@/components/Button'

const DisInfo: React.FC = () => {
    const [pageNum, setPageNum] = useState('01')
    const navigate = useNavigate()

    function previousPageHandler() {
        setPageNum((pageNum) => (Number(pageNum) - 1).toString().padStart(2, '0'))
    }
    function nextPageHandler() {
        setPageNum((pageNum) => (Number(pageNum) + 1).toString().padStart(2, '0'))
    }
    function onSetPageNum(pageNum: string) {
        setPageNum(pageNum)
    }

    useLayoutEffect(() => {
        switch (pageNum) {
            case '00':
                navigate(`/survey/personalInfo`)
                window.scrollTo({ top: 0, left: 0 })
                break
            case '22':
                navigate(`/survey/fillOut`)
                window.scrollTo({ top: 0, left: 0 })
                break
            default:
                navigate(`/survey/disInfo${pageNum}`)
                window.scrollTo({ top: 0, left: 0 })
                break
        }
    }, [pageNum, navigate])
    return (
        <>
            {pageNum !== '00' && pageNum !== '22' && (
                <div className="w-full" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                    <div className="p-10 mx-auto w-full">
                        <p className="my-4 text-4xl text-center font-mono font-bold">Disease Infomation</p>
                        <div className="flex mx-auto lg:p-10">
                            <div className="lg:m-4">
                                <DisMenu pageNum={pageNum} onSetPageNum={onSetPageNum} />
                            </div>
                            <div className="mx-auto px-4">
                                <DisSystem pageNum={pageNum} />
                                <div className="flex items-center justify-evenly my-10 lg:space-x-5">
                                    <Button onClick={previousPageHandler}>上一頁</Button>
                                    <Button onClick={nextPageHandler}>下一頁</Button>
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
