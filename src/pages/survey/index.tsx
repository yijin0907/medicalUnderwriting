import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DisOptionReducerProvider from '@/components/store/DisOptionReducerProvider'
import DisPageNumProvider from '@/components/store/DisPageNumProvider'
import { Outlet } from 'react-router-dom'

const Survey: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <DisPageNumProvider>
                    <DisOptionReducerProvider>
                        <Outlet />
                    </DisOptionReducerProvider>
                </DisPageNumProvider>
            </Container>
            <Footer />
        </>
    )
}

export default Survey
