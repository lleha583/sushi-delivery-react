import { useState } from "react";
import "./auth.css";
import { register } from "../../services/auth/register";

interface IForm {
    name: string,
    email: string,
    number: string,
    password: string,
    repeatPassword: string
}

export default function Register({ setStatus }: { setStatus: (value: string) => void }) {

    const [isEmpty, setIsEmpty] = useState<null | string>(null)

    const [formData, setFormData] = useState<IForm>({
        name: '',
        email: '',
        number: '',
        password: '',
        repeatPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        for(const key in formData) {
            if(key === '') {
                return setIsEmpty(key)
            }
        }
        if(formData.password !== formData.repeatPassword) return setIsEmpty('incorrect')
        setIsEmpty(null)
        register(formData)
        setStatus('signin')
    };


    return (
        <div onClick={(e) => { e.stopPropagation() }} className="auth">
            <h1>Регистация</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    pattern="{3,}"
                    title="слишком короткое имя"
                /> 
                {(isEmpty === 'name' && <span className="input_empty">введите имя</span>)}
                <input
                    type="email"
                    placeholder="почта"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
                {(isEmpty === 'email' && <span className="input_empty">введите почту</span>)}
                <input
                    type="number"
                    placeholder="номер"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                />
                {(isEmpty === 'number' && <span className="input_empty">введите номер</span>)}
                <input
                    type="password"
                    placeholder="пароль"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="пароль должен содержать 6 или более символов, которые имеют минимум одно число и заглавную букву"
                />
                {(isEmpty === 'password' && <span className="input_empty">введите пароль</span>)}
                <input
                    type="password"
                    placeholder="подтвердите пароль"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                />
                {(isEmpty === 'repeatPassword' && <span className="input_empty">повторите введённый пароль</span>)}
                {(isEmpty === 'incorrect' && <span  className="input_empty">неверный пароль</span>)}
                <input id="btn_submit"
                    type="submit"
                    value="Вход"
                />
            </form>
            <button onClick={() => { setStatus('signin') }}>вернуться</button>
        </div>
    )
};
