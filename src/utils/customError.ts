export class CustomError extends Error{
    status: number;
    constructor(status:number, message: string){
        super(message);
        this.status=status;
    }
}

export const createCustomError = (status: number, message: string)=>{
    return new CustomError(status, message);
};