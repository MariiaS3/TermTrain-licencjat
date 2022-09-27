render() {
 return (
  <div className="termContainer" style={this.props.termStyle}>
    {!this.state.showModal ? 
      <div style={{width:"100%"}}>
       <div style={{ marginLeft:'20px', marginTop:'20px'}}>
         <ul> 
          {this.state.command.map(cmd =>
           <li style={{ listStyleType: "none" }} key={cmd.id}>
             {cmd.text.includes(":~#") || cmd.text.includes(":~$") ?
               <span style={{ color: "#53D632" }}>
                  {cmd.text.includes(":~#") ? 
                   cmd.text.split(":~#")[0] + ":~# " : 
                   cmd.text.split(":~$")[0] + ":~$ "}
                      <span style={{ color:"#D7DEDE" }}>
                        {cmd.text.includes(":~#") ? 
                         cmd.text.split(":~#")[1] : 
                         cmd.text.split(":~$")[1]}
                      </span>
                </span> : 
                <span style={{ color:"#D7DEDE",paddingLeft:"10px"}}>
                  {cmd.text}
                </span>}
          </li>)} 
         </ul>
        </div>
       <Commands 
                 command={this.state.command}
                 addHistoryProps={this.addToHistory}
                 addCommandPops={this.addCommand}
                 delCommandProps={this.deleteCommand}
                 delHistoryProps={this.deleteHistory}
                 addTitlePops={this.addTitle}
                 changePathProp={this.changePath}
                 showModalProps={this.showModal}
                 showManProps={this.showMan}
                 addManCommandProp={this.addManCommand}
                 prompt={this.state.prompt}
                 path={this.state.path}
                 sleep={this.sleep}
                 history={this.state.history}
                 prevPath={this.state.prevPath} />
      </div> :  
      <div>
       {!this.state.showMan ?
         <Nano onClose={this.showModal} onSave={this.saveText} 
                                 children={this.state.text} /> :
         <Man onClose={this.showMan} cmd={this.state.text} />} 
    </div>
    }
   </div>
)}