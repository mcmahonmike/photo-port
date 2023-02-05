import React from "react";


function Contact() {

    return (
        <div className="container">
        <h1>Contact Me</h1>
        <ul>
        <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
              </div>
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
        </form>
        Buyers note:
              <p>Photos are</p>
              <li>Not printed in duplicate all are original prints</li>
              <li>Printed at 8x10 in size unless discussed</li>
              <li>Please allow 5-7 business days for printing and shipping</li>
              <li>There will be a shipping fee that may vary upon location</li>
              If you have any other questions or concerns please feel free
              to use the inquiry email and I will address them as soon as I
              am able to.
        </ul>
      </div>
 );
}

export default Contact;