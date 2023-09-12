import React, { useState } from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CourseCard = ({ course, onDelete, onUpdate }) => {
    const { id: courseId, title: initialTitle, description: initialDescription } = course;

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);

    const deleteHandler = async () => {
        const apiUrl = `http://localhost:9090/courses/${courseId}`;

        try {
            await axios.delete(apiUrl);
            onDelete(courseId);
            console.log('Object deleted successfully');
            toast.success("Course deleted Successfully..");
        } catch (error) {
            console.error('Error deleting object:', error.message);
            toast.error("Error while deleting course..");
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const updatedCourseData = {
            id: courseId,
            title: title,
            description: description,
        };

        const apiUrl = `http://localhost:9090/courses`;

        try {
            await axios.put(apiUrl, updatedCourseData);
            onUpdate(updatedCourseData);
            console.log('Object updated successfully');
            toast.success("Course Updated Successfully..");
            toggleForm(); // Hide the form after successful update
        } catch (error) {
            console.error('Error updating object:', error.message);
            toast.error("Error while updating course..")
        }
    };

    return (
        <Card className="my-2" color="info" inverse>
            <CardHeader>
                <h2>Course Id: {courseId}</h2>
            </CardHeader>
            <CardBody>
                {showForm ? (
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="secondary" onClick={toggleForm}>
                            Cancel
                        </Button>
                    </Form>
                ) : (
                    <>
                        <CardTitle tag="h5">
                            <h2>{title}</h2>
                        </CardTitle>
                        <CardText>{description}</CardText>
                        <Button color="warning" onClick={toggleForm}>
                            Update
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="danger" onClick={deleteHandler}>
                            Delete
                        </Button>
                    </>
                )}
            </CardBody>
        </Card>
    );
};