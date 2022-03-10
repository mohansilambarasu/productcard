import React from 'react';
import ReactDOM from 'react-dom';


function Alerts() {
  return (
    <div className = "notifications">
      <div className="NotificationBox">
        <div className="notifyBox addedCartNot">
          <span><i className="fa-solid fa-circle-check"></i> </span>
          Added Successfully!
        </div>
      </div>
      <div className="NotificationBox">
        <div className="notifyBox addedWishNot">
          <span><i className="fa-solid fa-heart"></i> </span>
          Added to Wishlist!
        </div>
      </div>
      <div className="NotificationBox">
        <div className="mainalert">
          <div className="comingsoon">
            <div className="comingsoonContents header-wrap">
              <h6>Our Complete Website</h6>
            </div>
            <div className="comingsoonContents content-wrap">
              <h2>COMING SOON</h2>
            </div>
            <div className="comingsoonContents footer-wrap">
              <h5>Follow Us</h5>
              <div className="footerLogos">
                <span> <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></span>
                <span> <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></span>
                <span> <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
