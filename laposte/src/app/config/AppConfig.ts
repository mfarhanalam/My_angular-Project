import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigModel } from './AppConfigModel';
import { SampleService } from './sample.service';
@Injectable()
export class AppConfig {
    static settings: AppConfigModel;
    hostName = '';
    constructor(private http: HttpClient, private sampleService: SampleService,) { }
    load() {
        this.hostName = this.sampleService.getHostname();
        let jsonFile:any;
        if (this.hostName.includes('sl.bizmobia.com')) {
            jsonFile = 'clients/client.json';
        } else {
            jsonFile = 'clients/client.json';
        }
        return new Promise<any>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: any) => {
                AppConfig.settings = <AppConfigModel>response;
                AppConfig.settings.hostName = this.hostName;
                if (AppConfig.settings.runLocalService && (this.hostName.includes('localhost') || this.hostName.includes('192.168.100'))) {
                    AppConfig.settings.webServicesUrl = AppConfig.settings.localWebServicesUrl;
                    AppConfig.settings.isConsole = true;
                } else if (!AppConfig.settings.runLocalService && (this.hostName.includes('localhost') || this.hostName.includes('192.168.100'))) {
                    AppConfig.settings.isConsole = true;
                } else {
                    AppConfig.settings.isConsole = false;
                }
                resolve(AppConfig.settings);
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}