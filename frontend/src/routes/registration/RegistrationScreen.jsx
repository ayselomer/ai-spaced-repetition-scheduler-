import React, { useState } from 'react'
import { HiCalendarDateRange } from "react-icons/hi2";

const RegistrationScreen = () => {
    const [name, setName,] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreeTerms, setAgreeTerms] = useState(false)
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
                        type='text'
                        minLength={2}
                        maxLength={30}
                        required
                        value={name}
                        placeholder="Enter your full name."
                        onChange={(e) => {
                            setName(e.target.value)
                            console.log(name)
                        }}
                        className="mb-4 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type='email'
                        maxLength={300}
                        required
                        value={email}
                        placeholder="Enter your email."
                        onChange={(e) => {
                            setEmail(e.target.value)
                            console.log(email)
                        }}
                        className="mb-4 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        minLength={6}
                        maxLength={20}
                        required
                        value={password}
                        placeholder="Enter your password."
                        onChange={(e) => {
                            setPassword(e.target.value)
                            console.log(password)
                        }}
                        type="password"
                        className="mb-4 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                        minLength={6}
                        maxLength={20}
                        required
                        value={confirmPassword}
                        placeholder="Confirm your password."
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                            console.log(confirmPassword)
                        }}
                        type="password"
                        className="mb-4 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={agreeTerms} onClick={(e) => {
                            setAgreeTerms(e.target.checked)
                        }} />
                        <span className='text-sm text-gray-600'>I agree to the Terms & Conditions. </span>
                    </div>
                    <button type="button" className="mt-4 w-full bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white py-2 rounded-lg hover:bg-indigo-700">Create account</button>

                </form>
                <div className='text-sm text-gray-600'>
                    Already have an account? <a href="/" className="text-indigo-600 hover:underline">Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default RegistrationScreen
