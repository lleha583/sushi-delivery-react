import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/interface";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'lleha',
        email: 'lleha583@gmail.com',
        number: '+1234567890',
        favorite: [],
        adress: 'any adress',
        jwt: null
    } as IUser,
    reducers: {

    }
})


export default userSlice.reducer