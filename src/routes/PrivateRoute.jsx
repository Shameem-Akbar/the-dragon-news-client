import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='d-flex justify-content-center mt-5'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' replace state={{ from: location }} ></Navigate>;
};

export default PrivateRoute;

/**
 * --------------------
 *       STEPS
 * --------------------
 * 1. check user is logged in or not
 * 2. if user is logged in , then allow them to visit the route
 * 3. else redirect the user to the login page
 * 4. set up private route
 * 5. handle loading
 * */ 