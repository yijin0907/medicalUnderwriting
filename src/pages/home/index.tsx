import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div>
                <button className="btn btn-secondary">click</button>
            </div>
            <Footer />
        </>
    )
}

export default Home
