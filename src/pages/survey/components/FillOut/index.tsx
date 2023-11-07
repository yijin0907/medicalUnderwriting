import { PersonalInfoReducerContext } from '@/components/store/personalInfoContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const FillOut: React.FC = () => {
    const personalData = useContext(PersonalInfoReducerContext)
    const navigate = useNavigate()

    const correctHandler = () => {
        navigate('/survey/personalInfo')
    }

    const confirmHandler = () => {}

    useEffect(() => {
        console.log(personalData?.state)
    })
    return (
        <>
            <div>
                <div>
                    <h1>Done! Check</h1>
                </div>
                <div className="flex items-center justify-evenly my-10 lg:space-x-5">
                    <button className="btn sm:btn-wide btn-outline btn-accent" onClick={correctHandler}>
                        返回修改
                    </button>
                    <button className="btn sm:btn-wide btn-outline btn-accent" onClick={confirmHandler}>
                        確認送出
                    </button>
                </div>
            </div>
        </>
    )
}

export default FillOut
