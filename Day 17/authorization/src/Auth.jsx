import React from 'react'

const withAuthorization = (WrappedComponent, message) => {
    return function ProtectedComponent(props) {
      if (!props.isAuthenticated) {
        console.log(`Access Denied: ${message}`);
        return <p>{message}</p>;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  

const Dashboard = () => {
    return <h2>Welcome to your dashboard</h2>;
}

const ProtectedDashboard = withAuthorization(Dashboard, "You must be logged in to view dashboard");

export default function Auth() {
  return (
<div>
      <h1>Higher-Order Component: Authorization</h1>
      <ProtectedDashboard isAuthenticated={false} />
    </div>  
    );
};
