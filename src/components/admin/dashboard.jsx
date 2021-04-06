import React from "react";
import Users from './users';
import Sidebar from './sidebar';
import Posts from './posts'
import {Route} from 'react-router-dom'

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Route path='/admin/users' Component={Users} />
      <Route path='/admin/posts' Component={Posts} />
    </div>
  );
};

export default Dashboard;
