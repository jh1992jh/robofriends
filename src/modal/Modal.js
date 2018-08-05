import React, { Component } from 'react';
import Portal from './Portal';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <div className="modalWrapper">
            <div className="modalCard">
              <i className="fas fa-times" onClick={toggle} />

              <div>{children}</div>
            </div>
            <div className="modalBackground" onClick={toggle} />
          </div>
        )}
      </Portal>
    );
  }
}

export default Modal;
