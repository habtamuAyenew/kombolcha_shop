import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);

    const handleCheckout = () => {
        // Process checkout logic here
    };

    return (
        <form onSubmit={handleCheckout}>
            <h2>Checkout</h2>
            <input type="text" placeholder="Shipping Address" required />
            <button type="submit">Proceed to Payment</button>
        </form>
    );
};

export default CheckoutPage;
