import About from "./components/About";
import { Header } from "./components/Header";
import { HomeHero } from "./components/HomeHero";
import Portfolio from "./components/Portfolio";
import { Skills } from "./components/Skills";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <>
      <SocialIcons />
      <Header />
      <HomeHero />
      <About />
      <Portfolio />
      <Skills />
      
    </>
  );
}