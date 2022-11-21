import { useCallback } from "react";
import Particles from 'react-tsparticles';
import type { Engine } from "tsparticles-engine";
import { loadFull } from 'tsparticles';
import { bubbles } from '../constants/particles/bubbles';


const CustomParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);


  return (
    <Particles
      init={particlesInit}
      className="absolute top-0 h-screen w-full"
      options={bubbles}
    />
  )
};

export default CustomParticles;