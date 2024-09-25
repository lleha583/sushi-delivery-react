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
    name: string,
    email: string,
    number: string,
    favorite: number[],
    adress:string,
    status: boolean
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