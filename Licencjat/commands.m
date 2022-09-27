render() {
  return (
   <div className="lineCmd"> 
     {!this.state.showAlet ? 
      <div style={{width: "100%"}}>
        <span>
            {this.props.prompt}
        </span>
        <input type="text" 
               className="inputCmd"
               value={this.state.title}
               name="title"
               onChange={this.onChange}
               onKeyDown={e => {
                  if (e.key === "Enter") {
                    this.listenCmd("Enter")
                    this.setState({scrollUp: -1})
                    this.props.addHistoryProps(this.state.title)
                  } 
                  else if (e.key === "ArrowUp") {
                      this.scrollHistoryUp()
                  } 
                  else if (e.key === "ArrowDown") {
                      this.scrollHistoryDown()
                  }
                }}>
         </input> 
       </div> : 
        <div> 
         <span style={{ color: 'white'}}>
             {this.state.overwrite}
         </span>
         <input type="text" 
                className="inputCmd"
                value={this.state.prompt}
                name="prompt"
                onChange={this.onChange}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                     this.listenCmd("Enter")
                     this.props.addHistoryProps(this.state.title)
                }
              }}>
         </input>
       </div>
      }
    </div> 
)}