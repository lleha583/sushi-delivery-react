import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/interface";

export const checkAuth = createAsyncThunk(
    'fetch/user',
    async () => {
        try {
            const fetchData = await fetch('http://127.0.0.1:8000/user/showinfo', {
                method: "GET",
                credentials: "include"
            })

            const data = await fetchData.json();
            console.log(data);
            return data
        }
        catch {
            console.log('ошибка соеденения с сервером');
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        data: {
            number: null,
            username: null,
            registered_at: null,
            id: null,
            email: null,
            addresses: null,
            password: null,    
        }
    } as IUser,

    reducers: {},

    extraReducers(builder) {    
        builder.addCase(checkAuth.fulfilled, (state, action) => {
            if(action.payload.status_code === 200) {
                state.status = true
                state.data = {...action.payload.detail}
            }
        })
    },
})

export default userSlice.reducer