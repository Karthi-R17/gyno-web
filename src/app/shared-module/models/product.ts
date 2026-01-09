export interface ProductDetails {
  pack: string;
  indication: string;
  dose: string;
  disclaimer?: string;
}

export interface Product{
    name: string,
    slug: string,
    division: string,
    indication?: string
    title?: string,
    subtitle?: string,
    image?: string,
    price?:number,
    mrp?: number, 
    discounts?: number, 
    badge?: string, 
    description?: string,
    details: ProductDetails,
}