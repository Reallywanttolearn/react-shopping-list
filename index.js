import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Jajanan(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> Rp.{props.price}
  </div>;
}

function Drink(props){
  return <div className="item">
    <b>Name:</b> {props.name} <br/>
    <b>Price:</b> Rp.{props.price}
    </div>
}

ReactDOM.render(
  <div>
    <h1>Daftar Menu jajanan </h1>
    <Jajanan name="Cheese" price="5000" />
    <Jajanan name="Bread" price="7000" />
    <Jajanan name="Ice cream" price="8000" />
    <h1>Daftar Menu Minuman </h1>
    <Drink name="Teh Pucuk" price="3000"/>
    <Drink name="Pop Ice" price="5000" />
    <Drink name="Thai Tea" price="6000" />
  </div>, 
  document.getElementById('root')
);