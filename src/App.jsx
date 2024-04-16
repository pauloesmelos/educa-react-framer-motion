import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import PopularCourses from './components/most-popular-courses/PopularCourses';
import Teacher from './components/teacher/Teacher';
import Asks from './components/asks/Asks';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

const App = () => {
  /* transformar o que pode ser transformado em objeto pra tornar a programação dinamica (map) */
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <PopularCourses />
      <Teacher />
      <Asks />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;