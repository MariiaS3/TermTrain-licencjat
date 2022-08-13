
import React from "react"; 


export default class Man extends React.Component {
    onClose = (event, text) => {
      let charCode = String.fromCharCode(event.which).toLowerCase();
      console.log(this.props.children)
      if (event.ctrlKey && event.altKey && charCode === 'o') {
        this.props.onSave(text);
      } else if (event.ctrlKey && charCode === 'x') {
        this.props.onClose();
      }
    };
  
  
    render() {
  
      return (
        <div >
          <div className="text" suppressContentEditableWarning contentEditable spellCheck={false} onKeyDown={e => {
            let text = e.currentTarget.textContent;
            this.onClose(e, text)
          }} >{this.props.children}</div>
        </div>
      );
    }
  }