import { Document } from "mongoose";

export interface ISlider extends Document {
    title: string,
    description: string,
    image: string,
    isActive: boolean,
}
export interface IService extends Document {
    title: string,
    description: string,
    image: string,
    alt: string,
    isActive: boolean,
}
export interface IBrand extends Document {
    image: string,
    alt: string,
    isActive: boolean,
}
export interface IMediaLink extends Document {
    name: string,
    url: string,
    logo: string,
    isActive: boolean,
}
export interface IPartner extends Document {
    title: string,
    description: string,
    image: string,
    registerLink: string,
    buttonText: string,
    isActive: boolean,
}
export interface ISliderPage {
    size: number,
    page: number,
    count: number,
    data: ISlider[]
}
export interface IHomeProvider {
    /**
     * Get slider data
     */
    getAllSlider(): Promise<ISlider[]>;
    /**
     * To create a slider
     * @param title to create for
     * @param description to create for
     * @param image to create for
     */
    createSlider(title: string, description: string, image: string): Promise<ISlider>;
    /**
     * Get service data
     */
    getAllService(): Promise<IService[]>;
    /**
     * To create a service
     * @param title to create for
     * @param description to create for
     * @param image to create for
     * @param alt to create for
     */
    createService(title: string, description: string, image: string, alt: string): Promise<IService>;
    /**
     * Get brand data
     */
    getAllBrand(): Promise<IBrand[]>;
    /**
     * To create a brand
     * @param image to create for
     * @param alt to create for
     */
    createBrand(image: string, alt: string): Promise<IBrand>;
    /**
     * Get all media link data
     */
    getAllMediaLink(): Promise<IMediaLink[]>;
    /**
     * To create a service
     * @param name to create for
     * @param url to create for
     * @param logo to create for
     */
    createMediaLink(name: string, url: string, logo: string): Promise<IMediaLink>;
    /**
     * Get all partners data
     */
    getAllPartner(): Promise<IPartner[]>;
    /**
     * To create a partner
     * @param title to create for
     * @param description to create for
     * @param image to create for
     * @param registerLink to create for
     * @param buttonText to create for
     */
    createPartner(title: string, description: string, image: string, registerLink: string, buttonText: string): Promise<IPartner>;

    test(): Promise<any>;
}