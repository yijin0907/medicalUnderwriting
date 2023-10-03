import DisSystem from './DisSystem'
import disCardBgImg from '/images/memphis-colorful.webp'

const DisInfo: React.FC = () => {
    return (
        <>
            <div className="m-10 w-screen h-max content-center" style={{ backgroundImage: `url(${disCardBgImg})` }}>
                <div className="items-center text-center p-10">
                    <h2 className="mb-10 text-6xl">Disease Infomation</h2>
                    <form>
                        <DisSystem />
                    </form>
                </div>
            </div>
        </>
    )
}

export default DisInfo
