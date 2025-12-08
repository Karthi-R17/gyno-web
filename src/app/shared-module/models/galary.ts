export interface Galary{
    title: string,
    subtitle: string,
    description: string,
    imageList: Array<ImageList>
}

export interface ImageList{
    imageURL: string,
    imageName?: string
}