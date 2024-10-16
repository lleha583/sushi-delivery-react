import axios from "axios";
import { IUser } from "../../interface/interface";

interface IForm {
    [key: string]: string;
    username: string,
    email: string,
    number: string,
}

export const changeInfo = (form: IForm, user: IUser) => {

    for(const key in form) {
        if(form[key] !== user.data[key] || user.data[key] === null) {
            
            axios.post(`http://127.0.0.1:8000/user/changeinfo?value=${form[key]}&attribute=${key}`, '', {withCredentials: true})
                .then(res=>console.log(res))
                .catch(err=>console.log(err))

        } else {
            console.log(key, 'не будет меняться');
        }
    }

    //
};
