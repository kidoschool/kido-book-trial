import React, { Component } from 'react';
import './Modal.css';

import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {
    
    render() {
      
        return (
            <div>
                <Backdrop />
                <div className="modalbody">
                <button className="closebutton mt-3 mr-3 btn btn-danger btn-sm" onClick = {() => this.props.close(this.props.modalCloseHandler)}>X</button>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Modal;
