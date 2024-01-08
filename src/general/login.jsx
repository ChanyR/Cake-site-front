import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { API_URL, apiRequestMethod } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';
import { Avatar, Button, Container, CssBaseline, InputLabel, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import backgroundImage from '../assets/cake.jpg';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    
    const { user, setUser } = useContext(AppContext);

    const [shouldNavigate, setShouldNavigate] = useState(false);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (shouldNavigate) {
            console.log("Updated user:", user);
            setUser(user);
            Cookies.set('user', JSON.stringify(user), { expires: 1 });
            navigate('/home')
        }
    }, [user, shouldNavigate]);

    const onSubmitLogin = async (data) => {
        let url = API_URL + "/users/login";
        try {
            let resp = await apiRequestMethod(url, "POST", data)
            console.log(resp.data.user);
            await setUser(resp.data.user);
            console.log("token new", resp.data.token);
            Cookies.set('token', resp.data.token, { expires: 1 }); // expires in 1 day
            setShouldNavigate(true);
        }
        catch (err) {
            alert("password or email wrong")
            console.log("ERROR ", err);
        }
    }

    return (
        
        // <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="w-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative', minHeight: '89vh', display: 'flex', alignItems: 'center' }}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper elevation={3} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Avatar sx={{ m: 1, bgcolor: 'rgba(249, 246, 246, 0.2)' }}>
                    <LockOutlinedIcon style={{color: 'brown'}} />
                </Avatar>
                <Typography component="h2" variant="h5" mb={4} style={{color: 'brown'}}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmitLogin)} style={{ width: '100%' }}>
                    <TextField
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        margin="normal"
                        fullWidth
                        label="Email"
                        error={Boolean(errors.email)}
                        helperText={errors.email && "Email is required and must be a valid email address"}
                    />
                    {/* <TextField
                        {...register('password', { required: true, minLength: 6 })}
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        error={Boolean(errors.password)}
                        helperText={errors.password && (
                            errors.password.type === 'required' ? "Password is required" :
                                errors.password.type === 'minLength' ? "Password must be at least 6 characters long" :
                                    ""
                        )}
                    /> */}
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            {...register('password', { required: true, minLength: 6 })}
                            id="outlined-adornment-password"
                            margin="normal"
                            fullWidth
                            label="Password"
                            dir="ltr"
                            type={showPassword ? 'text' : 'password'}
                            error={Boolean(errors.password)}
                            helperText={errors.password && (
                                errors.password.type === 'required' ? "Password is required" :
                                    errors.password.type === 'minLength' ? "Password must be at least 6 characters long" :
                                        ""
                            )}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <p style={{direction:"ltr", color:"red"}}>{errors.password && (
                            errors.password.type === 'required' ? "Password is required" :
                                errors.password.type === 'minLength' ? "Password must be at least 6 characters long" :
                                    ""
                        )}</p>
                    </FormControl>

                    <div className="d-flex mt-3 justify-content-xl-between">
                        <p>
                            <a href="/forgetPassword" style={{ textDecoration: 'underline', color:'black'}}>Forgot password</a>
                        </p>
                        <p>
                         <a href="/signup" style={{ textDecoration: 'underline', color:'black' }}>sign up</a>
                        </p>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ marginTop: '1rem', background: 'white', color: 'black' }}
                    >
                        Login
                    </Button>
                </form>

            </Paper>
            </Container>
        </div>
        // <div className="d-flex align-items-center justify-content-center vh-100">
        //     <div className="card p-4">
        //         <h2 className="text-center mb-4">Login</h2>
        //         <form onSubmit={handleSubmit(onSubmitLogin)}>
        //             <div className="mb-4">
        //                 <label className="form-label">
        //                     Email:
        //                 </label>
        //                 <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-control" />
        //                 {errors.email && <div className="text-danger">Email is required and must be a valid email address</div>}
        //             </div>
        //             <div className="mb-4">
        //                 <label htmlFor="password" className="form-label">
        //                     Password:
        //                 </label>
        //                 <input {...register('password', { required: true, minLength: 6 })} type="password" className="form-control" />
        //                 {errors.password && errors.password.type === 'required' && <div className="text-danger">Password is required</div>}
        //                 {errors.password && errors.password.type === 'minLength' && <div className="text-danger">Password must be at least 6 characters long</div>}
        //             </div>
        //             <button type="submit" className="btn btn-primary w-100">
        //                 Login
        //             </button>
        //         </form>
        //     </div>
        // </div>
    )
}

export default Login