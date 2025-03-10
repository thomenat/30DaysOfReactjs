import React, { useState, useEffect} from 'react'

const withAuthorization = (WrappedComponent) => {
    return function ProtectedComponent(props) {
        return props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Not Authorizad</p>

    };
};

const Dashboard = () => {
    return <h1>Welcome to your dashboard</h1>;
}

const ProtectedDashboard = withAuthorization(Dashboard);
export default (WrappedComponent) => {
  return (
    <div>
    </div>
  )
}
