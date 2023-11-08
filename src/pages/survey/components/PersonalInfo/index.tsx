import cardBgImg from '/images/blue-snow.webp'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FormEvent, useContext } from 'react'
import { PersonalInfoReducerContext } from '@/components/store/personalInfoContext'

type InputType = {
    username: string
    gender: string
    birth: string
}

const PersonalInfo: React.FC = () => {
    // const [state, dispatch] = useReducer(personalInfoReducer, personalInfoInitialState)
    const personalData = useContext(PersonalInfoReducerContext)
    const { register, getValues } = useForm<InputType>({
        shouldUseNativeValidation: true,
        defaultValues: {
            username: personalData?.state.username ? personalData?.state.username : 'ABC',
            gender: personalData?.state.gender ? personalData?.state.gender : 'male',
            birth: personalData?.state.birth ? personalData?.state.birth : '1975-01-01',
        },
    })

    const navigate = useNavigate()
    function handleClick(e: FormEvent) {
        e.preventDefault()
        // dispatch({
        //     type: 'update',
        //     payload: {
        //         username: getValues('username'),
        //         gender: getValues('gender'),
        //         birth: getValues('birth'),
        //     },
        // })
        personalData?.dispatch({
            type: 'update',
            payload: {
                username: getValues('username'),
                gender: getValues('gender'),
                birth: getValues('birth'),
            },
        })
        navigate('/survey/disinfo01')
    }
    return (
        <>
            <div className="w-full" style={{ backgroundImage: `url(${cardBgImg})` }}>
                <div className="p-10 mx-auto w-4/5">
                    <p className="mb-10 text-4xl text-center font-mono font-bold">Personal Infomation</p>
                    <form>
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="opacity-[85%] w-full sm:w-[55%] bg-secondary rounded-xl mb-10 p-2 flex justify-between items-center  shadow-2xl hover:scale-105 duration-300">
                                <label className="text-xl font-bold text-gray-700 grow" htmlFor="username">
                                    姓名
                                </label>
                                <input
                                    className="rounded-md w-1/2"
                                    id="username"
                                    type="text"
                                    placeholder="姓名"
                                    {...register('username', { required: 'Please enter your name.' })}
                                />
                            </div>

                            <div className="opacity-[85%] w-full sm:w-[55%] bg-primary rounded-xl mb-10 p-2 sm:h-16 flex justify-between items-center shadow-2xl hover:scale-105 duration-300">
                                <p className="text-xl font-bold text-gray-700">性別</p>
                                <div className="flex flex-col sm:justify-between sm:flex-row">
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            value="male"
                                            className="radio checked:bg-red-500 checked:ring-red-500 active:ring-red-500 text-red-500 lg:w-6 lg:h-6"
                                            {...register('gender')}
                                        />
                                        <label className="text-lg mx-2" htmlFor="male">
                                            男
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            value="female"
                                            className="radio checked:bg-green-500 checked:ring-green-500 active:ring-green-500 text-green-500 lg:w-6 lg:h-6"
                                            {...register('gender')}
                                        />
                                        <label className="text-lg mx-2" htmlFor="female">
                                            女
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="opacity-[85%] w-full sm:w-[55%] bg-secondary rounded-xl mb-10 p-2 flex justify-between items-center shadow-2xl hover:scale-105 duration-300">
                                <label className="text-xl font-bold text-gray-700" htmlFor="birth">
                                    出生年月日
                                </label>
                                <input className="w-1/2 rounded-md" id="birth" type="date" {...register('birth')} />
                            </div>

                            <div className="flex items-center justify-end w-full sm:w-[55%] mb-10 p-2">
                                <button className="btn btn-accent btn-block btn-outline" onClick={handleClick}>
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
