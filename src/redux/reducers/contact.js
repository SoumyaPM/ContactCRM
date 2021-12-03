let initialState = {
  contacts: [
    {
      name: "Mike Hustom",
      email: "mike@live.com",
      company: "UK",
      phone: "5672728",
      address: "45 West, New Jersey",
    },
  ],
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      const updatedState = {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
      };
      return updatedState;

    case "REMOVE_CONTACT":
      // const existingContacts = state.contacts;
      // console.log("existing contact", existingContacts);

      // existingContacts.splice(
      //   existingContacts.findIndex((item) => item.name === action.payload.name),
      //   1
      // );

      const index = state.contacts
        .map((item) => item)
        .indexOf(action.payload.contact);

      const updatedStates = {
        ...state,
        contacts: [
          // ...state.contacts.splice(
          //   state.contacts.findIndex((item) => item === action.payload.contact),
          //   1
          // ),
          ...state.contacts.slice(0, index),
          ...state.contacts.slice(index + 1),
        ],
      };
      return updatedStates;

    default:
      return initialState;
  }
};

export default contacts;
