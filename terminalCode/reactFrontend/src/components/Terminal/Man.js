
import React from "react";

import command from "./manual"
import { v4 as uuidv4 } from "uuid";

function Newline(props) {
  const newText = props.flag.split("\n").map(str => <p key={uuidv4()}>{str + "\n"}</p>);
  return newText;
}

function NewlineText(props) {
  const newText = command.map(str => {
    if (props.cmd === str.id) {
      return <ul style={{ listStyleType: "none", paddingTop: "50px" }} key={uuidv4()}>
        <li style={{ paddingBottom: "10px" }}>NAZWA</li>
        <li style={{ paddingBottom: "30px", paddingLeft: "50px" }}>{str.name}</li>
        <li style={{ paddingBottom: "10px" }}>SKŁADNIA</li>
        <li style={{ paddingBottom: "30px", paddingLeft: "50px" }} >{str.skladnia}</li>
        <li style={{ paddingBottom: "10px" }}>OPIS</li>
        <li style={{ paddingBottom: "30px", paddingLeft: "50px" }}>{str.info}</li>
        <li style={{ paddingBottom: "30px", paddingLeft: "50px" }}><Newline flag={str.flags} /></li>
      </ul>
    }
  });
  return newText;
}

export default class Man extends React.Component {
  state = {
    inClear: ""
  }
  onClose = (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    this.setState({
      inClear: ""
    })
    if (charCode === 'q') {
      this.props.onClose();
    }
  };


  handleFocus = (event) => event.target.select()

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {

    return (
      <div className="man" onKeyDown={e => {
        this.onClose(e)
      }} >
        <div className="manual"  >
          <NewlineText cmd={this.props.cmd} />
        </div>
        <input type="text" className="manExit" value={this.state.inClear} autoFocus placeholder="strona manualu naciśnij q aby wyjść" onChange={this.onChange} />
      </div>
    );
  }
}