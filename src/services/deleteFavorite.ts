import axios from "axios";
import { IProduct } from "../interface/interface";

export const deleteFavorite = (item:IProduct) => {

    let type = 'food';

    if (item.type === undefined) {
        type = 'set'
    }

    axios.delete(`http://127.0.0.1:8000/commands/favoritelist/product?food_id=${item.id}&type_food=${type}`, {withCredentials: true})
        .then((res) => {console.log(res);})
};
