import React,{useState} from 'react';
import Table from '../components/Table2/table'
import Modal from '@material-ui/core/Modal';

export default function Alternativa() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    return(
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Table/>
            </Modal>
            <Table handleOpen={handleOpen}/>
        </>
    )
}