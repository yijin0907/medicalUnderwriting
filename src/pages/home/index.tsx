import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import bgImg from '/images/dashboard.jpg'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="h-12"></div>
            <Container>
                <div className="hero min-h-screen bg-cover rounded-2xl" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="hero-overlay bg-opacity-80 rounded-2xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-4xl rounded-lg">
                            <h1 className="mb-5 text-5xl font-bold">Medical Underwriting</h1>
                            <p className="mb-5">
                                A process used by insurance companies to try to figure out your health status when
                                you're applying for health insurance coverage to determine whether to offer you
                                coverage, at what price, and with what exclusions or limits.
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    navigate('/survey/personalInfo')
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="divider"></div>
            <Footer />
        </>
    )
}

export default Home
