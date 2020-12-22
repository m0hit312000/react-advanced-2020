export const reducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople, 
        isModalOpen: true, 
        modalContent: "Item Added"
      }
    } 
    if(action.type === 'NO_VALUE') {
      return {
        ...state,
        isModalOpen: true,
      }
    } 
    if(action.type === 'CLOSE_MODAL') {
      return {
        ...state,
        isModalOpen: false, 
        modalContent: "Item Added"
      }
    } 
    if(action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter((person) => person.id !== action.payload);
      return {
        ...state,
        people: newPeople, 
        isModalOpen: true, 
        modalContent: "Item Removed"
      }
    } 
    throw new Error('No Matching Action Type');
}
  