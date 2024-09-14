import Modal from "../Modal/Modal";

export default function Notifications({ setModal }: any) {
    return (
        <Modal setModal={setModal}>
            <div onClick={(e)=>{e.stopPropagation()}} className="notifications">

            </div>
        </Modal>
    )
}