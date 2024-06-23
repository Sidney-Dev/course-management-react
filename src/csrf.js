import axiosInstance from './axios';

export const getCsrfCookie = async () => {
    await axiosInstance.get('/sanctum/csrf-cookie');
};
