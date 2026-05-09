import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import "../App.css"



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>
    
            <div className='authPage'>
    
                {/* Background Blur */}
                <div className='authBlurOne'></div>
                <div className='authBlurTwo'></div>
    
                {/* Left Branding */}
                <div className='authLeftSection'>
    
                    <div className='authOverlay'></div>
    
                    <div className='authHeroContent'>
    
                        <div className='authLogoRow'>
    
                            <div className='authLogoBox'>
                                C
                            </div>
    
                            <h1>Connectify</h1>
    
                        </div>
    
                        <h2>
                            Premium Video Meetings
                            for Modern Teams
                        </h2>
    
                        <p>
                            Experience secure, crystal-clear video calls
                            with a beautifully crafted communication platform.
                        </p>
    
                        <div className='authFeatureGrid'>
    
                            <div className='authFeatureCard'>
                                <h3>HD Video</h3>
                                <span>Crystal clear meetings</span>
                            </div>
    
                            <div className='authFeatureCard'>
                                <h3>Secure</h3>
                                <span>End-to-end protection</span>
                            </div>
    
                            <div className='authFeatureCard'>
                                <h3>Fast</h3>
                                <span>Low latency calls</span>
                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
                {/* Right Form */}
                <div className='authRightSection'>
    
                    <div className='authCard'>
    
                        <div className='authTopSection'>
    
                            <Avatar className='authAvatar'>
                                <LockOutlinedIcon />
                            </Avatar>
    
                            <h2>
                                {formState === 0 ?
                                    "Welcome Back"
                                    :
                                    "Create Account"
                                }
                            </h2>
    
                            <p>
                                {formState === 0 ?
                                    "Login to continue your meetings"
                                    :
                                    "Register to start collaborating"
                                }
                            </p>
    
                        </div>
    
                        {/* Tabs */}
                        <div className='authTabContainer'>
    
                            <button
                                className={
                                    formState === 0 ?
                                        "authTabButton activeAuthTab"
                                        :
                                        "authTabButton"
                                }
                                onClick={() => {
                                    setFormState(0)
                                }}
                            >
                                Sign In
                            </button>
    
                            <button
                                className={
                                    formState === 1 ?
                                        "authTabButton activeAuthTab"
                                        :
                                        "authTabButton"
                                }
                                onClick={() => {
                                    setFormState(1)
                                }}
                            >
                                Sign Up
                            </button>
    
                        </div>
    
                        {/* Form */}
                        <Box
                            component="form"
                            noValidate
                            className='authForm'
                        >
    
                            {formState === 1 ?
    
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    InputLabelProps={{
                                        style: {
                                            color: "#94A3B8"
                                        }
                                    }}
                                    InputProps={{
                                        style: {
                                            color: "white",
                                            borderRadius: "18px",
                                            background: "rgba(255,255,255,0.04)"
                                        }
                                    }}
                                />
    
                                :
    
                                <></>
    
                            }
    
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}
                                InputLabelProps={{
                                    style: {
                                        color: "#94A3B8"
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        color: "white",
                                        borderRadius: "18px",
                                        background: "rgba(255,255,255,0.04)"
                                    }
                                }}
                            />
    
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                InputLabelProps={{
                                    style: {
                                        color: "#94A3B8"
                                    }
                                }}
                                InputProps={{
                                    style: {
                                        color: "white",
                                        borderRadius: "18px",
                                        background: "rgba(255,255,255,0.04)"
                                    }
                                }}
                            />
    
                            {
                                error ?
    
                                    <p className='authErrorText'>
                                        {error}
                                    </p>
    
                                    :
    
                                    <></>
                            }
    
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                className='authSubmitButton'
                                onClick={handleAuth}
                            >
                                {formState === 0 ?
                                    "Login"
                                    :
                                    "Create Account"
                                }
                            </Button>
    
                        </Box>
    
                    </div>
    
                </div>
    
            </div>
    
            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
            />
    
        </ThemeProvider>
    )
}