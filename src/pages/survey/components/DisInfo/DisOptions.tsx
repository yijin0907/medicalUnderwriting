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
        <div className="grid grid-rows-2 w-3/4 xl:w-1/2">
            <div className="flex flex-col lg:flex-row">
                <p className="w-[70%] my-2 lg:text-lg font-bold text-gray-700 text-start ">是否罹患該病？</p>
                <div className="w-[15%] flex items-center justify-end">
                    <input
                        type="radio"
                        id={`${disCode}_CATCH_N`}
                        name={`${disCode}_CATCH_N`}
                        className="checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 lg:w-6 lg:h-6"
                        checked={catchSelectedOption === `${disCode}_CATCH_N`}
                        onChange={handleCatchOptionChange}
                    />
                    <label className="lg:text-lg lg:ml-2" htmlFor={`${disCode}_CATCH_N`}>
                        無
                    </label>
                </div>
                <div className="w-[15%] flex items-center justify-end">
                    <input
                        type="radio"
                        id={`${disCode}_CATCH_Y`}
                        name={`${disCode}_CATCH_Y`}
                        className="checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 lg:w-6 lg:h-6"
                        checked={catchSelectedOption === `${disCode}_CATCH_Y`}
                        onChange={handleCatchOptionChange}
                    />
                    <label className="lg:text-lg lg:ml-2" htmlFor={`${disCode}_CATCH_Y`}>
                        有
                    </label>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row border-dotted border-t-4 border-indigo-500">
                <p className="w-[70%] my-2 lg:text-lg font-bold text-gray-700 text-start ">最近五年是否因該病住院？</p>
                <div className="w-[15%] flex items-center justify-end">
                    <input
                        type="radio"
                        name={`${disCode}_HOSP_N`}
                        id={`${disCode}_HOSP_N`}
                        className="checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 lg:w-6 lg:h-6"
                        checked={hospSelectedOption === `${disCode}_HOSP_N`}
                        onChange={handleHospOptionChange}
                    />
                    <label className="lg:text-lg lg:ml-2" htmlFor={`${disCode}_HOSP_N`}>
                        無
                    </label>
                </div>
                <div className="w-[15%] flex items-center justify-end">
                    <input
                        type="radio"
                        name={`${disCode}_HOSP_Y`}
                        id={`${disCode}_HOSP_Y`}
                        className="checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 lg:w-6 lg:h-6"
                        checked={hospSelectedOption === `${disCode}_HOSP_Y`}
                        onChange={handleHospOptionChange}
                    />
                    <label className="lg:text-lg lg:ml-2" htmlFor={`${disCode}_HOSP_Y`}>
                        有
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
