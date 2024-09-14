import { createPortal } from "react-dom";
import './modal.css'

export default function Modal({ children, setModal }:{children: React.ReactNode, setModal: any}) {

    console.log('modal')


    const docModal = document.getElementById('modal') as HTMLDivElement

    return (createPortal(
        <div onClick={()=>{setModal(null)}} className="modal_background">
            {children}
        </div>,
        docModal
        )
    )
}