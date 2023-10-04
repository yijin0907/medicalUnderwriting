type DisOptionProps = {
    disCode: string
}

const DisOptions: React.FC<DisOptionProps> = (props: DisOptionProps) => {
    const catchDisName = 'catch' + props.disCode
    const hospDisName = 'hosp' + props.disCode
    return (
        <div className="grid grid-cols-2 gap-24 w-2/3">
            <div className="divide-y-4 divide-purple-500">
                <label className="block pb-4 text-lg font-bold text-gray-700 text-center">是否罹患該病？</label>
                <div className="flex justify-between pt-4 px-10">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">無</span>
                            {/* <input type="radio" name={catchDisName} className="radio radio-warning border-4" checked /> */}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">有</span>
                            {/* <input type="radio" name={catchDisName} className="radio radio-warning border-4" /> */}
                        </label>
                    </div>
                </div>
            </div>
            <div className="divide-y-4 divide-purple-500">
                <label className="block pb-4 text-lg font-bold text-gray-700 text-center">
                    最近五年是否因該病住院？
                </label>
                <div className="flex justify-between pt-4 px-10">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">無</span>
                            {/* <input type="radio" name={hospDisName} className="radio radio-warning border-4" checked /> */}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">有</span>
                            {/* <input type="radio" name={hospDisName} className="radio radio-warning border-4" /> */}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
