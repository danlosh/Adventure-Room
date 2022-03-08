import React from "react";

function ContactUs() {
  return (
    <>
      <div>
        <h1 className="about">CONTACT US</h1>
      </div>
      <div>
        <h3 className="about-us-h3">
          We are happy to provide you any help you need! Please don't hesitate
          to contact us at any of the below options.
        </h3>
        <div className="underline mx-auto"></div>
      </div>
      <section>
        <div className="col-md-4 mx-auto">
          <hr />
          <p className="email-link">
            <a href="mailto:AdventureRoomDenver@gmail.com?body=My custom mail body">
              Email: AdventureRoomDenver@gmail.com
            </a>
          </p>
          <hr />
          <p className="phone-link">
            <a href="tel:(720)-630-4555">Call us at: (720)-630-4555</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
