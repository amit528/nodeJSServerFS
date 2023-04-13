import React from 'react'
// import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col } from 'react-bootstrap'

function CourseCard({data}) {
    // useEffect(() =>{
    //     getData()
    // },[])

    // const getData = () =>{
    //     let url = '../../../../db/course.json'
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Origin' : 'http://localhost:3000',
    //             'Access-Control-Allow-Origin' : '*'
    //         }
    //     })
    //     .then(response => response.json())
    //     .catch(error => console.log('Authorization failed: ' + error));
    // }
    return (
        <>
            <h2 style={{ textAlign: "center", margin: "2rem", backgroundColor: 'lightblue' }}>Course Details</h2>
            <Row>
                {data.map(({name,description,trainers}) => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem', margin: "2rem" }}>
                                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        {description ? description : "Coming Soon"}
                                    </Card.Text>
                                </Card.Body>
                                <p>Trainers</p>
                                <ListGroup className="list-group-flush">
                               { trainers.map(({name,experiace})=>{
                               
                                        return <ListGroup.Item>{name+"("+experiace+")"}</ListGroup.Item>
                                   
                                })}
                                    
                                    
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
            </Row>
        </>
    )
}

export default CourseCard