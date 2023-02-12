import { Controller } from "../core/Controller";
import { NextFunc, HttpRequest, HttpResponse } from "../core/Types";
import { Role } from "../core/IUserProvider";
import { IWeightDataProvider } from "../core/IWeightDataProvider";
import { IUserProvider } from "../core/IUserProvider";


export class DashboardController extends Controller {

    private WeightDataProvider: IWeightDataProvider;
    private UserProvider: IUserProvider;

    public onRegister(): void {
        this.onGet("/", this.index, [Role.Admin, Role.Manager, Role.User]);
    }

    /**
     * Shall provide the dashboard interface with stats data
     */
    public async index(req: HttpRequest, res: HttpResponse, next: NextFunc) {
        res.bag.pageTitle = "Weight Link | Dashboard"
        const stats: any = [];

        stats.total_sessions = await this.WeightDataProvider.count();
        stats.today_sessions = await this.WeightDataProvider.todayCount();
        stats.total_users = await this.UserProvider.count();

        res.bag.stats = stats;
        res.view('dashboard/admin');
    }





}