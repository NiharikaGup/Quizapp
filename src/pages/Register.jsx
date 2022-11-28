import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import './register.css';

function Register() {
    return (
        <div className="form public-form-wrap ">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <div className='public-form-content login-content'>
                        <div className='page-header'>
                            <h1>Register</h1>
                        </div>
                        <div className="user-name">
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Enter Username"
                            />
                        </div>
                        <div className="password">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                />
                        </div>
                        <div className="button">
                        <Button variant="contained">Submit</Button>
                        </div>
                    </div>
            </Box>
        </div>
    )
}

export default Register;

