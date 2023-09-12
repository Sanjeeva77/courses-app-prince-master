import logo from './logo.svg';
import './App.css';

import {NavBar} from './components/NavBar.js'
import { Menu } from './components/Menu';
import { Container,Row,Col } from 'reactstrap';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { AddCourse } from './components/AddCourse';
import { Fragment } from 'react';
import { ViewCourses } from './components/ViewCourses';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Fragment>
        <Row>
          <Col md='4'>
            <Menu/>
          </Col>
          <Col md='8'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='addcourse' element={<AddCourse/>}/>
              <Route path='allcourses' element={<ViewCourses/>}/>
            </Routes>
          </Col>
        </Row>
      </Fragment>
    </div>
  );
}

export default App;
