import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { removeContact } from "../../redux/actions/contact";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";

ContactLists.propTypes = {};

function ContactLists({ onClick, searchTerm, setNull, sortType }) {
  const contacts = useSelector((state) => state);
  const [contactsToShow, setContactToShow] = useState([]);
  const dispatch = useDispatch();

  const handleRemove = (contact) => {
    dispatch(removeContact(contact));
    setNull();
  };

  useEffect(() => {
    const dataToSHow = contacts.contact.contacts.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
    setContactToShow(dataToSHow);
  }, [searchTerm, contacts]);

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  contactsToShow.sort(dynamicSort(sortType));

  return (
    <table class="table table-hover">
      <thead style={{ background: "#8080802e" }}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Basic Info</th>
          <th scope="col">Company</th>
        </tr>
      </thead>
      <tbody>
        {contactsToShow.map((item, i) => {
          return (
            <tr key={i}>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  style={{ margin: "0" }}
                />
              </th>
              <td
                onClick={() => {
                  onClick(item);
                }}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </td>
              <td>{item.company || "-"}</td>
              <td>
                <RiDeleteBin5Line
                  color="red"
                  onClick={() => handleRemove(item)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ContactLists;
