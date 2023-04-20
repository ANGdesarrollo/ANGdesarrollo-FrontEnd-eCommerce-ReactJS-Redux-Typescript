export interface IChat {
    _id: string;
    created_at: string;
    message: IMessage[];
    username: string;
}

export interface IMessage extends IMessageDTO {
    _id: string;
    created_at: string;
}

export interface IMessageDTO {
    idRoom?: string;
    message: string;
    username: string;
}

export interface IMessageUser {
    message: string;
    username: string;
}
