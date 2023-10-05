import { useState } from 'react'
type DisOptionProps = {
    disCode: string
}

const DisOptions: React.FC<DisOptionProps> = (props: DisOptionProps) => {
    const [catchSelectedOption, setCatchSelectedOption] = useState('catchN')
    const [hospSelectedOption, setHospSelectedOption] = useState('hospN')
    const handleCatchOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCatchSelectedOption(event.target.value)
    }
    const handleHospOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHospSelectedOption(event.target.value)
    }

    const catchDisName = 'catch' + props.disCode
    const hospDisName = 'hosp' + props.disCode
    return (
        <div className="grid grid-rows-2 w-2/3">
            <div className="flex flex-row">
                <p className="basis-1/2 my-2 text-lg font-bold text-gray-700 text-start border-dotted border-r-4 border-indigo-500">
                    是否罹患該病？
                </p>
                <div className="basis-1/4 inline-flex items-center justify-end">
                    <input
                        type="radio"
                        id={`${catchDisName}_N`}
                        name={catchDisName}
                        className="checked:bg-amber-500 checked:ring-amber-500 text-amber-500 w-6 h-6"
                        value="catchN"
                        checked={catchSelectedOption === 'catchN'}
                        onChange={handleCatchOptionChange}
                    />
                    <label className="inline-flex items-center text-lg ml-4" htmlFor={`${catchDisName}_N`}>
                        無
                    </label>
                </div>
                <div className="basis-1/4 inline-flex items-center justify-center">
                    <input
                        type="radio"
                        id={`${catchDisName}_Y`}
                        name={catchDisName}
                        className="checked:bg-amber-500 checked:ring-amber-500 text-amber-500 w-6 h-6"
                        value="catchY"
                        checked={catchSelectedOption === 'catchY'}
                        onChange={handleCatchOptionChange}
                    />
                    <label className="inline-flex items-center text-lg ml-4" htmlFor={`${catchDisName}_Y`}>
                        有
                    </label>
                </div>
            </div>
            <div className="flex flex-row border-dotted border-t-4 border-indigo-500">
                <p className="basis-1/2 my-2 text-lg font-bold text-gray-700 text-start border-dotted border-r-4 border-indigo-500">
                    最近五年是否因該病住院？
                </p>
                <div className="basis-1/4 inline-flex items-center justify-end">
                    <input
                        type="radio"
                        name={hospDisName}
                        id={`${hospDisName}_N`}
                        className="checked:bg-amber-500 checked:ring-amber-500 text-amber-500 w-6 h-6"
                        value="hospN"
                        checked={hospSelectedOption === 'hospN'}
                        onChange={handleHospOptionChange}
                    />
                    <label className="inline-flex items-center text-lg ml-4" htmlFor={`${hospDisName}_N`}>
                        無
                    </label>
                </div>
                <div className="basis-1/4 inline-flex items-center justify-center">
                    <input
                        type="radio"
                        name={hospDisName}
                        id={`${hospDisName}_Y`}
                        className="checked:bg-amber-500 checked:ring-amber-500 text-amber-500 w-6 h-6"
                        value="hospY"
                        checked={hospSelectedOption === 'hospY'}
                        onChange={handleHospOptionChange}
                    />
                    <label className="inline-flex items-center text-lg ml-4" htmlFor={`${hospDisName}_Y`}>
                        有
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
