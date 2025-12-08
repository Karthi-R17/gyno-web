export interface About {
    aboutTitle: string,
    aboutDescription: string,
    aboutImage: string,
    aboutList: Array<AboutList>,
}
export interface AboutList {
    title: string,
    icon: string,
    description: string
}