import { APIRequestContext } from '@playwright/test';

export class RequestHandler {
    private readonly baseUrl: string;
    private readonly request: APIRequestContext;

    constructor(baseUrl: string, request: APIRequestContext) {
        this.baseUrl = baseUrl;
        this.request = request;
    }

    async post(endpoint: string, data: any) {
        const response = await this.request.post(`${this.baseUrl}${endpoint}`, {
            data,
        });
        return response.json();
    }
}
