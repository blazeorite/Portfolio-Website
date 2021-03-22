import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Col,
    Button,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data, paper}) => {
    return ( 
        <Col lg="6">
             <Card className="shadow-lg--hover shadow border-0 text-center rounded my-2">
               <Card.Header>
                    <h5>{data.company}</h5>
                </Card.Header>
                <Card.Body className="py-5">
                    <Card.Img variant="top" src={data.companylogo} />
                    <Card.Title tag="h5">{data.role}</Card.Title>
                    <Card.Subtitle>{data.date}</Card.Subtitle>
                    <Card.Text className="my-3 text-left">
                        {data.desc}
                    </Card.Text>
                    <ul className="text-left">
                            {
                                data.descBullets ? 
                                data.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                    <div>
                    </div>
                    <Button href={data.paper} variant="outline-success" size="lg">
                      Paper
                    </Button>{' '}
                    <Button href={data.poster} variant="outline-info" size="lg">
                        Poster
                    </Button>{' '}
                    <Button href={data.video} variant="outline-danger" size="lg">
                        {data.btnname}
                    </Button>{' '}
                </Card.Body>
            </Card> 
        </Col>
     );
}

export default ExperienceCard; 
