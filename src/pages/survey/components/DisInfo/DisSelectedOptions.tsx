import DisOption from './DisOption'

type DisSelectedOptionsProps = {
    disName: string
    disCode: string
    hospOnly: boolean
}

const DisSelectedOptions: React.FC<DisSelectedOptionsProps> = (props: DisSelectedOptionsProps) => {
    const { disName, disCode, hospOnly } = props

    return (
        <div className="flex flex-col w-1/2 sm:w-3/4 lg:p-2">
            {hospOnly ? <DisOption disCode={disCode} disName={disName} disKind="CATCH" /> : null}
            <DisOption disCode={disCode} disName={disName} disKind="HOSP" />
        </div>
    )
}

export default DisSelectedOptions
