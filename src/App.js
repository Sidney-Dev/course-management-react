import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './pages/login';
import Register from './pages/register';
import Courses from './pages/courses';
import Home from './pages/home';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <AuthProvider>
            <Navigation />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/courses" element={<Courses />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
