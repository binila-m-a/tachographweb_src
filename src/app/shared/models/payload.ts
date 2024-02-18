export class ApiRequest {
    controller!: string;
    action!: string;
    data!: any;
}

export class ApiResponse {
    isSuccess!: boolean;
    message!: string;
    data!: any;
    total!: number;
}


