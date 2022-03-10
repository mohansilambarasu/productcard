import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Navbar from './Navbar.jsx';
import Alerts from './Alerts.jsx';
import cardlist from "../cardlist.jsx";


function CreateCard(carditem) {
  return (
    <Card
      key = {carditem.id}
      name = {carditem.name}
      img = {carditem.imgURL}
      info = {carditem.information}
      price = {carditem.cost}
      oldprice = {carditem.oldCost}
      cardBackg = {carditem.cardBg}
    />
  );
}

function App() {
  return (
    <div>
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="alertContainer">
        <Alerts />
      </div>
      <div className="cardContainer">
        {cardlist.map(CreateCard)}
      </div>
    </div>
  );
}
export default App;
