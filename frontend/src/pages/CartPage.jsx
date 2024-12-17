import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';

const CartPage = () => {
    const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

    return (
        <>
            <Navbar />
            <div className="cart-page">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CartPage;
