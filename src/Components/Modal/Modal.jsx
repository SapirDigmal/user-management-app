import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";

const Modal = ({ isShowing, hide, save, title, children }) => isShowing ? ReactDOM.createPortal(
    <>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={hide}>
            <div className="modal" onClick={e=> e.stopPropagation()}>
                <div className="modal-header">
                    <h1>{title}</h1>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button onClick={hide}>
                        Cancel
                    </button>
                    <button className="btn-confirm" onClick={() => {save(); hide();}}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </>, document.body
) : null;

export default Modal;