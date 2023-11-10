import { DisOptionReducerContext } from '@/components/store/disContext'
import { useContext, useState } from 'react'

type DisOptionPropsType = {
    disCode: string
    disName: string
    category: string
}

const DisOption: React.FC<DisOptionPropsType> = ({ disCode, disName, category }: DisOptionPropsType) => {
    const disOptionContextData = useContext(DisOptionReducerContext)

    const catchOption = disOptionContextData?.state.disCatchY.some((dis) => dis.disCode === disCode)
        ? `${disCode}_${category}_Y`
        : `${disCode}_${category}_N`
    const hospOption = disOptionContextData?.state.disHospY.some((dis) => dis.disCode === disCode)
        ? `${disCode}_${category}_Y`
        : `${disCode}_${category}_N`
    const categoryShow = category === 'CATCH' ? catchOption : hospOption

    const [selectedOption, setSelectedOption] = useState(categoryShow)

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
        e.target.value.endsWith('Y')
            ? disOptionContextData?.dispatch({ type: category + '_Y', payload: { disCode, disName } })
            : disOptionContextData?.dispatch({ type: category + '_N', payload: { disCode, disName } })
    }

    return (
        <div
            className={`flex flex-col sm:flex-row justify-between mx-4 py-1 ${
                category === 'CATCH' ? 'border-dotted border-b-4 border-indigo-500' : ''
            }`}
        >
            <p className="lg:text-lg text-sm font-bold text-gray-700">
                {category === 'CATCH' ? '是否罹患該病？' : '最近五年是否因該病住院？'}
            </p>
            <div className="flex lg:justify-between">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id={`${disCode}_${category}_N`}
                        value={`${disCode}_${category}_N`}
                        name={`${disCode}_${category}_N`}
                        className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                        checked={selectedOption === `${disCode}_${category}_N`}
                        onChange={handleOptionChange}
                    />
                    <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_${category}_N`}>
                        無
                    </label>
                </div>
                <div className="flex items-center ml-6">
                    <input
                        type="radio"
                        id={`${disCode}_${category}_Y`}
                        value={`${disCode}_${category}_Y`}
                        name={`${disCode}_${category}_Y`}
                        className="radio checked:bg-amber-500 checked:ring-amber-500 active:ring-amber-500 text-amber-500 h-5 w-5 lg:w-6 lg:h-6"
                        checked={selectedOption === `${disCode}_${category}_Y`}
                        onChange={handleOptionChange}
                    />
                    <label className="lg:text-lg text-sm ml-2" htmlFor={`${disCode}_${category}_Y`}>
                        有
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DisOption
