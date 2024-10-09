import { Request, Response } from 'express';
import { AddProductToCart } from '../UseCases/AddProductToCart';
import { GetCartTotal } from '../UseCases/GetCartTotal';
import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class CartController {
    constructor(private storage: Storable) {}

    addProduct(req: Request, res: Response): void {
        const { name, price } = req.body;

        if (!name || price === undefined) {
            res.status(400).send("Nom et prix sont requis.");
            return;
        }

        console.log(`Ajout du produit : ${name}, Prix : ${price}`);
        const product = new Product(name, price);
        const addProductUseCase = new AddProductToCart(this.storage);
        addProductUseCase.execute(product);

        console.log("Total actuel du panier :", this.storage.getTotalPrice());
        res.status(200).send('Produit ajouté au panier');
    }

    
    getTotal(req: Request, res: Response): void {
        const getTotalUseCase = new GetCartTotal(this.storage);
        const total = getTotalUseCase.execute();
        res.status(200).json({ total });
    }

    clearCart(req: Request, res: Response): void {
        this.storage.clear(); // Vide le stockage
        console.log("Panier vidé");
        res.status(200).send("Panier vidé avec succès");
    }
}