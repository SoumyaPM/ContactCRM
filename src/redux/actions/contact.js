export const createContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: {
      contact: contact,
    },
  };
};

export const removeContact = (contact) => {
  return {
    type: "REMOVE_CONTACT",
    payload: {
      contact: contact,
    },
  };
};
