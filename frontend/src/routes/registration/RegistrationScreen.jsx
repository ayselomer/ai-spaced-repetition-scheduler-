import React, { useState } from 'react'
import { HiCalendarDateRange } from "react-icons/hi2";

const RegistrationScreen = () => {
    const [name, setName,] = useState('')
    return (
        <div className="h-screen w-screen bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-6">
                <HiCalendarDateRange className="text-5xl text-indigo-600" />
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Create Account</h1>
                    <p className="text-sm text-gray-500">Start scheduling smarter with AI</p>
                </div>
                <form className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        value={name}
                        placeholder="Enter your full name."
                        onChange={(e) => {
                            setName(e.target.value)
                            console.log(name)
                        }}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <button type="button" className="mt-4 w-full bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white py-2 rounded-lg hover:bg-indigo-700">Create account</button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationScreen
