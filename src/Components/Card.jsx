import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  return <div className = "card">
          <div className="cardBackground" style = {{backgroundColor: props.cardBackg}}></div>
          <div className = "productPics" >
            <img src = {props.img} />
          </div>
          <div className = "productContent" >
            <h2 className = "productName" style = {{color: props.cardBackg}}> {props.name} </h2>
            <p className = "productInfo">{props.info}</p>
            <h3 className = "productPrice">{props.price} <span className="oldPrice" >{props.oldprice}</span>  </h3>
          </div>
          <div className = "addtoCart">
            <a className = "productHeart"><i className="fa-solid fa-heart"></i></a>
            <a className = "productAdd"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
}

export default Card;
// <img className = "productImg" src = {props.img} alt="product"></img>
