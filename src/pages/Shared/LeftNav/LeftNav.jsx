import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4 className='mb-3'>All Categories</h4>
            <div className='ps-3'>
                {/* {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                } */}

                {
                    categories.map(category => <ListGroup
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'><ListGroup.Item className='fw-semibold' action>{category.name}</ListGroup.Item></Link>

                    </ListGroup>)
                }
            </div>
        </div>
    );
};

export default LeftNav;