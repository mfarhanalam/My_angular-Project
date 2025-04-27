
export class ServiceWiseContentCountsResponse {
    public serviceName: string;
    public serviceId: string;
    public submittedcount: number = 0;
    public pendingcount: number = 0;
    public rejectedcount: number = 0;
    public publishedCount: number = 0;
    public archivedCount: number = 0;
    public outdatedCount: number = 0;
    public totalcount: number = 0;
}
