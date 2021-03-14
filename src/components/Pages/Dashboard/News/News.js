import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';

export default function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER}/api/news`, {
            method: "get",
        })
            .then((res) => res.json())
            .then((data) => setNews(data));

    }, []);

    return (
        <div className="container">
            <Accordion className='shadow'>
                {news.map(singleNews => (
                    <Card className="rounded" key={singleNews.id}>
                        <Card.Header style={{ cursor: "pointer" }}>
                            <Accordion.Toggle
                                as={Card.Header}
                                eventKey={singleNews.id}
                                style={{ fontSize: "1.3rem" }}
                            >
                                <div>
                                    {singleNews.title}
                                    <em
                                        className="float-right"
                                        style={{ fontSize: "small" }}
                                    >
                                        {new Date(
                                            singleNews.publishedAt
                                        ).toLocaleDateString()}
                                    </em>
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={singleNews.id}>
                            <Card.Body
                                className='border'
                                dangerouslySetInnerHTML={{ __html: singleNews.body }}
                            ></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
                {
                    news.length === 0 && <h3 className="text-center mt-5">No Updates available...!</h3>
                }
            </Accordion>
        </div>
    )
}
