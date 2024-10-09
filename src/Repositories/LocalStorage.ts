import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class LocalStorage implements Storable {
    private storageKey = 'cart';

    addProduct(product: Product): void {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    }

    getProducts(): Product[] {
        const storedProducts = localStorage.getItem(this.storageKey);
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    getTotalPrice(): number {
        return this.getProducts().reduce((total, product) => total + product.price, 0);
    }

    clear(): void {
        localStorage.removeItem(this.storageKey);
    }
}