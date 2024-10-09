import express from 'express';
import path from 'path';
import { InMemoryStorage } from './Repositories/InMemoryStorage';
import { CartController } from './Controllers/CartController';

const app = express();
app.use(express.json());

const storage = new InMemoryStorage();
const cartController = new CartController(storage);

app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));
app.post('/cart/clear', (req, res) => cartController.clearCart(req, res)); // Route pour vider le panier

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});