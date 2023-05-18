import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }
    return (
        <div className='card lg:w-1/3 mx-auto shadow-2xl my-14'>
            <div className='card-body'>
                <h2 className='text-2xl font-bold border-b w-1/2 border-orange'>Please Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered" name="password" />
                    </div>
                    <input className='bg-orange w-full rounded-lg p-3 text-white font-semibold mt-3' type="submit" value="Sign In" />
                </form>
                <p className='mt-4'>Don't have an account? <Link className='text-orange ' to="/signup">Please Sign Up</Link></p>

                <div className='divider'>OR</div>
                <div className='text-center w-full'>
                    <p className='font-bold'>Sign In with:</p>
                    <div className='w-full mt-4'>
                        <FaGoogle className='text-2xl hover:text-orange cursor-pointer mx-auto' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;