import axios from "axios";
import { store } from "../../store";
import { checkAuth } from "../../store/userSlice";

export const changeAddress = (address: string | null) => {
    axios.post(`http://127.0.0.1:8000/user/changeinfo?value=${address}&attribute=addresses`, '', {withCredentials: true})
    .then(()=>{store.dispatch(checkAuth())})
    .catch((err) => {console.log(err);})

    
};
