import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CartComponent } from './components/CartComponent';
import { ProductComponent } from './components/ProductComponent';
import { getCartTotal, clearCart } from './services/CartService';
import './index.css';

const App: React.FC = () => {
    const [total, setTotal] = useState<number>(0);

    const fetchTotal = async () => {
        const totalPrice = await getCartTotal();
        setTotal(totalPrice);
    };

    // Fonction pour vider le panier et mettre à jour le total
    const handleClearCart = async () => {
        await clearCart(); // Vide le panier
        fetchTotal(); // Met à jour le total après le vidage
    };

    useEffect(() => {
        fetchTotal(); // Récupérer le total initial du panier
    }, []);

    return (
        <div>
            <h1>Mon Panier</h1>
            <ProductComponent updateTotal={fetchTotal} />
            <CartComponent total={total} clearCart={handleClearCart} /> {/* Utilise handleClearCart ici */}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));