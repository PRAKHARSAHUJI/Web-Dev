import { createContext, useEffect } from "react";
import { useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [showModalPopup, setShowModalPopup] = useState(false)
    const [formData, setFormdata] = useState({
        type:'income',
        description: '',
        date:new Date().toISOString().split("T")[0],
        amount : '',
    })
    const [allTransactions, setAllTransactions] = useState( () => {
        const stored = localStorage.getItem("expense-tracker-transactions");
        return stored ? JSON.parse(stored) : []
    }
    )
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)

    useEffect(()=> {
        localStorage.setItem("expense-tracker-transactions",JSON.stringify(allTransactions))
    }, [allTransactions])
    return(
        <GlobalContext.Provider value={{showModalPopup, setShowModalPopup, formData, setFormdata, allTransactions, setAllTransactions, totalExpense, setTotalExpense, totalIncome, setTotalIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}