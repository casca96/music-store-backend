import express, { Request, Response } from 'express';
import musicStoreData from './data/musicStoreData.json'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: musicStoreData.products });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});