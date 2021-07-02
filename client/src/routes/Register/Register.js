import React from 'react';

export default function Register() {
    return (
        <div>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm password" />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}