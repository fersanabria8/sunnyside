import React from 'react';
import { NavBar } from './NavBar';
import '../../App.css';
import { Section } from './Section';
import { Testimonials } from './Testimonials';
import { Images } from './Images';
import { Footer } from './Footer';

export const Home = () => {
  return (
    <div className='container-home'>
      <NavBar />
      <Section />
      <Testimonials />
      <Images />
      <Footer />
    </div>
  )
}
