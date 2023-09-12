import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CourseCard } from './CourseCard';
import { ToastContainer, toast } from 'react-toastify';

export const ViewCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = () => {
        axios.get('http://localhost:9090/courses')
            .then(response => setAllCourses(response.data))
            .catch(error => console.log("Error Loading Data::", error));
    };

    const handleDeleteCourse = (deletedCourseId) => {
        setAllCourses(allCourses.filter(course => course.id !== deletedCourseId));
    };

    const handleUpdateCourse = (updatedCourse) => {
        const updatedCourses = allCourses.map(course =>
            course.id === updatedCourse.id ? { ...updatedCourse } : course
        );
        setAllCourses(updatedCourses);
    };

    return (
        <div>
            {allCourses.length > 0 ? allCourses.map(course => (
                <CourseCard
                    key={course.id}
                    course={course}
                    onDelete={handleDeleteCourse} // Pass the onDelete callback to the CourseCard
                    onUpdate={handleUpdateCourse} // Pass the onUpdate callback to the CourseCard
                />
            )) : <h1>No courses</h1>}
            <ToastContainer/>
        </div>
    );
};
