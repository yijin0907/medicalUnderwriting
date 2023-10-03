const DisOptions: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-24 w-2/3">
            <div className="divide-y-4 divide-secondary divide-double">
                <label className="block pb-4 text-xl font-bold text-gray-700 text-center" htmlFor="getDis">
                    是否罹患該病？
                </label>
                <div className="flex justify-between pt-4 px-10">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">無</span>
                            <input type="radio" name="radio-10" className="radio radio-warning" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">有</span>
                            <input type="radio" name="radio-10" className="radio radio-warning" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="divide-y-4 divide-secondary divide-double">
                <label className="block pb-4 text-xl font-bold text-gray-700 text-center" htmlFor="disHosp">
                    最近五年是否因該病住院？
                </label>
                <div className="flex justify-between pt-4 px-10">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">無</span>
                            <input type="radio" name="radio-11" className="radio radio-warning" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-lg">有</span>
                            <input type="radio" name="radio-11" className="radio radio-warning" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisOptions
