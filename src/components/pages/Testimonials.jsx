import React from "react";
import emily from "../../assets/images/image-emily.jpg";
import thomas from "../../assets/images/image-thomas.jpg";
import jennie from "../../assets/images/image-jennie.jpg";

export const Testimonials = () => {
  return (
    <div className="testimonials-container">
        <h2 className="testimonials-title">Client testimonials</h2>
      <div className="testimonials-wrapper">
        <div className="card">
          <div className="img-radius">
            <img src={emily} alt="" />
          </div>
          <div className="text-testimonials">
            <p id="text">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className="text-black">
              Emily R.</p>
            <span>
              Marketing Director
            </span>
          </div>
        </div>
        <div className="card">
          <div className="img-radius">
            <img src={thomas} alt="" />
          </div>
          <div className="text-testimonials">
            <p id="text">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.{" "}
            </p>
            <p className="text-black">
              Thomas S.
            </p>  
            <span>
              Chief Operating Officer
            </span>
          </div>
        </div>
        <div className="card">
          <div className="img-radius">
            <img src={jennie} alt="" />
          </div>
          <div className="text-testimonials">
            <p id="text">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!{" "}
            </p>
            <p className="text-black">
              Jennie F. 
            </p>
            <span>
              Business Owner
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
