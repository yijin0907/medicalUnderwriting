type ContainerProps = {
    children: React.ReactNode
}

const Container = (props: ContainerProps) => {
    return <div className="container flex justify-center">{props.children}</div>
}

export default Container
