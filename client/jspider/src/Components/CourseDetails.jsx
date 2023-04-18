import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap'

function CourseDetails() {

    const [ course,setCourse] = useState([])
    useEffect(() =>{
        getData()
    },[])

     const getData = () =>{
        let url = 'http://127.0.0.8:5000/course'
        fetch(url)
        .then(res => res.json())
        .then((data)=>{
            setCourse(data);
        })
        .catch(error => console.log(error));
    }

    console.log(course);
    return (
        <div>
            <h2 style={{ textAlign: "center", margin: "2rem", backgroundColor: 'lightblue' }}>Course Details</h2>
            <Row>
                {course.map(({ name, description, trainers,url },i) => {
                    return (
                        <Col key={i}>
                            <Card style={{ width: '18rem', margin: "2rem" }}>
                                <Card.Img variant="top" src={url} />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {description ? description : ""}
                                    </Card.Text>
                                </Card.Body>
                                <p>Trainers</p>
                                <ListGroup className="list-group-flush">
                                    {trainers.map(({ name, experiace },i) => {

                                        return <ListGroup.Item key={i}>{name + "(" + experiace + ")"}</ListGroup.Item>

                                    })}
                                </ListGroup>
                                <Card.Body>
                                    {/* <Card.Link href="#">Card Link</Card.Link> */}
                                    <Card.Link href="#">Enroll Now</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
            </Row>
        </div>
    )
}

export default CourseDetails;