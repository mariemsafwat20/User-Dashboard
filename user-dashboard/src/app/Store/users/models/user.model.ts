

// user.model.ts
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    email: string;
    phone: string;
    [key: string]: any;
}
