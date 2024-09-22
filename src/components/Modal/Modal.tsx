import { createPortal } from "react-dom";
import './modal.css'

export default function Modal({ children, setModal }:{children: React.ReactNode, setModal: (modal: null | number) => void}) {


    const docModal = document.getElementById('modal') as HTMLDivElement

    return (createPortal(
        <div onClick={()=>{setModal(null)}} className="modal_background">

            {children}
        </div>,
        docModal
        )
    )
}