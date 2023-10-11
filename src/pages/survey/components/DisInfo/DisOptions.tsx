import { useState } from 'react'
type DisOptionProps = {
    disCode: string
}

const DisOptions: React.FC<DisOptionProps> = (props: DisOptionProps) => {
    const [catchSelectedOption, setCatchSelectedOption] = useState(`${props.disCode}_CATCH_N`)
    const [hospSelectedOption, setHospSelectedOption] = useState(`${props.disCode}_HOSP_N`)
    const handleCatchOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCatchSelectedOption(event.target.id)
        console.log(event.target.id)
    }
    const handleHospOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHospSelectedOption(event.target.id)
        console.log(event.target.id)
    }
    const disCode = props.disCode
    return (
        <div className="flex flex-col w-3/4 p-2">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <p className="sm:text-lg font-bold text-gray-700">是否罹患該病？</p>
                <div className="flex justify-between space-x-2">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id={`${disCode}_CATCH_N`}
                            name={`${disCode}_CATCH_N`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 sm:w-6 sm:h-6"
                            checked={catchSelectedOption === `${disCode}_CATCH_N`}
                            onChange={handleCatchOptionChange}
                        />
                        <label className="sm:text-lg ml-2" htmlFor={`${disCode}_CATCH_N`}>
                            無
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id={`${disCode}_CATCH_Y`}
                            name={`${disCode}_CATCH_Y`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 sm:w-6 sm:h-6"
                            checked={catchSelectedOption === `${disCode}_CATCH_Y`}
                            onChange={handleCatchOptionChange}
                        />
                        <label className="sm:text-lg ml-2" htmlFor={`${disCode}_CATCH_Y`}>
                            有
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-dotted border-t-4 border-indigo-500">
                <p className="sm:text-lg font-bold text-gray-700">最近五年是否因該病住院？</p>
                <div className="flex justify-between space-x-2">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name={`${disCode}_HOSP_N`}
                            id={`${disCode}_HOSP_N`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 sm:w-6 sm:h-6"
                            checked={hospSelectedOption === `${disCode}_HOSP_N`}
                            onChange={handleHospOptionChange}
                        />
                        <label className="sm:text-lg ml-2" htmlFor={`${disCode}_HOSP_N`}>
                            無
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name={`${disCode}_HOSP_Y`}
                            id={`${disCode}_HOSP_Y`}
                            className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 sm:w-6 sm:h-6"
                            checked={hospSelectedOption === `${disCode}_HOSP_Y`}
                            onChange={handleHospOptionChange}
                        />
                        <label className="sm:text-lg ml-2" htmlFor={`${disCode}_HOSP_Y`}>
                            有
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
