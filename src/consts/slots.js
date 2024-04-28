import {
  SiNestjs,
  SiBulma,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
} from 'react-icons/si';
import { FaAngular, FaVuejs, FaCss3Alt } from 'react-icons/fa';
import { BiLogoSass } from 'react-icons/bi';
import { RiReactjsFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { LiaJava } from 'react-icons/lia';

export const DBS = [SiMongodb, SiPostgresql, GrMysql, SiNestjs];
export const FRAMEWORKS = [FaVuejs, FaAngular, RiReactjsFill, SiNextdotjs];
export const CSS = [SiTailwindcss, BiLogoSass, SiBulma, FaCss3Alt];
export const LANGUAGES = [SiJavascript, SiTypescript, SiPython, LiaJava];
export const SPIN_ANIMATION = [
  -1000, 1000, -700, 700, -500, 500, -300, 300, -100, 100, 0,
];
