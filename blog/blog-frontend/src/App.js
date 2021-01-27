import React from 'react';
import {Route} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
    <Route component ={PostListPage} path={['/@:username', '/']} exact />
    <Route component ={RegisterPage} path = "/register" />
    <Route component ={WritePage} path = "/write" />
    <Route component ={PostPage} path = "/@:username/:postId" />
    <Route component ={LoginPage} path="/login" />
    </>
  );
};

export default App;