import axiosInstance from './axios';
import { getCsrfCookie } from './csrf';

export const login = async (email, password) => {
    await getCsrfCookie();
    const response = await axiosInstance.post('/api/login', { email, password });
    return response.data;
};

export const register = async (formData) => {
    const response = await axiosInstance(`/api/register`, formData);
    return response.data;
};

export const logout = async () => {
    const response = await axiosInstance.post('/api/logout');
    return response.data;
};

export const fetchUser = async () => {
    await getCsrfCookie();
    const response = await axiosInstance.get('/api/user');
    return response.data;
};
