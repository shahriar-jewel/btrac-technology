import ServiceModel from "../../models/ServiceModel";
import SliderModel from "../../models/SliderModel";
import BrandModel from "../../models/BrandModel";
import MediaLinkModel from "../../models/MediaLinkModel";
import PartnerModel from "../../models/PartnerModel";
import { ISlider, IHomeProvider, IService, IBrand, IMediaLink, IPartner } from "../../core/api/IHomeProvider";


export class HomeProvider implements IHomeProvider {

    public async createSlider(title: string, description: string, image: string): Promise<ISlider> {
        return await SliderModel.create({
            title,
            description,
            image
        });
    }
    public async getAllSlider(): Promise<ISlider[]> {
        return await SliderModel.find({isActive : true});
    }
    public async test(): Promise<any> {
        return 'this is for testing purpose';
    }
    public async createService(title: string, description: string, image: string, alt: string): Promise<IService> {
        return await ServiceModel.create({
            title,
            description,
            image,
            alt
        });
    }
    public async getAllService(): Promise<IService[]> {
        return await ServiceModel.find({isActive : true});
    }
    public async createBrand(image: string, alt: string): Promise<IBrand> {
        return await BrandModel.create({
            image,
            alt
        });
    }
    public async getAllBrand(): Promise<IBrand[]> {
        return await BrandModel.find({isActive : true});
    }
    public async createMediaLink(name: string, url: string, logo: string): Promise<IMediaLink> {
        return await MediaLinkModel.create({
            name,
            url,
            logo
        });
    }
    public async getAllMediaLink(): Promise<IMediaLink[]> {
        return await MediaLinkModel.find({isActive : true});
    }
    public async createPartner(title: string, description: string, image: string, registerLink: string, buttonText: string): Promise<IPartner> {
        return await PartnerModel.create({
            title,
            description,
            image,
            registerLink,
            buttonText
        });
    }
    public async getAllPartner(): Promise<IPartner[]> {
        return await PartnerModel.find({isActive : true});
    }
}