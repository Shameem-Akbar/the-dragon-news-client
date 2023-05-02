import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { image_url, title, details, category_id } = news;
    return (
        <div>
            <h3>Dragon News</h3>
            <Card className='p-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='px-0'>
                    <Card.Title className='fw-bold fs-3 me-5'>{title}</Card.Title>
                    <Card.Text className='text-secondary me-5'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft className='mb-1 me-1'></FaArrowLeft>  All News in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;