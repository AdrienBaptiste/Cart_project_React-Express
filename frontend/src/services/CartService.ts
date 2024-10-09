export async function addProductToCart(name: string, price: number) {
    try {
        const response = await fetch('/cart/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price }),
        });
        
        if (response.ok) {
            console.log("Produit ajouté avec succès");
        } else {
            console.error("Erreur lors de l'ajout du produit:", response.statusText);
        }
    } catch (error) {
        console.error("Erreur de connexion avec le serveur:", error);
    }
}

export async function getCartTotal() {
    const response = await fetch('/cart/total');
    const data = await response.json();
    return data.total;
}

export async function clearCart() {
    try {
        const response = await fetch('/cart/clear', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (!response.ok) {
            console.error("Erreur lors du vidage du panier:", response.statusText);
        } else {
            console.log("Panier vidé avec succès");
        }
    } catch (error) {
        console.error("Erreur de connexion avec le serveur:", error);
    }
}