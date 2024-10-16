import { createPortal } from "react-dom";
import './modal.css'

interface IProps {
    children: React.ReactNode, 
    setModal: (modal: null | number) => void
}

export default function Modal({ children, setModal }: IProps) {


    const docModal = document.getElementById('modal') as HTMLDivElement

    return (createPortal(
        <div onClick={()=>{setModal(null)}} className="modal_background">

            {children}
        </div>,
        docModal
        )
    )
}