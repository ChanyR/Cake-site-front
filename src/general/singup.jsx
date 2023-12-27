import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Container, CssBaseline, Avatar, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { API_URL, apiRequestMethod } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

// Import your background image
import backgroundImage from '../assets/pexels-andrea-piacquadio-3756050.jpg';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmitSignUp = async (data) => {
        let url = API_URL + "/users";
        try {
            let resp = await apiRequestMethod(url, "POST", data);
            console.log("Response Data:", resp.data);
            navigate("/login");
        } catch (err) {
            console.error("Error:", err);
            if (err.response) {
                console.error("Response Data:", err.response.data);
                console.error("Status Code:", err.response.status);
                console.error("Headers:", err.response.headers);
            } else if (err.request) {
                console.error("No response received:", err.request);
            } else {
                console.error("Error setting up the request:", err.message);
            }
        }
    };

    return (

        <div className="border border-danger border-2 w-100" style={{position:'relative',width:'100%',height:'100%',backgroundImage:{backgroundImage},backgroundSize:'cover'}}>
            {/* <img src={backgroundImage} alt="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }} /> */}
            <Container component="main" maxWidth="xs" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', position: 'relative', minHeight: '100vh' }}>
                <CssBaseline />
                <Paper elevation={3} style={{ zIndex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'rgba(255, 255, 255, 0.7)' }}>
                        <LockOutlinedIcon style={{ color: '#4CAF50' }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmitSignUp)} style={{ width: '100%', marginTop: '1rem' }}>
                        <TextField
                            {...register('name', { required: true, minLength: 2 })}
                            margin="normal"
                            fullWidth
                            label="Name"
                            error={Boolean(errors.name)}
                            helperText={errors.name && "Name is required and must be at least 2 characters long"}
                        />
                        <TextField
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            margin="normal"
                            fullWidth
                            label="Email"
                            error={Boolean(errors.email)}
                            helperText={errors.email && "Email is required and must be a valid email address"}
                        />
                        <TextField
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                            })}
                            margin="normal"
                            fullWidth
                            label="Password"
                            type="password"
                            error={Boolean(errors.password)}
                            helperText={errors.password && (
                                errors.password.type === 'required' ? "Password is required" :
                                    errors.password.type === 'minLength' ? "Password must be at least 6 characters long" :
                                        "Password must contain at least one uppercase letter, one number, and one special character"
                            )}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ marginTop: '1rem', background: '#4CAF50', color: 'white' }}
                        >
                            Sign Up
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default SignUp;
