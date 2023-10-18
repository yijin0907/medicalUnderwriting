import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import DisProvider from '@/components/store/DisProvider'

const Survey: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <DisProvider>
                    <Outlet />
                </DisProvider>
            </Container>
            <Footer />
        </>
    )
}

export default Survey
