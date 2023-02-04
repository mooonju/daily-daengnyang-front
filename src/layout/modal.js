import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup({open, setPopup, callback}) {
    const handleClose = () => {
      setPopup({open: false});
      if(callback){
        callback();
      }
    }
    return (
      <>
        <Modal show={open} onHide={handleClose} size="sm" aria-labelledby="example-modal-sizes-title-sm">
          <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            일정 관리 선택
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="outline-secondary" size="lg" onClick={handleClose} >일정상세보기</Button>
            <span> </span>
            <Button variant="outline-secondary" size="lg" onClick={handleClose} >일정등록</Button>   
            </Modal.Body>
        </Modal>
      </>
    );
}

export default Popup;