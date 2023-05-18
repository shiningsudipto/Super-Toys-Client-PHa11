import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }
    return (
        <div>
            <div className='card lg:w-1/3 mx-auto shadow-2xl my-14'>
                <div className='card-body'>
                    <h2 className='text-2xl font-bold border-b lg:w-1/2 border-orange'>Please Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" name="name" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Your Photo Url" className="input input-bordered" name="photoUrl" />
                        </div>
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
                        <input className='bg-orange w-full rounded-lg p-3 text-white font-semibold mt-3' type="submit" value="Sign Up" />
                    </form>
                    <p className='mt-4'>Have an account? <Link className='text-orange ' to="/signin">Please Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;