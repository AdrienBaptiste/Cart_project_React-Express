import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class AddProductToCart {
    constructor(private storage: Storable) {}

    execute(product: Product): void {
        this.storage.addProduct(product);
    }
}