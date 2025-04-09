
interface Album {
    album_id: number;
    title: string;
    release_date: string;
    genre: string;
}

export interface Artist {
    artist_id: number;
    name: string;
    bio: string;
    albums: Album[];
    image_url: string;
}
