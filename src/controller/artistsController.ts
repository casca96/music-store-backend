import musicStoreData from '../data/musicStoreData.json';
import {Request, Response} from "express";
import {Artist} from "../types/artistTypes";

function findArtist(artistId: number): Artist | undefined {
    return musicStoreData.artists.find(a => a.artist_id === artistId);
}

export const artistsController =
{
    getArtistById: (req: Request, res: Response) =>
    {
        try{
            const artist  = findArtist(parseInt(req.params.id));

            if(!artist){
                res.status(404).json({error: 'No artist found'});
                return;
            }

            res.json(artist)
        }catch (error){
            console.error('Error while retrieving artists', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    },

    getArtistAlbum: (req: Request, res: Response) =>
    {
        try{
            const artist  = findArtist(parseInt(req.params.id));

            if (!artist) {
                res.status(404).json({ error: 'Artist not found' });
                return;
            }

            res.json(artist.albums);
        }catch (error) {
            console.error('Error fetching artist albums:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
