import React from "react";
import "./contact.css";
//import addressbook from "../assets/svg/addressbook.svg";

const Contacts = () => {
  return (
    <div className="row">
      <div className="column address-book">
        <img src="addressbook.svg" style={{ height: "38px" }} />
      </div>
      <div className="column" style={{ width: "200px" }}>
        <div className="heading">Contacts</div>
        <div className="description">Welcome to CRM Contact Page</div>
      </div>
    </div>
  );
};

export default Contacts;
