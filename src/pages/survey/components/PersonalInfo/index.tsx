import { useState } from 'react'
import cardBgImg from '/images/blue-snow.webp'
import { useNavigate } from 'react-router-dom'

const PersonalInfo: React.FC = () => {
    const [genderOption, setGenderOption] = useState('male')
    const handleGenderOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenderOption(event.target.name)
        console.log(event.target.name)
    }
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full" style={{ backgroundImage: `url(${cardBgImg})` }}>
                <div className="p-10 mx-auto w-4/5">
                    <p className="mb-10 text-4xl text-center">Personal Infomation</p>
                    <form>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-10">
                            <div className="opacity-[85%] w-full bg-secondary rounded-xl mb-10 p-2 flex justify-between items-center  shadow-2xl hover:scale-105 duration-300">
                                <label className="text-xl font-bold text-gray-700 grow" htmlFor="name">
                                    姓名
                                </label>
                                <input className="rounded-md w-1/2" id="name" type="text" placeholder="姓名" />
                            </div>
                            <div className="opacity-[85%] w-full bg-primary rounded-xl mb-10 p-2 sm:h-14 flex justify-between items-center shadow-2xl hover:scale-105 duration-300">
                                <p className="text-xl font-bold text-gray-700">性別</p>
                                <div className="flex flex-col sm:justify-between sm:flex-row">
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="male"
                                            className="radio checked:bg-red-500 checked:ring-red-500 active:ring-red-500 text-red-500 lg:w-6 lg:h-6"
                                            checked={`${genderOption}` === 'male'}
                                            onChange={handleGenderOptionChange}
                                        />
                                        <label className="text-lg mx-2" htmlFor="male">
                                            男
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="female"
                                            className="radio checked:bg-green-500 checked:ring-green-500 active:ring-green-500 text-green-500 lg:w-6 lg:h-6"
                                            checked={`${genderOption}` === 'female'}
                                            onChange={handleGenderOptionChange}
                                        />
                                        <label className="text-lg mx-2" htmlFor="female">
                                            女
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-10">
                            <div className="opacity-[85%] w-full bg-secondary rounded-xl mb-10 p-2 flex justify-between items-center shadow-2xl hover:scale-105 duration-300">
                                <label className="text-xl font-bold text-gray-700" htmlFor="date">
                                    出生年月日
                                </label>
                                <input className="w-1/2 rounded-md" id="date" type="date" />
                            </div>
                            <div className="flex items-center justify-end w-full mb-10 p-2">
                                <button
                                    className="btn sm:btn-wide btn-outline btn-accent"
                                    onClick={() => {
                                        navigate('/survey/disinfo01')
                                    }}
                                >
                                    下一頁
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo
