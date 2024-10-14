export interface IProduct {
    id: number,
    title: string,
    image_url: string,
    body: string | string[],
    type?: string,
    price: number,
    weight: number
}
export interface IBasket {
    img: string
    name: string,
    quantity: number,
    startPrice: number, 
    price: number,
    type?: string
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

export interface IOrder {
    name: string,
    number: string,
    delivery: number | string,
    pay: number
}