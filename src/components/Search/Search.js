import React, { useState } from "react";
//import PropTypes from "prop-types";
import "./search.css";
//import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TextField } from "@mui/material";
//import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../../redux/actions/contact";

Search.propTypes = {};

function Search({ onChange }) {
  const [open, setOpen] = useState(false);
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const [addContact, setAddContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
  });

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const addNewContact = () => {
    if (addContact.email === "") {
      return alert("Please Fill Email");
    } else if (addContact.name === "") {
      return alert("Please Fill Name");
    } else if (addContact.company === "") {
      return alert("Please Fill Company");
    }
    contacts.contact.contacts.map((item) => {
      if (item.email === addContact.email) {
        return alert("This User Email Already Exists!");
      }
    });
    dispatch(createContact(addContact));
    setAddContact({
      name: "",
      email: "",
      company: "",
      phone: "",
      address: "",
    });
    setOpen(false);
  };

  return (
    <div>
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Search Contact"
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </div>
        <button onClick={handleOpen} class="btn btn-primary mb-2 add-contact">
          Add New Contact
        </button>

        <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Add Contact</DialogTitle>
          <Paper
            style={{
              backgroundColor: "#f9f9f9",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <TextField
                style={{ margin: "10px" }}
                required
                label="Name"
                name="name"
                onChange={(e) => {
                  setAddContact({ ...addContact, name: e.target.value });
                }}
              />
              <TextField
                style={{ margin: "10px" }}
                required
                label="Email"
                name="email"
                onChange={(e) => {
                  setAddContact({ ...addContact, email: e.target.value });
                }}
              />
              <TextField
                style={{ margin: "10px" }}
                label="Phone Number"
                name="phone"
                onChange={(e) => {
                  setAddContact({ ...addContact, phone: e.target.value });
                }}
              />
              <TextField
                style={{ margin: "10px" }}
                label="Company"
                name="company"
                required
                onChange={(e) => {
                  setAddContact({ ...addContact, company: e.target.value });
                }}
              />
              <TextField
                style={{ margin: "10px" }}
                label="Address"
                name="address"
                onChange={(e) => {
                  setAddContact({ ...addContact, address: e.target.value });
                }}
              />
            </div>

            <button
              style={{
                backgroundColor: "black",
                color: "white",
                margin: "10px",
              }}
              onClick={addNewContact}
              class="btn btn-primary mb-2 add-contact"
            >
              Add Contact
            </button>
          </Paper>
        </Dialog>
      </form>
    </div>
  );
}

export default Search;
