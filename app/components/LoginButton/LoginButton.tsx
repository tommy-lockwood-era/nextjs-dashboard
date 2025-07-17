"use client"
import { useState } from "react";

export default function LoginButton() {
    const [loggedIn, toggleLogin] = useState(false);

    return(
        <button onClick={() => toggleLogin((value) => !value)} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {loggedIn ? "Logout" : "Login"}
        </button>
    );
}