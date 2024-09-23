import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/interface";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'lleha',
        email: 'lleha583@gmail.com',
        number: '+1234567890',
        favorite: [0, 3, 4],
        adress: 'any adress',
        jwt: null
    } as IUser,
    reducers: {
        addFavorite: (state, action) => {
            state.favorite.push(action.payload)
        }
    }
})

export const { addFavorite } = userSlice.actions

export default userSlice.reducer