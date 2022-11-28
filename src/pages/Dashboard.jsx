import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
//import './dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        window.localStorage.removeItem('login')
        navigate('/login')
    }
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
                            <h1>Dashboard</h1>
                            <div onClick={handleLogout}>Logout</div>
                        </div>
                    </div>
            </Box>
        </div>
    )
}

export default Dashboard;

