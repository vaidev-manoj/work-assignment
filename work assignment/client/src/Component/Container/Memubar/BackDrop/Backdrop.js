import React from 'react';


import '../BackDrop/Backfrop.css';

const Backdrop = props => {
  return  <div className="backdrop" onClick={props.onClick}></div>
  

};

export default Backdrop;