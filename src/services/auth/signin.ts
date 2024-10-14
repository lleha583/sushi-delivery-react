import axios from "axios";

interface ISignin {
    formdata: { 
        email: string, 
        password: string 
    }
}

export const signin = (formData: ISignin) => {
    
    axios
        .post('http://127.0.0.1:8000/auth/signin', formData, {withCredentials: true})
        .then((response) => {
            console.log(response);
            if(response.data === null) location.reload();
        })
        .catch((error) => {
            console.log(error);
        })
}