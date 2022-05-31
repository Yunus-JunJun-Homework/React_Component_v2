import React from 'react';

function FuncCardComponent({title, text}){
  return <div className="card-body">
  {title ? <h4 className="card-title">{title}</h4> : null}
  {text ? <p className="card-text">{text}</p> : null}
</div>

}

export default FuncCardComponent;