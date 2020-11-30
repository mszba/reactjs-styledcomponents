import { useState } from 'react';
import {
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
    </>
  );
};

export default Home;
