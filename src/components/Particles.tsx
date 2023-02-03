import { loadFull } from 'tsparticles';
import Particles from "solid-particles";
import { bubbles } from '../constants/particles/bubbles';

export const Bubbles = () => <Particles id="tsparticles" init={async (main) => await loadFull(main)} options={bubbles} className="z-10" />;