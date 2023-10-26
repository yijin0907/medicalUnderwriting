import disInitialState from '@/components/store/disInitialState'
import disReducer from '@/components/store/disReducer'
import { useReducer, useState } from 'react'
type DisOptionProps = {
    disCode: string
    hospOnly: boolean
}

const DisOptions: React.FC<DisOptionProps> = (props: DisOptionProps) => {
    const [state, dispatch] = useReducer(disReducer, disInitialState)

    const { disCode, hospOnly } = props
    const catchShow = state.disCatchY.indexOf(disCode) === -1 ? `${disCode}_CATCH_N` : `${disCode}_CATCH_Y`
    const hospShow = state.disHospY.indexOf(disCode) === -1 ? `${disCode}_HOSP_N` : `${disCode}_HOSP_Y`

    const [catchSelectedOption, setCatchSelectedOption] = useState(catchShow)
    const [hospSelectedOption, setHospSelectedOption] = useState(hospShow)
    const handleCatchOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCatchSelectedOption(e.target.value)
        e.target.value.endsWith('Y')
            ? dispatch({ type: 'CATCH_Y', disCode: disCode })
            : dispatch({ type: 'CATCH_N', disCode: disCode })
    }
    const handleHospOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHospSelectedOption(e.target.value)
        e.target.value.endsWith('Y')
            ? dispatch({ type: 'HOSP_Y', disCode: disCode })
            : dispatch({ type: 'HOSP_N', disCode: disCode })
    }

    return (
        <div className="flex flex-col w-1/2 sm:w-3/4 lg:p-2">
            {hospOnly && (
                <div className="flex flex-col sm:flex-row justify-between mx-4 py-1 border-dotted border-b-4 border-indigo-500">
                    <p className="lg:text-lg text-sm font-bold text-gray-700">是否罹患該病？</p>
                    <div className="flex lg:justify-between">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id={`${disCode}_CATCH_N`}
                                value={`${disCode}_CATCH_N`}
                                name={`${disCode}_CATCH`}
                                className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                                checked={catchSelectedOption === `${disCode}_CATCH_N`}
                                onChange={handleCatchOptionChange}
                            />
                            <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_CATCH_N`}>
                                無
                            </label>
                        </div>
                        <div className="flex items-center ml-6">
                            <input
                                type="radio"
                                id={`${disCode}_CATCH_Y`}
                                value={`${disCode}_CATCH_Y`}
                                name={`${disCode}_CATCH`}
                                className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                                checked={catchSelectedOption === `${disCode}_CATCH_Y`}
                                onChange={handleCatchOptionChange}
                            />
                            <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_CATCH_Y`}>
                                有
                            </label>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col sm:flex-row justify-between mx-4 py-1">
                <p className="lg:text-lg text-sm font-bold text-gray-700">最近五年是否因該病住院？</p>
                <div className="flex lg:justify-between">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id={`${disCode}_HOSP_N`}
                            value={`${disCode}_HOSP_N`}
                            name={`${disCode}_HOSP`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                            checked={hospSelectedOption === `${disCode}_HOSP_N`}
                            onChange={handleHospOptionChange}
                        />
                        <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_HOSP_N`}>
                            無
                        </label>
                    </div>
                    <div className="flex items-center ml-6">
                        <input
                            type="radio"
                            id={`${disCode}_HOSP_Y`}
                            value={`${disCode}_HOSP_Y`}
                            name={`${disCode}_HOSP`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                            checked={hospSelectedOption === `${disCode}_HOSP_Y`}
                            onChange={handleHospOptionChange}
                        />
                        <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_HOSP_Y`}>
                            有
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
