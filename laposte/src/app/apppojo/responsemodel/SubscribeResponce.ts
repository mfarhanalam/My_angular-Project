import { ServiceReportResponse } from './ServiceReportResponse';
import { PortalReportResponse } from './PortalReportResponse';

export class SubscribeResponce {
    public serviceReportResponses: Array<ServiceReportResponse>;
    public portalReportResponses: Array<PortalReportResponse>;
}
