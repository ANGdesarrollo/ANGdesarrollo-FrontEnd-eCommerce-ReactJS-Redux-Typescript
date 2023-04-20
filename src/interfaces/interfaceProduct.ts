export interface IProduct {
    _id: string;
    date: string;
    name: string;
    price: number;
    thumbnail: Thumbnail;
    stock: number;
    discount: number;
    category: string;
    soldQty: number;
    details: string;
    qty?: number;
}

interface Thumbnail {
    imgPath: string;
    backgroundPath: string;
}

export interface IProductCart {
    _id: string;
    price: number;
    qty: number;
}
