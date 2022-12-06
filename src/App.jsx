import styles from './style';
import { Billing, Business, CardDeal, Clients, Cta, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`bg-primary ${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`bg-primary ${styles.boxWidth}`}>
                   <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <Cta />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App