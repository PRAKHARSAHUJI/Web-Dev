import React, { useContext, useEffect } from 'react'
import ModalPopup from './Modal-Popup'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/context';

import BarChart from './Chartsjs';




function Dashboard() {

  const { showModalPopup, setShowModalPopup, formData, setFormdata, allTransactions,  totalExpense, setTotalExpense, totalIncome, setTotalIncome} = useContext(GlobalContext);

  useEffect(()=> {
    let income = 0;
    let expense = 0;
    
    allTransactions.forEach((item) => {
      item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount)
    });
    setTotalExpense(expense)
    setTotalIncome(income)
  }, [allTransactions])

  return (
    <>

      <h1 className='absolute text-3xl sm:text-4xl lg:text-6xl p-4 sm:p-6 m-2 mt-6 font-bold text-white top-0 left-0  rounded-3xl'>
        <NavLink to='/'>EXPENSE-TRACKER</NavLink>
      </h1>

      <button
        className='absolute text-xl sm:text-2xl lg:text-3xl p-4 sm:p-6 m-2 mt-6 font-extrabold  text-black bg-gold top-16 right-0 sm:top-0 sm:right-0 md:top-0 md:right-0 lg:top-0 lg:right-0 xl:top-0 xl:right-0 border hover:text-gold hover:bg-black rounded-3xl'
        onClick={() => setShowModalPopup(!showModalPopup)}
      >
        Add New Transaction
      </button>


      <div className="pt-40 text-center">
        <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold  text-white '>Account Balance</h1>
        <p className='text-3xl sm:text-5xl lg:text-6xl p-4 font-semibold text-gold'>
          Rs: {' '}
          {
            totalIncome - totalExpense
          }
        </p>
      </div>

      <ModalPopup />





      <div className='flex justify-between'>

        <div>
          <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold  text-white '>Total Income</h1>
          <p className='text-3xl sm:text-5xl lg:text-6xl p-4 font-semibold text-gold'>
            Rs: {' '}
            {
              totalIncome
            }
          </p>
        </div>

        <div>
          <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold  text-white '>Total Expense</h1>
          <p className='text-3xl sm:text-5xl lg:text-6xl p-4 font-semibold text-gold'>
            Rs: {' '}
            {
              totalExpense
            }
          </p>
        </div>
      </div>

      <BarChart />


      {allTransactions.length === 0 ? (
        <p className="text-white text-center mt-10 text-2xl">No transactions yet.</p>
      ) : (
        <div className="mt-10 px-6">
          <h2 className="text-white text-3xl font-bold mb-6">All Transactions</h2>

          <ul className="space-y-4">
            {allTransactions.map((transaction, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-4 rounded-xl text-xl border ${transaction.type === 'income'
                    ? 'bg-green-100 border-green-400 text-green-900'
                    : 'bg-red-100 border-red-400 text-red-900'
                  }`}
              >
                <div>
                  <p className="font-bold">{transaction.description}</p>
                  <p className="text-sm">{transaction.date}</p>
                </div>
                <div className="font-bold">
                  ₹ {transaction.amount}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}


    </>
  )
}

export default Dashboard