

// user.model.ts
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    image: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    address: string;
    [key: string]: any;
}
