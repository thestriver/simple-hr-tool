import React, { useState } from "react";
import img from "../images/pablo-coming-soon-dark-mono.png"
import logo from "../images/logo.png"
import axios from "axios"
import Popup from "./PopUp"

export default function Form()  {
    const [ form, setForm ] = useState({
        fname: '',
        lname: '',
        jtitle: '',
        department: '',
        feedback: '',
        email: '',
        pop: null
    })

   const updateForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
   const submitForm = e => {
        e.preventDefault();
        console.log(form)

        axios.post('https://sheet.best/api/sheets/a2cb5e9d-58e6-4a02-be49-efdea324e916', form)
             .then( response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });
        setForm({ pop: true, fname : '', lname: '', jtitle: '', department: '', feedback: '', email: ''  })
    }

    return (
        <section className="mt-28">
        <div className="flex flex-wrap">
        {  form.pop ? ( <Popup /> ) : null  }
            <div className="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
                <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center" style={{zIndex: 10}}>
                    <img className="lg:max-w-xl mx-auto" src={img} alt="" />
                    <h2 className="mb-2 text-2xl text-white font-bold">A Simple HR Tool</h2>
                    <div className="max-w-lg mx-auto">
                        <p className="mb-6 text-gray-50 leading-loose">Collect details from your employees.</p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden bg-green-600 w-full">
                <div className="relative w-full">
                    <img className="relative mx-auto max-w-sm mt-4 mb-4 block" src={img} alt="" />
                </div>
                <div className="py-10 px-3 text-center" style={{zIndex: 10}}>
                    <h2 className="mb-2 text-2xl text-white font-bold">A Simple HR Tool</h2>
                    <p className="mb-6 text-gray-50 leading-loose">Collect details from your employees.</p>
                    <a className="py-2 px-6 rounded-t-xl rounded-l-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold" href="./">Get Started</a>
                </div>
            </div>
            <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
                <div className="mb-6 lg:mb-10 w-full px-3 flex items-center justify-between">
                    <a className="text-3xl font-bold leading-none" href="./">
                        <img className="h-12" src={logo} alt="" width="auto"/>
                    </a>
                </div>
                <div>
                <div className="mb-6 px-3">
                    <h3 className="text-xl font-semibold">Please fill in the necessary details</h3>
                </div>
                <form  onSubmit={submitForm} >
                    <div className="flex flex-wrap">
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="First Name"
                            name = "fname" value = {form.fname} onChange={updateForm} 
                            />
                        </div>
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Last Name" 
                            name = "lname" value = {form.lname} onChange={updateForm}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Job Title"
                            name = "jtitle" value = {form.jtitle} onChange={updateForm} 
                            />
                        </div>
                        <div className="mb-3 w-full lg:w-1/2 px-2">
                            <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" type="text" placeholder="Department" 
                            name = "department" value = {form.department} onChange={updateForm}
                            />
                        </div>
                    </div>
                    <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <input className="w-full text-xs bg-gray-50 outline-none" type="email" placeholder="name@email.com"
                    name = "email" value = {form.email} onChange={updateForm}
                    />
                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                    </div>
                    <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                        <textarea className="w-full text-xs bg-gray-50 outline-none resize border rounded-md" placeholder="Feedback"
                        name = "feedback" value = {form.feedback} onChange={updateForm}
                        ></textarea>
                    </div>
                    <div className="px-3 text-center">
                    <button className="mb-2 w-full py-4 bg-green-600 hover:bg-green-700 rounded text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}