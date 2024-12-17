import '../styles/RegistrationPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Name:', name, 'Email:', email, 'Password:', password);
        navigate('/login'); // Redirect to login after successful registration
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleRegistration}>
                <h2>Register</h2>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Register</button>
                <div className="switch-link">
                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;
