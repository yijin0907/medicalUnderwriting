import Container from './Container'
import logImg from '../assets/logo.svg'

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <div className="bg-primary p-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring-1 ring-offset-2 ring-blue-500/[.55]">
                            <img src={logImg} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header
