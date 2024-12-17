import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Kombolcha Shop</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
