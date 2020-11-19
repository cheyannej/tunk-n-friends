import React from 'react';
import { Link } from 'react-router-dom';

function UnknownPage() {
  return (
    <div>
    <h1> This page does not existed, click here to be redirected to the
    <Link to="/"> Home Page</Link>
    </h1>
    </div>
  );
}

export default UnknownPage;
