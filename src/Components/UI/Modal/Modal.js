import React from 'react';
import './Modal.css';
import BackDrop from '../Backdrop/BackDrop';

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextSate) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    render() {
        return (
            <React.Fragment>
                <BackDrop show={this.props.show} modalClose={this.props.modalClose} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? "1" : "0"
                    }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
};
export default Modal;