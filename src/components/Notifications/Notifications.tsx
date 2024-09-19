import Modal from "../Modal/Modal";

type TProps = {
    setModal: (value: number | null) => void
}

export default function Notifications({ setModal }: TProps) {
    return (
        <Modal setModal={setModal}>
            <div onClick={(e)=>{e.stopPropagation()}} className="notifications">

            </div>
        </Modal>
    )
}