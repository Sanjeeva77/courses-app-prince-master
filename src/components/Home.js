import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

export const Home = () => {
    return (
        <Card className='bg-secondary-subtle p-3 my-2'>
            <CardTitle><h1>Learn Developing App Using React</h1></CardTitle>
            <CardBody>This is developed by Advanced Auto Parts for learning purpose backend is on spring boot and frontend on reactjs
            </CardBody>
            <CardText><Button color='primary' outline>Start Using</Button></CardText>
        </Card>
    )
}