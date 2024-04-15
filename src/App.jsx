import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import PopularCourses from './components/most-popular-courses/PopularCourses';

const App = () => {
  /* transformar o que pode ser transformado em objeto pra tornar a programação dinamica (map) */
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <PopularCourses />
    </>
  )
}

export default App;