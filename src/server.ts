import express, { Request, Response } from 'express';
import musicStoreData from './data/musicStoreData.json';
import cors from 'cors';
import { artistsController } from './controller/artistsController';
import { productsController } from './controller/productsController';
import { contactController } from './controller/contactController';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/api/instruments', (req: Request, res: Response) => {
    res.json(musicStoreData.products);
});

app.get('/api/instruments/category/:category', productsController.getProductByCategory);
app.get('/api/instruments/:id', productsController.getProductById);

app.get('/api/artists', (req: Request, res: Response) => {
    res.json(musicStoreData.artists);
});
app.get('/api/artist/:id/albums', artistsController.getArtistAlbum);
app.get('/api/artist/:id', artistsController.getArtistById);

app.get('/api/contact', contactController.getContactInfo);
app.post('/api/contact', contactController.submitContactForm);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});