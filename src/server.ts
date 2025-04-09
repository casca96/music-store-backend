import express, { Request, Response } from 'express';
import musicStoreData from './data/musicStoreData.json';
import cors from 'cors';
import { artistsController } from './controller/artistsController.ts';
import { productsController } from './controller/productsController.ts';

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

app.get('/category/:category', productsController.getProductByCategory);
app.get('/:id', productsController.getProductById);

app.get('/api/artists', (req: Request, res: Response) => {
    res.json(musicStoreData.artists);
});
app.get('/:id/albums', artistsController.getArtistAlbum);
app.get('/:id', artistsController.getArtistById);

app.get('/contact', (req: Request, res: Response) => {
    res.json();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});