import React from 'react';

// Définir l'interface pour les props de CartComponent
interface CartComponentProps {
    total: number;
    clearCart: () => Promise<void>;
}

// Définir CartComponent avec les types de props
export const CartComponent: React.FC<CartComponentProps> = ({ total, clearCart }) => {
    return (
        <div>
            <div>Total du panier: {total} €</div>
            <button onClick={clearCart}>Vider le panier</button>
        </div>
    );
};