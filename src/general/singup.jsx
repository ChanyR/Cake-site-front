import React, { useContext } from 'react'
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { API_URL, apiRequestMethod } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    // const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    const onSubmitSignUp = async (data) => {
        let url = API_URL + "/users";
        try {
            let resp = await apiRequestMethod(url, "POST", data)
            console.log(resp.data.user)
            // setUser(resp.data.user)
            // console.log("token new", resp.data.token);
            // Cookies.set('token', resp.data.token, { expires: 1 }); // expires in 1 day
            navigate("/login")
        }
        catch (err) {
            console.log("ERROR ", err);
        }
    }

    return (<div className="">
        <div>SignUp</div>
        <form onSubmit={handleSubmit(onSubmitSignUp)} className="mt-3">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Name:
                </label>
                <input {...register('name', { required: true, minLength: 2 })} type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                {errors.name && <div className="text-red-500 text-xs">name is required and must be at least 2 characters long</div>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                {errors.email && <div className="text-red-500 text-xs">Email is required and must be a valid email address</div>}
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password:
                </label>
                <input {...register('password', { required: true, minLength: 6 })} type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                {errors.password && errors.password.type === 'required' && <div className="text-red-500 text-xs">Password is required</div>}
                {errors.password && errors.password.type === 'minLength' && <div className="text-red-500 text-xs">Password must be at least 6 characters long</div>}
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4">
                SignUp
            </button>

        </form>
    </div>
    )
}

export default SignUp