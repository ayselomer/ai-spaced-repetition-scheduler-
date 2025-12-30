import React, { useState } from 'react'
import { HiCalendarDateRange } from "react-icons/hi2";

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="h-screen w-screen bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-6">
                <HiCalendarDateRange className="text-5xl text-indigo-600" />
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Forgot your password?</h1>
                    <p className="text-sm text-gray-500">
                        Enter your email to reset your password

                    </p>
                </div>
                <form className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        value={email}
                        placeholder="Enter your email."
                        onChange={(e) => {
                            setEmail(e.target.value)
                            console.log(email)
                        }}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    
                    <button type="button" className="mt-4 w-full bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white py-2 rounded-lg hover:bg-indigo-700">Submit</button>
                </form>
                <div>
                    <a href="/" className="text-sm text-indigo-600 hover:underline">Back to Login</a>
                </div>
                
            </div>
        </div>
    )
}

export default ForgotPasswordScreen
