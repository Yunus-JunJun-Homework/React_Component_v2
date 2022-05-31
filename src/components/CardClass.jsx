import React from "react";


class CardClass extends React.Component {
  render() {
    return ( <div className="card-body">
   {this.props.title ? <h4 className="card-title">{this.props.title}</h4> : null}
    {this.props.text ? <p className="card-text">{this.props.text}</p> : null}
  </div>)
   
  }
}


export default CardClass;