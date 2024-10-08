import axios from "axios";

export const signin = (formData: { email: string, password: string }) => {

    axios
        .post('http://127.0.0.1:8000/auth/signin', formData, {withCredentials: true})
        .then((response) => {
            console.log(response);
            if(response.data === null) location.reload();
            return response.data.detail
        })
        .catch((error) => {
            console.log(error);
        })
}