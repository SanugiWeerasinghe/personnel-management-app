import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [settings, setSettings] = useState({
        theme: 'dark',
        notifications: true,
        autoRefresh: true,
        itemsPerPage: 10,
    });

    const handleChange = (key: string, value: any) => {
        setSettings({
            ...settings,
            [key]: value,
        });
    };

    const handleSave = () => {
        localStorage.setItem('appSettings', JSON.stringify(settings));
        alert('✅ Settings saved successfully!');
    };

    return (
        <div>
            <h1>⚙️ Application Settings</h1>
            <form style={{ maxWidth: '600px' }}>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={settings.notifications}
                            onChange={(e) => handleChange('notifications', e.target.checked)}
                        />
                        {' '}Enable Notifications
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={settings.autoRefresh}
                            onChange={(e) => handleChange('autoRefresh', e.target.checked)}
                        />
                        {' '}Auto-Refresh Data
                    </label>
                </div>
                <div>
                    <label>Items Per Page:</label>
                    <input
                        type="number"
                        min="5"
                        max="50"
                        value={settings.itemsPerPage}
                        onChange={(e) => handleChange('itemsPerPage', parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Theme:</label>
                    <select
                        value={settings.theme}
                        onChange={(e) => handleChange('theme', e.target.value)}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="auto">Auto</option>
                    </select>
                </div>
                <button type="button" onClick={handleSave}>
                    💾 Save Settings
                </button>
            </form>
            <div className="card" style={{ marginTop: '30px', maxWidth: '600px' }}>
                <h3>About This Application</h3>
                <p><strong>Personnel Management System</strong></p>
                <p>Version: 1.0.0</p>
                <p>A modern full-stack application for managing employees and departments.</p>
                <p><strong>Tech Stack:</strong></p>
                <ul>
                    <li>Frontend: React + TypeScript</li>
                    <li>Backend: Express.js + Node.js</li>
                    <li>Database: MySQL</li>
                </ul>
            </div>
        </div>
    );
};

export default Settings;