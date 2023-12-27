import React, { useContext } from 'react'
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { API_URL, apiRequestMethod } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();

    const onSubmitLogin = async (data) => {
        console.log(data);
        let url = API_URL + "/users/login";
        try {
            let resp = await apiRequestMethod(url, "POST", data)
            if (resp.status === 401 && resp.data.msg == "Email or password is worng, code:1")
                alert("password or email wrong")//fix
            else {
                console.log(resp.data.user)
                setUser(resp.data.user)
                console.log("token new", resp.data.token);
                Cookies.set('token', resp.data.token, { expires: 1 }); // expires in 1 day
                navigate("/")

            }
        }
        catch (err) {
            console.log("ERROR ", err);
        }
    }

    return (<div className="">
        <div>Login</div>
        <form onSubmit={handleSubmit(onSubmitLogin)} className="mt-3">
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
                Login
            </button>

        </form>
    </div>
    )
}

export default Login