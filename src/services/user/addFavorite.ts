import axios from "axios";
import { IProduct } from "../../interface/interface";

export const addFavorite = (item: IProduct) => {
    const category = () => {
        if(item.type === undefined) {
            return 'set'
        } else {return 'food'}
    }

    axios.post(`http://127.0.0.1:8000/commands/favoritelist/add?food_id=${item.id}&type_food=${category()}`, '', { withCredentials: true })
    .then(res=> {return res})
    .catch(e=>console.log(e))
};
