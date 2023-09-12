import { Container, Col, Row } from "reactstrap"
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem } from "reactstrap"
export const Menu = () => {
    return (
        <Container className="my-2">
            <ListGroup>
                <ListGroupItem><Link to='/' className='text-decoration-none text-dark'>Home</Link></ListGroupItem>
                <ListGroupItem><Link to='addcourse' className='text-decoration-none text-dark'>Add Course</Link></ListGroupItem>
                <ListGroupItem><Link to='allcourses' className='text-decoration-none text-dark'>View Courses</Link></ListGroupItem>
                <ListGroupItem><Link className='text-decoration-none text-dark'>About</Link></ListGroupItem>
                <ListGroupItem><Link className='text-decoration-none text-dark'>Contact</Link></ListGroupItem>
            </ListGroup>
        </Container>
    )
}
