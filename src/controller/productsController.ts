import musicStoreData from '../data/musicStoreData.json';
import {Request, Response} from "express";
import {Product} from "../types/productTypes.ts";

export const productsController =
    {
        getProductByCategory: (req: Request, res: Response) =>
        {
            try{
                const category = req.params.category;
                const products: Product[] = musicStoreData.products.filter(p => p.category.toLowerCase()=== category.toLowerCase());

                if (products.length === 0) {
                    res.status(404).json({ error: 'Products not found' });
                    return;
                }

                res.json(products);
            }catch (error) {
                console.error('Error fetching products by category', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
