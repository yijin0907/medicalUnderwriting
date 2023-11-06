import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import DisOptionReducerProvider from '@/components/store/DisOptionReducerProvider'

import { Outlet } from 'react-router-dom'

const Survey: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <DisOptionReducerProvider>
                    <Outlet />
                </DisOptionReducerProvider>
            </Container>
            <Footer />
        </>
    )
}

export default Survey
