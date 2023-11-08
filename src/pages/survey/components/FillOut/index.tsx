import { DisOptionReducerContext } from '@/components/store/disContext'
import { PersonalInfoReducerContext } from '@/components/store/personalInfoContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const FillOut: React.FC = () => {
    const personalData = useContext(PersonalInfoReducerContext)
    const disOptionContextData = useContext(DisOptionReducerContext)
    const navigate = useNavigate()

    const correctHandler = () => {
        navigate('/survey/personalInfo')
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
                                <td>
                                    <div className="stats stats-vertical shadow">
                                        {disOptionContextData?.state.disCatchY.map((dis) => (
                                            <div className="stat" key={`catch_${dis.disCode}`}>
                                                <div className="stat-title text-secondary">{dis.disName}</div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <div className="stats stats-vertical shadow">
                                        {disOptionContextData?.state.disHospY.map((dis) => (
                                            <div className="stat" key={`hosp_${dis.disCode}`}>
                                                <div className="stat-title text-secondary">{dis.disName}</div>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
