import { Controller } from "../../core/Controller";
import { NextFunc, HttpRequest, HttpResponse } from "../../core/Types";
import { Role } from "../../core/IUserProvider";
import { IUserProvider } from "../../core/IUserProvider";
import fs from "fs-extra";
import moveFile from "move-file";
import multiparty from "multiparty";
import { IHomeProvider } from "../../core/api/IHomeProvider";

export class HomeController extends Controller {

    private HomeProvider: IHomeProvider;

    public onRegister(): void {
        this.onPost("/btrac-technology/api/v1/home/slider/create", this.createSlider, [Role.Admin]);
        this.onGet("/btrac-technology/api/v1/home/slider", this.getAllSlider);
        this.onPost("/btrac-technology/api/v1/home/service/create", this.createService, [Role.Admin]);
        this.onGet("/btrac-technology/api/v1/home/service", this.getAllService);
        this.onPost("/btrac-technology/api/v1/home/brand/create", this.createBrand, [Role.Admin]);
        this.onGet("/btrac-technology/api/v1/home/brand", this.getAllBrand);
        this.onPost("/btrac-technology/api/v1/home/media-link/create", this.createMediaLink, [Role.Admin]);
        this.onGet("/btrac-technology/api/v1/home/media-link", this.getAllMediaLink);
        this.onPost("/btrac-technology/api/v1/home/partner/create", this.createPartner, [Role.Admin]);
        this.onGet("/btrac-technology/api/v1/home/partner", this.getAllPartner);
    }
    /**
     * Shall provide the dashboard interface with stats data
     */
    public async createSlider(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        /* tslint:disable:no-bitwise */
        const localPath = `./build/public/uploads/images/`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        const form = new multiparty.Form();
        const timeNow = new Date().getTime();
        try {
            form.parse(req, async (err, fields, files) => {
                const newFilePath = localPath + timeNow;
                const { title, description } = fields;
                if (!files?.image || !fields?.title || !fields?.description) return resp.send({ status: 200, error: true, message: "missing required fields!.", action: "", data: {} });
                const currentPath = newFilePath + files.image[0].originalFilename;
                const fileName = timeNow + files.image[0].originalFilename;
                await fs.move(files.image[0].path, currentPath);
                await this.HomeProvider.createSlider(title[0], description[0], fileName).then(async slider => {
                    slider.isActive = true;
                    slider.save();
                    return resp.send({ status: 201, error: false, message: "home slider created successfully!.", action: "", data: {} });
                }).catch(async error => {
                    return resp.send({ status: 400, error: true, message: error, action: "", data: {} });
                });
            });
        } catch (err) {
            return resp.send({ status: 200, error: true, message: err, action: "try later", data: null });
        }
        /* tslint:enable:no-bitwise */
    }
    public async getAllSlider(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        const hostAddress: string = req.headers.host+'/uploads/images/';
        await this.HomeProvider.getAllSlider().then(async sliderPage => {
            if (sliderPage.length <= 0) return resp.send({ status: 404, error: true, message: 'no data found', action: "", data: null });
            return resp.send({ status: 200, error: false, message: 'all sliders data', action: "", data: { sliders: sliderPage, hostAddress } });
        }).catch(async error => {
            return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
        });
    }
    public async createService(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        /* tslint:disable:no-bitwise */
        const localPath = `./build/public/uploads/images/`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        const form = new multiparty.Form();
        const timeNow = new Date().getTime();
        try {
            form.parse(req, async (err, fields, files) => {
                const newFilePath = localPath + timeNow;
                const { title, description, alt } = fields;
                if (!files?.image || !fields?.title || !fields?.description) return resp.send({ status: 200, error: true, message: "missing required fields!.", action: "", data: {} });
                const currentPath = newFilePath + files.image[0].originalFilename;
                const fileName = timeNow + files.image[0].originalFilename;
                await fs.move(files.image[0].path, currentPath);
                await this.HomeProvider.createService(title[0], description[0], fileName, alt[0]).then(async service => {
                    service.isActive = true;
                    service.save();
                    return resp.send({ status: 200, error: false, message: "home service created successfully!.", action: "", data: {} });
                }).catch(async error => {
                    return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
                });
            });
        } catch (err) {
            return resp.send({ status: 200, error: true, message: err, action: "try later", data: null });
        }
        /* tslint:enable:no-bitwise */
    }
    public async getAllService(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        const hostAddress: string = req.headers.host+'/uploads/images/';
        await this.HomeProvider.getAllService().then(async servicePage => {
            if (servicePage.length <= 0) return resp.send({ status: 404, error: true, message: 'no data found', action: "", data: null });
            return resp.send({ status: 200, error: false, message: 'all services data', action: "", data: { services: servicePage, hostAddress } });
        }).catch(async error => {
            return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
        });
    }
    public async createBrand(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        /* tslint:disable:no-bitwise */
        const localPath = `./build/public/uploads/images/`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        const form = new multiparty.Form();
        const timeNow = new Date().getTime();
        try {
            form.parse(req, async (err, fields, files) => {
                const newFilePath = localPath + timeNow;
                const { alt } = fields;
                if (!files?.image || !fields?.alt) return resp.send({ status: 200, error: true, message: "missing required fields!.", action: "", data: {} });
                const currentPath = newFilePath + files.image[0].originalFilename;
                const fileName = timeNow + files.image[0].originalFilename;
                await fs.move(files.image[0].path, currentPath);
                await this.HomeProvider.createBrand(fileName, alt[0]).then(async brand => {
                    brand.isActive = true;
                    brand.save();
                    return resp.send({ status: 200, error: false, message: "home brand created successfully!.", action: "", data: {} });
                }).catch(async error => {
                    return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
                });
            });
        } catch (err) {
            return resp.send({ status: 404, error: true, message: err, action: "try later", data: null });
        }
        /* tslint:enable:no-bitwise */
    }
    public async getAllBrand(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        const hostAddress: string = req.headers.host+'/uploads/images/';
        await this.HomeProvider.getAllBrand().then(async brandPage => {
            if (brandPage.length <= 0) return resp.send({ status: 404, error: true, message: 'no data found', action: "", data: null });
            return resp.send({ status: 200, error: false, message: 'all services data', action: "", data: { brands: brandPage, hostAddress } });
        }).catch(async error => {
            return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
        });
    }
    public async createMediaLink(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        /* tslint:disable:no-bitwise */
        const localPath = `./build/public/uploads/images/`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        const form = new multiparty.Form();
        const timeNow = new Date().getTime();
        try {
            form.parse(req, async (err, fields, files) => {
                const newFilePath = localPath + timeNow;
                const { name, url } = fields;
                if (!files?.image || !fields?.name) return resp.send({ status: 404, error: true, message: "missing required fields!.", action: "", data: {} });
                const currentPath = newFilePath + files.image[0].originalFilename;
                const fileName = timeNow + files.image[0].originalFilename;
                await fs.move(files.image[0].path, currentPath);
                await this.HomeProvider.createMediaLink(name[0], url[0], fileName).then(async mediaLink => {
                    mediaLink.isActive = true;
                    mediaLink.save();
                    return resp.send({ status: 200, error: false, message: "home media link created successfully!.", action: "", data: {} });
                }).catch(async error => {
                    return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
                });
            });
        } catch (err) {
            return resp.send({ status: 404, error: true, message: err, action: "try later", data: null });
        }
        /* tslint:enable:no-bitwise */
    }
    public async getAllMediaLink(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        const hostAddress: string = req.headers.host+'/uploads/images/';
        await this.HomeProvider.getAllMediaLink().then(async mediaLinkPage => {
            if (mediaLinkPage.length <= 0) return resp.send({ status: 404, error: true, message: 'no data found', action: "", data: null });
            return resp.send({ status: 200, error: false, message: 'all media link data', action: "", data: { mediaLinks: mediaLinkPage, hostAddress } });
        }).catch(async error => {
            return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
        });
    }
    public async createPartner(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        /* tslint:disable:no-bitwise */
        const localPath = `./build/public/uploads/images/`;
        if (!fs.existsSync(localPath)) {
            fs.mkdirSync(localPath);
        }
        const form = new multiparty.Form();
        const timeNow = new Date().getTime();
        try {
            form.parse(req, async (err, fields, files) => {
                const newFilePath = localPath + timeNow;
                const { title, description, registerLink, buttonText } = fields;
                if (!files?.image || !fields?.title) return resp.send({ status: 404, error: true, message: "missing required fields!.", action: "", data: {} });
                const currentPath = newFilePath + files.image[0].originalFilename;
                const fileName = timeNow + files.image[0].originalFilename;
                await fs.move(files.image[0].path, currentPath);
                await this.HomeProvider.createPartner(title[0], description[0], fileName, registerLink[0], buttonText[0]).then(async partner => {
                    partner.isActive = true;
                    partner.save();
                    return resp.send({ status: 200, error: false, message: "home partner created successfully!.", action: "", data: {} });
                }).catch(async error => {
                    return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
                });
            });
        } catch (err) {
            return resp.send({ status: 404, error: true, message: err, action: "try later", data: null });
        }
        /* tslint:enable:no-bitwise */
    }
    public async getAllPartner(req: HttpRequest, resp: HttpResponse, next: NextFunc) {
        const hostAddress: string = req.headers.host+'/uploads/images/';
        await this.HomeProvider.getAllPartner().then(async partnerPage => {
            if (partnerPage.length <= 0) return resp.send({ status: 404, error: true, message: 'no data found', action: "", data: null });
            return resp.send({ status: 200, error: false, message: 'all partners data', action: "", data: { partners: partnerPage, hostAddress } });
        }).catch(async error => {
            return resp.send({ status: 404, error: true, message: error, action: "", data: {} });
        });
    }

}