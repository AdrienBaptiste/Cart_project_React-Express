import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class InMemoryStorage implements Storable {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    clear(): void {
        this.products = [];
    }
}