import musicStoreData from '../data/musicStoreData.json';
import {Request, Response} from "express";

export const productsController =
    {
        getProductById: (req: Request, res: Response) =>
        {
            try{
                const productId = parseInt(req.params.id);
                const product  = musicStoreData.products.find(p => p.id === productId);

                if(!product){
                    res.status(404).json({error: 'No product found'});
                    return;
                }

                res.json(product)
            }catch (error){
                console.error('Error while retrieving products', error);
                res.status(500).json({error: 'Internal Server Error'});
            }
        },

        getProductByCategory: (req: Request, res: Response) =>
        {
            try{
                const category = req.params.category;
                const product = musicStoreData.products.filter(p => p.category.toLowerCase()=== category.toLowerCase());

                if (!product) {
                    res.status(404).json({ error: 'Product not found' });
                    return;
                }

                res.json(product);
            }catch (error) {
                console.error('Error fetching products by category', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    }
