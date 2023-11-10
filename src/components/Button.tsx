type Props = React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<Props> = ({ children, onClick }: Props) => {
    return (
        <button className="btn sm:btn-wide btn-outline btn-accent" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
