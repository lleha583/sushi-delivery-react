import { useState } from "react";
import Signin from "./Signin";
import Register from "./Register";

export default function Auth() { 



    const [status, setStatus] = useState('signin') 

    return (
        <>
            {(status === 'signin' && <Signin setStatus={setStatus} />)}
            {(status === 'register' && <Register setStatus={setStatus} />)}
        </>
    )  
};
