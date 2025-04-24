export const todoReducer = (initialState = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "[ADD]":
      console.log("ADD");
      return [...initialState, payload];
    case "[REMOVE]":
      console.log("REMOVE");
      const newState = initialState.filter((todo) => {
        return todo.id != payload;
      });
      return newState ?? [];
    case "[COMPLETE]":
      console.log("COMPLETE");
      return initialState.map((todo) => {
        if (todo.id == payload) {
          todo.done = true;
        }
        return todo;
      }); 
    default:
      return initialState;
  }
};
