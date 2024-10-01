import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/interface";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'lleha',
        email: 'any@gmail.com',
        number: '1234567890',
        favorite: [0, 3, 4],
        adress: 'any adress',
        status: false
    } as IUser,
    reducers: {
        addFavorite: (state, action) => {
            return {
                ...state,
                favorite: [...state.favorite, action.payload],
            }
        },
        setNewStatus: (state) => {
            state.status = true
        },
    }
})

export const { addFavorite, setNewStatus } = userSlice.actions

export default userSlice.reducer