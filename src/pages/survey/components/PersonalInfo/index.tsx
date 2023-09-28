import cardBgImg from '/images/blue-snow.webp'
import { useNavigate } from 'react-router-dom'

const PersonalInfo: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <div
                className="m-10 w-screen h-screen grid content-center border-purple-800"
                style={{ backgroundImage: `url(${cardBgImg})` }}
            >
                <div className="items-center text-center">
                    <h2 className="mb-10 text-6xl">Personal Infomation</h2>
                    <form>
                        <div className="grid grid-cols-7 gap-10">
                            <div className="mb-4 col-start-3 col-span-3">
                                <label className="block mb-2 text-xl font-bold text-gray-700" htmlFor="firstName">
                                    姓名
                                </label>
                                <input
                                    className="input input-bordered input-info w-full max-w-xs"
                                    id="name"
                                    type="text"
                                    placeholder="name"
                                />
                            </div>
                            <div className="mb-4 col-start-4 col-span-1">
                                <label className="block mb-2 text-xl font-bold text-gray-700" htmlFor="password">
                                    性別
                                </label>
                                <div className="flex justify-between">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-lg">男</span>
                                            <input
                                                type="radio"
                                                name="radio-10"
                                                className="radio checked:bg-red-500"
                                                checked
                                            />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-lg">女</span>
                                            <input
                                                type="radio"
                                                name="radio-10"
                                                className="radio checked:bg-green-500"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 col-start-3 col-span-3">
                                <label className="block mb-2 text-xl font-bold text-gray-700" htmlFor="password">
                                    出生年月日
                                </label>
                                <input
                                    className="input input-bordered input-info w-full max-w-xs"
                                    id="date"
                                    type="date"
                                />
                            </div>
                            <div className="mb-4 col-start-4 col-span-1">
                                <button
                                    className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                                    type="submit"
                                    onClick={() => {
                                        navigate('/survey/disInfo')
                                    }}
                                >
                                    Submit
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
