import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import "./ContactMe.css";
const ContactMe = () => {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a3762676-85ee-4258-947f-004ceba90671");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section>
      <div className="wrapper p-block-9 border-btm"  id='contact'>
        <div className="text-center">
          <div>
            <span
              className="sub-text overlay-text middle"
              datatype="contact me"
            >
              Contact Me
            </span>
            <h2>
              Let's Talk for
              <span className="green-text">         
                Your <br /> Next Project
              </span>
            </h2>
          </div>

          <div className="flex gap-5 mt-5  stretch">
            <form onSubmit={onSubmit}>
              <div className="flex gap-2">
                <div className="input-container">
                  <label htmlFor="name">Your Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="off"
                    placeholder="Ex.Amit Jadhav"
                    className="input-field"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="email"> Email*</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="example@gmail.com"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="input-container">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    autoComplete="off"
                    placeholder="Enter Phone Number"
                    className="input-field"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="interest"> I'm interested in*</label> <br />
                  <select
                    name="interest"
                    id="interest"
                    defaultValue="Select"
                    className="input-field sellect"
                  >
                    <option disabled value="Select">
                      Select
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Pune">App Design</option>
                    <option value="Banglore">UI/UX Design</option>
                    <option value="Kolkata">Consulting</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="input-container">
                  <label htmlFor="range"> Budget Range(USD)*</label> <br />
                  <select
                    name="range"
                    id="range"
                    defaultValue="Select"
                    className="input-field sellect"
                  >
                    <option disabled value="Select">
                      Select
                    </option>
                    <option value="Mumbai">$100 - $500</option>
                    <option value="Pune">$500 - $1000</option>
                    <option value="Banglore">$1000 - $1500</option>
                    <option value="Kolkata">$1500+</option>
                  </select>
                </div>

                <div className="input-container">
                  <label htmlFor="country"> Country*</label> <br />
                  <select
                    name="country"
                    id="country"
                    defaultValue="Select"
                    className="input-field sellect"
                  >
                    <option disabled value="Select">
                      Select
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="India">India</option>
                    <option value="United">United State</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
              <div className="mt-2 start">
                <label htmlFor="message">Your Message*</label> <br />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter here..."
                  required
                  className="input-field"
                  rows={8}
                ></textarea>
              </div>
              <div className="mt-2 start">
                <button href="#" className="btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>

            <div className=" info ">
              <div className="detail gap-4">
                <div>
                  <h6>Address</h6>
                  <p>
                    plot No.08 sector - 21 Kedar Hosing Socity Taloja Phase - 2
                    Navi Mumbai
                  </p>
                </div>
                <div>
                  <h6>Contact</h6>
                  <p>
                    phone: +91 7887535425 <br />
                    Email: amitjadhav1202@gmail.com
                  </p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>
                    Monday - Friday:10:00 - 08:00 <br />
                    Saturday - Sunday :10:00 - 06:00
                  </p>
                </div>
              </div>

              <div className="bg-header rounded-b">
                <h5>Stay Connected</h5>

                <div className="flex gap-1 mt-2 ">
                  <a href="#" className="icon-container black-inverse ">
                    <FaGithub />
                  </a>
                  <a href="#" className="icon-container black-inverse">
                    <FaXTwitter />
                  </a>
                  <a href="#" className="icon-container black-inverse">
                    <FaSquareInstagram />
                  </a>
                  {/* <a href="#" className="icon-container black-inverse">
                    <SiNetlify />
                  </a> */}
                  <a href="#" className="icon-container black-inverse">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
