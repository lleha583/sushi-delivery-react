import axios from "axios";

export const register = async (formData: any) => {

    const sendForm = {
        email: (formData.email),
        username: formData.name,
        password: formData.password,
        number: formData.number,
        addresses: ''
      }

    axios
    .post('http://127.0.0.1:8000/auth/registration', sendForm, {withCredentials: true})
    .then(r=>{console.log(r);})
    .catch((error) => {
        console.log(error);
        return error
    })

}



