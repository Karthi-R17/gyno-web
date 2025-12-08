export interface Product{
    name: string,
    slug: string,
    division: string,
    title?: string,
    subtitle?: string,
    image?: string,
    price?:number,
    mrp?: number, 
    discounts?: number, 
    badge?: string, 
    description?: string,
    details: any,
}