export const reducer = (state, action) => {
  if(action.type === "ADD_ITEM"){
    const newPerson = action.payload;
    const newPeople = [...state.people, newPerson];
    return{
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: `${newPerson.name} added`,
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if(action.type === "REMOVE_ITEM"){
    const newPeople = state.people.filter((person) => person.id !== action.payload); 
    const singlePersonArray = state.people.filter((person)=>person.id === action.payload)  
    const singlePerson = singlePersonArray[0];
    return{
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: `${singlePerson.name} removed`,
    }
  }
  throw new Error('no matching action type');
};
