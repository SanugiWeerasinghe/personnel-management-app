import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>🎯 Personnel Management System</h1>
            <div className="grid">
                <div className="card">
                    <h3>👥 Manage Employees</h3>
                    <p>Add, edit, and remove employee records. Track employee information and departmental assignments.</p>
                    <Link to="/employees"><button>Go to Employees</button></Link>
                </div>
                <div className="card">
                    <h3>📊 Dashboard</h3>
                    <p>View comprehensive overview of your personnel management system with key statistics.</p>
                    <Link to="/dashboard"><button>View Dashboard</button></Link>
                </div>
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontSize: '1.1em' }}>
                    💼 Efficiently manage your organization's personnel with ease
                </p>
            </div>
        </div>
    );
};

export default Home;