import { Modal } from "react-bootstrap"

export default function WinnerModal({show,onHide})
{

    function onClose()
    {
        onHide(false);
    }

    return(<div>
        <Modal centered onHide={onClose} show={show} >
            <Modal.Header closeButton>You have don it</Modal.Header>
            <Modal.Body>Refresh this page for the new question</Modal.Body>
        </Modal>
    </div>);
}