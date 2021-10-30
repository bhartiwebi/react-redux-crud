const initialState = [
  {
    id: 1,
    name: "bharti",
    email: "bharti@webiwork.com",
    number: 7225038683,
  },
  {
    id: 2,
    name: "Gayu",
    email: "gayu@webiwork.com",
    number: 55555,
  },

  {
    id: 3,
    name: "Sandhya",
    email: "sandhya@webiwork.com",
    number: 77777,
  },

];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addCONTACT":
      state = [...state, action.payload];
      return state;

      case "UPDATE_CONTACT":
        const updateState = state.map(contact => contact.id === action.payload.id? action.payload: contact);
        state =updateState;
        return state;

        case "DELETE_CONTACT":
          const filterContexts = state.filter(contact => contact.id !== action.payload && contact);
          state = filterContexts;
          return state; 
    default:
      return state;
  }
};
export default contactReducer;
