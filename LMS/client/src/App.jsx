import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Students/Home'
import CoursesList from './Pages/Students/CoursesList'
import CourseDetails from './Pages/Students/CourseDetails'
import MyEnrollments from './Pages/Students/MyEnrollments'
import Player from './Pages/Students/Player'
import Loading from './Components/Students/Loading'
import Educator from './Pages/Educator/Educator'
import DashBoard from './Pages/Educator/DashBoard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses'
import SudentsEnrollled from './Pages/Educator/SudentsEnrollled'
import Navbar from './Components/Students/Navbar'
import "quill/dist/quill.snow.css";
const App = () => {
  const isEductionRoute = useMatch('/educator/*')
  return (
    <div className='text-defaut min-h-screen bg-amber-50'>
     {!isEductionRoute &&  <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>

  <Route path='/educator' element={<Educator/>}>
    <Route path='/educator' element={<DashBoard/>}/>
    <Route path='add-course' element={<AddCourse/>}/>
    <Route path='my-courses' element={<MyCourses/>}/>
    <Route path='student-enrolled' element={<SudentsEnrollled/>}/>
  </Route>
      </Routes>
      

    </div>
  )
}

export default App