/* write me a nextjs component that I can use for a general site header with a logo on the left and a navigation bar and login button on the right. Use Tailwind CSS for any styling */

import Link from "next/link";
import LoginButton from "../LoginButton/LoginButton";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <span className="text-xl font-bold text-gray-800">MyNewLogo</span>
                    </Link>
                </div>

                <div className="flex flex-row flex-nowrap items-center gap-3">
                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                            Dashboard
                        </Link>
                        <Link href="/dashboard/invoices" className="text-gray-700 hover:text-blue-600 transition">
                            Invoices
                        </Link>
                        <Link href="/dashboard/customers" className="text-gray-700 hover:text-blue-600 transition">
                            Customers
                        </Link>
                    </nav>

                    {/* Login Button */}
                    <div className="flex items-center">
                        {/* <Link href="/login"> */}
                            <LoginButton />
                            {/*<button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Login
                            </button>*/}
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
