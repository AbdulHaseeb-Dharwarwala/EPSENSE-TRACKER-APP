import React, { createContext, useReducer } from 'react'
import Appreducer from './AppReducer'

const initialState = {
    transactions: []
}


export const GlobalContext = createContext(initialState);

//provider compnent
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
     });
  }

  function addTransaction(transactions) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transactions
     });
  }
    
  return (<GlobalContext.Provider value={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
  </GlobalContext.Provider>);
}