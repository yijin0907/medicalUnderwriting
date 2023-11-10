type DisType = {
    disCode: string
    disName: string
}

type DataType = {
    disSelectedData: Array<DisType> | undefined
    category: string
}

const DisSelectedList: React.FC<DataType> = ({ disSelectedData, category }: DataType) => {
    return (
        <td>
            <div className="stats stats-vertical shadow">
                {disSelectedData?.map((dis) => (
                    <div className="stat" key={category + dis.disCode}>
                        <div className="stat-title text-secondary">{dis.disName}</div>
                    </div>
                ))}
            </div>
        </td>
    )
}

export default DisSelectedList
