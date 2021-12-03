import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Search from "../Search/Search";
import Sorting from "../Sorting/Sorting";
import "../../index.css";
import ContactLists from "../ContactList/ContactLists";
import "./container.css";

const Container = () => {
  const [contactToShow, setContactToShow] = useState(null);
  const [firstLetter, setFirstLetter] = useState(null);
  const [lastLetter, setLastLetter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");

  const showContact = (contact) => {
    setContactToShow(contact);
  };

  useEffect(() => {
    const firstName = contactToShow?.name.split(" ")[0];
    const lastName = contactToShow?.name.split(" ")[1];
    const firstLetter = firstName?.split("")[0].toUpperCase();
    const lastLetter = lastName?.split("")[0].toUpperCase();
    setFirstLetter(firstLetter);
    setLastLetter(lastLetter);
  }, [contactToShow]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            className="row"
            style={{
              marginBottom: "50px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Contacts />
            <Sorting
              sortType={sortType}
              onChange={(value) => {
                setSortType(value);
              }}
            />
          </div>
          <div className="row" style={{ marginBottom: "50px" }}>
            <Search
              onChange={(value) => {
                setSearchTerm(value);
              }}
            />
          </div>
          <div className="row">
            <ContactLists
              onClick={showContact}
              sortType={sortType}
              searchTerm={searchTerm}
              setNull={() => {
                setContactToShow(null);
              }}
            />
          </div>
        </div>
        <div className="col">
          {contactToShow ? (
            <div className="contact-info">
              <div className="contact-head">
                <div className="contact-profileImage">
                  {firstLetter} {lastLetter}
                </div>
                <div className="contact-profileInfo">
                  <b>{contactToShow.name}</b>
                  <p>This is job role</p>
                </div>
              </div>
              <div className="contact-bio">
                <div className="contact-bio-row">
                  <div className="bio-row-key">Full Name:</div>
                  <div className="bio-row-value">{contactToShow.name}</div>
                </div>
                <div className="contact-bio-row">
                  <div className="bio-row-key">Email:</div>
                  <div className="bio-row-value">{contactToShow.email}</div>
                </div>
                <div className="contact-bio-row">
                  <div className="bio-row-key">Phone:</div>
                  <div className="bio-row-value">
                    {contactToShow.phone || "-"}
                  </div>
                </div>
                <div className="contact-bio-row">
                  <div className="bio-row-key">Company:</div>
                  <div className="bio-row-value">
                    {contactToShow.company || "-"}
                  </div>
                </div>
                <div className="contact-bio-row">
                  <div className="bio-row-key">Address:</div>
                  <div className="bio-row-value">
                    {contactToShow.address || "-"}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default connect()(Container);
