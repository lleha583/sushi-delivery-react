import { useState } from "react";
import "./auth.css";
import { signin } from "../../services/auth/signin";
interface IForm {
    email: string,
    password: string,
}

export default function Signin({ setStatus }: { setStatus: (value: string) => void }) {

    const [isEmpty, setIsEmpty] = useState<null | string>(null)
    const [formData, setFormData] = useState<IForm>({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formData.email === '') return setIsEmpty('email')
        if (formData.password === '') return setIsEmpty('password')
        signin(formData)
    };

    return (
        <div onClick={(e) => { e.stopPropagation() }} className="auth">
            <h1>Вход в аккаунт</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="почта"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {(isEmpty === 'email' && <span className="input_empty">введите почту</span>)}
                <input
                    type="password"
                    placeholder="пароль"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {(isEmpty === 'password' && <span className="input_empty">введите пароль</span>)}
                <input id="btn_submit" type="submit" value="Вход" />
            </form>
            <button onClick={() => { setStatus('register') }}>регистация</button>
        </div>
    )
};
