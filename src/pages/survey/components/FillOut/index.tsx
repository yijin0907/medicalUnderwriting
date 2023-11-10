import Button from '@/components/Button'
import { DisOptionReducerContext } from '@/components/store/disContext'
import { PersonalInfoReducerContext } from '@/components/store/personalInfoContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisSelectedList from './DisSelectedList'

const FillOut: React.FC = () => {
    const personalData = useContext(PersonalInfoReducerContext)
    const disOptionContextData = useContext(DisOptionReducerContext)
    const navigate = useNavigate()

    const disSelectedData = disOptionContextData?.state
    const correctHandler = () => {
        navigate('/survey/disInfo01')
    }

    const confirmHandler = () => {}

    useEffect(() => {
        console.log(disOptionContextData?.state)
    })
    return (
        <>
            <div>
                <div className="overflow-x-auto">
                    <h1>Done! Check</h1>
                    <table className="table table-zebra table-lg">
                        <thead>
                            <tr className="bg-base-200">
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>是否罹患該病？</th>
                                <th>最近五年是否因該病住院？</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{personalData?.state.username}</td>
                                <td>{personalData?.state.gender}</td>
                                <td>{personalData?.state.birth}</td>
                                <DisSelectedList disSelectedData={disSelectedData?.disCatchY} category="CATCH" />
                                <DisSelectedList disSelectedData={disSelectedData?.disHospY} category="HOSP" />
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-evenly my-10 lg:space-x-5">
                    <Button onClick={correctHandler}>返回修改</Button>
                    <Button onClick={confirmHandler}>確認送出</Button>
                </div>
            </div>
        </>
    )
}

export default FillOut
