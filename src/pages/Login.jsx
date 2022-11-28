import Button from '@mui/material/Button';
import './login.css';

function Login() {
    return (
        <div className="form public-form-wrap ">
            <div className='public-form-content login-content'>
                <h1>Login</h1>
                <div className="user-name">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="password">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className="button">
                <Button variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;