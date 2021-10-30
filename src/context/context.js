import React, { useReducer, createContext } from "react";
import { reducerContext } from "./reducerContext";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: "100",
    category: "Pets",
    type: "Expense",
    date: "2021-11-03",
    id: "618e0e69-c220-4d95-87c5-c385066d181f",
  },
  {
    amount: "100",
    category: "Investments",
    type: "Income",
    date: "2021-11-01",
    id: "59ad8792-d22f-4eb2-b61b-49895f7b4767",
  },
];

const ExpenseTrackerContext = createContext(initialState);

const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(reducerContext, initialState);

  const deleteTransaction = id =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = transaction =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export { ExpenseTrackerContext, Provider };
