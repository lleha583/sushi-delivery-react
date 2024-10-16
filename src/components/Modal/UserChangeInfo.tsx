import { useState } from "react";
import Modal from "./Modal";
import './Modal';
import { IUser } from "../../interface/interface";
import { changeInfo } from "../../services/user/changeInfo";

interface IProps {
    user: IUser,
    setModal: (modal: null | number) => void
}

interface IForm {
    [key: string]: string;
    username: string,
    email: string,
    number: string,
}

export default function UserChangeInfo({ user, setModal }: IProps) {

    const [formData, setFormData] = useState<IForm>({
        username: user.data.username || '',
        email: user.data.email || '',
        number: user.data.number || '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <Modal setModal={setModal}>
            <div className="modal_user_info" onClick={(e) => { e.stopPropagation() }}>
                <h2>Данные пользователя</h2>
                <form onSubmit={()=>{changeInfo(formData, user)}}>
                    <label>
                        имя:
                        <input
                            className="user_change_info_input"
                            type="text"
                            placeholder="имя"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            title="слишком короткое имя"
                        />
                    </label>
                    <label>
                        номер:
                        <input
                            className="user_change_info_input"
                            type="text"
                            placeholder="номер"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        почта:
                        <input
                            className="user_change_info_input"
                            type="text"
                            placeholder="почта"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                        <input 
                            className="user_change_info_submit"
                            type="submit" 
                            value="подтвердить"
                        />
                </form>
            </div>
        </Modal>
    )
};
