import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions Are Here</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae odio ducimus doloremque fuga non veritatis ullam eum, iusto corrupti.</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;