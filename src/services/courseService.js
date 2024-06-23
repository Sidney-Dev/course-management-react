import axiosInstance from '../axios';

export const fetchCourses = async () => {
    try {
        const response = await axiosInstance.get('api/courses');
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};
