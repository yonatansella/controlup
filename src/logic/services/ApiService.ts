import { RequestHandler as ApiService } from '../../infra/RequestHandler';

export class NeemaApiService {
    private readonly apiClient: ApiService;

    constructor(apiService: ApiService) {
        this.apiClient = apiService;
    }

    async login(phoneNumber: string, password: string) {
        return await this.apiClient.post('/login', {
            phone_number: phoneNumber,
            password: password,
        });
    }

    async transfer(amount: number, externalId: string, comment: string = "Gift") {
        return await this.apiClient.post('/n2n/transfer', {
            "amount": amount,
            "comment": comment,
            "contact": {
                "externalId": externalId,
            }
        });
    }

    async breakdown(amount: number, currencyId: number) {
        return await this.apiClient.post('/n2n/breakdown', {
            amount: amount,
            currencyId: currencyId,
        });
    }

}
