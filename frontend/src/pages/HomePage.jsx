import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <div className="product-grid">
                        {[1, 2, 3, 4].map((id) => (
                            <ProductCard key={id} productId={id} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;