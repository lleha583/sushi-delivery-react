export interface IProduct {
    id: number,
    title: string,
    name: string,
    imageUrl: string,
    body: string | string[]
    price: number,
    weight: number
}

export interface IBasket {
    name: string,
    quantity: number,
    startPrice: number, 
    price: number
}

export interface IUser {
    status: boolean, 
    data: {
        number: string | null,
        username: string| null,
        registered_at: string| null,
        id: number| null,
        email: string| null,
        addresses: string| null,
        password: string| null,
    }
}

export interface INews {
    id: number,
    title: string,
    img: string,
    body: string,
    date: string
}

export interface IState {
    user: IUser, 
    basket: IBasket[] 
} 