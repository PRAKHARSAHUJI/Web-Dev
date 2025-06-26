

import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/context';

function ModalPopup() {

    const { showModalPopup, setShowModalPopup, formData, setFormdata, allTransactions, setAllTransactions} = useContext(GlobalContext)

    if (!showModalPopup) return null;

    function handleFormChange(e){
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSave(){
        if (!formData.description || !formData.amount || !formData.date || !formData.type) {
        alert("Please fill out all fields.");
        return;
        }
        setAllTransactions((prev)=>[...prev,formData])
        console.log("Saved Transaction:", formData);
        setShowModalPopup(false)
        resetFormData()
    }

    function resetFormData(){
        setFormdata({
            type:'income',
            description : '',
            date : new Date().toISOString().split("T")[0],
            amount:'',
        })
    }
    function handleCloseModal(){
        setShowModalPopup(false)
        resetFormData()
    }


    return (
        <>
            {
                showModalPopup &&
                <div className='inset-0 fixed bg-black bg-opacity-50 flex justify-center items-center'
                    onClick={handleCloseModal}
                >

                    <div className='bg-gold text-black  w-11/12 max-w-md sm:w-3/4 md:w-1/2 lg:w-1/3 h-auto max-h-[90vh] flex flex-col relative rounded-3xl p-6'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className='absolute bg-white top-2 right-4 font-dmsans w-7 rounded-full hover:text-white hover:bg-black' onClick={handleCloseModal}>
                            X
                        </button>

                        <h1 className='font-dmsans text-2xl text-center mb-4'>
                            Add New Transaction
                        </h1>

                        <div className='flex flex-col gap-4'>

                            {/* For the label to focus the input when clicked, label's htmlFor must match the input's id. */}

                            <label htmlFor="description" className="font-dmsans text-xl" >Enter Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder='Grocery/EMI'
                                className='text-2xl border-black border rounded px-4 py-2'
                                value={formData.description}
                                onChange={handleFormChange}
                            />

                            <label htmlFor="amount" className="font-dmsans text-xl">Enter Amount</label>
                            <input 
                                type="number" 
                                name="amount" 
                                id="amount" 
                                placeholder='1000' 
                                className=' text-2xl border-black border rounded px-4 py-2'
                                value={formData.amount}
                                onChange={handleFormChange}
                            />


                            <label htmlFor="date" className="font-dmsans text-xl">Enter Date</label>
                            <input 
                                type="date" 
                                name="date" 
                                id="date" 
                                value={formData.date}
                                className='font-dmsans text-xl border-black border rounded px-4 py-2' 
                                onChange={handleFormChange}
                            />

                            <div className='flex items-center gap-2 flex-wrap'>
                                <input type="radio" id="income" name='type' value='income' checked={formData.type==='income'} onChange={handleFormChange}/>
                                <label htmlFor="income" className="font-dmsans text-xl">Income</label>
                                <input type="radio" name='type' id="expense" value='expense' checked={formData.type==='expense'} onChange={handleFormChange}/>
                                <label htmlFor="expense" className="font-dmsans text-xl" >Expense</label>
                            </div>


                            <div className='flex justify-end gap-10'>
                                <button
                                    className="font-dmsans border border-black  w-20 p-2 hover:text-white hover:bg-black rounded-xl"
                                    onClick={handleSave}>
                                    SAVE
                                </button>
                                <button
                                    className="font-dmsans border border-black w-20 p-2 hover:text-white hover:bg-black rounded-xl"
                                    onClick={handleCloseModal}>
                                    CLOSE
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default ModalPopup