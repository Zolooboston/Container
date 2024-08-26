import { Experience } from "@/components/parts/Experience";
import { AboutMe, Footer, Header, Hero, Skills } from "../components/parts";

export default function Home() {
  return (
    <div className="w-full flex">
      <div className="">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </div>
    //test test
  );
}
