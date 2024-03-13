import ReactModal from 'react-modal';

export interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
    minHeight?: string;
    width?: string;
    label ?: string;
}


const Modal = ({ isOpen, onRequestClose, children , minHeight, width='50%', label }: ModalProps) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            shouldFocusAfterRender={true}
            shouldReturnFocusAfterClose={true}
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                },
                content: {
                    top:'100px',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, 0)',
                    width: width,
                    padding: '24px',
                    minHeight: minHeight? minHeight : 'auto',
                    minWidth: '450px',
                    maxWidth: '80vh',
                }
            }}
            contentLabel={label}
        >
            {children}
        </ReactModal>
    );
}

export default Modal;
