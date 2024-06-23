import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/courseService';
import axiosInstance from '../axios';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const coursesData = await fetchCourses();
                setCourses(coursesData);
                setLoading(false);
            } catch (error) {
                console.error('Error loading courses:', error);
                setLoading(false);
            }
        };

        getCourses();
    }, []);

    const getImageUrl = (course) => {
        return `${axiosInstance.defaults.baseURL}/storage/images/course/${course.id}/${course.image}`;
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
                {loading ? (
                    <p className="text-center">Loading courses...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center"
                            >
                                <img
                                    src={getImageUrl(course)}
                                    alt={course.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold">{course.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
