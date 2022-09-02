
import React from "react";
import { v4 as uuidv4 } from "uuid";

function NewlineText(props) {
  const newText = props.children.split("\n").map(str => <p key={uuidv4()}>{str + "\n"}</p>);
  return newText;
}

export default class Modal extends React.Component {
  state = {
    text: this.props.children,
  }
  onClose = (event, text) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if (event.ctrlKey && charCode === 'q') {
      this.props.onSave(text);
    } else if (event.ctrlKey && charCode === 'x') {
      this.props.onClose();
    }
  };


  render() {

    return (
      <div >
        <div className="text" suppressContentEditableWarning contentEditable spellCheck={false} onKeyDown={e => {
          let text = e.currentTarget.outerText;
          this.onClose(e, text)
        }} > <NewlineText children={this.props.children} /></div>
      </div>
    );
  }
}