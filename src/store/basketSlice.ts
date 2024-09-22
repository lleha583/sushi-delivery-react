import { createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../interface/interface";

export const basketSlice = createSlice({
    name: "basket",
    initialState: [] as IBasket[],
    reducers: {
        addProduct: (state, action) => {
            let value = false

            state.forEach((item: IBasket)=> {
                if(item.name === action.payload.title) {
                    value = true
                    const result = (summ: number) => { return (Math.round(summ * 100) / 100)}

                    item.price = result(item.price + item.startPrice)
                    item.quantity++
                }})

            if(value) return;

            state.push({
                name: action.payload.title,
                quantity: 1,
                startPrice: action.payload.price,
                price: action.payload.price
            })
        },
        plusProduct: (state, action) => {

            state.forEach((item: IBasket, index: number)=> {

                if(index === action.payload) {
                    const result = (summ: number) => { return (Math.round(summ * 100) / 100)}

                    item.price = result(item.price + item.startPrice)
                    item.quantity++
                }
            })
        },
        minusProduct: (state, action) => {

            state.forEach((item: IBasket, index: number)=> {

                if(index === action.payload) {
                    if(item.quantity === 1) return

                    const result = (summ: number) => { return (Math.round(summ * 100) / 100)}

                    item.price = result(item.price - item.startPrice)
                    item.quantity--
                }
            })
        },
        deleteProduct: (state, action) => {
            
            state.splice(action.payload, 1)
        }
    }
})

export const { addProduct, plusProduct, minusProduct, deleteProduct } = basketSlice.actions 

export default basketSlice.reducer