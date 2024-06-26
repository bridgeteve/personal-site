"use client"
import { motion } from "framer-motion";
import { TracingBeam } from "../components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Spotlight } from "@/components/ui/Spotlight";
import { SignupFormDemo } from "@/components/ui/SignUpForm";
import { CardHoverEffectDemo } from "@/components/ui/feature-cards";
import { BackgroundGradientDemo } from "@/components/ui/carddemo";
import { AnimatedPinDemo } from "@/components/ui/PinDemo";
import { EvervaultCardDemo } from "@/components/ui/EverVaultDemo";
import { LampDemo } from "@/components/ui/lamp";
import me from "@/assets/images/89924370.jpeg"
import Footer from "@/components/ui/Footer";

const pinInfo = [
{
  title: "MyChoice Financial",
  href: "https://mychoice.ca"
},
{
  title: "Geomodulus",
  href: "https://torontoverse.ca"
},
{
  title: "Rily",
  href: "https://www.rily.co/"
}
]

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between ">
      <TracingBeam >
      <AuroraBackground >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 bg-no-repeat"
      >
       <img src={me} style={{borderRadius: "50%"}} alt="pic of me" ></img>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Hi! I'm Bridget Walsh.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          I'm a web developer, researcher, and writer.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Let's get started.
        </button>
      </motion.div>
      </AuroraBackground>
      <MacbookScroll ></MacbookScroll>
      <div className="h-[50rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight 
      className="-top-40 left-0 md:left-60 md:-top-20 "
      fill="white" 
      />
       <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Get <br /> in touch.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          I do a variety of work and I'm very good at it! I can build you something that looks like the website you're on right now, contribute to an ongoing project, facilitate a discussion, edit something you've written, or, show you that ChatGPT isn't a writer. 
        </p>
      </div>
      </div>
  <SignupFormDemo></SignupFormDemo>
  <CardHoverEffectDemo></CardHoverEffectDemo>
  <div style={{display: "flex", marginRight:"5rem", marginLeft: "5rem", justifyContent: "space-around"}} >
  <BackgroundGradientDemo ></BackgroundGradientDemo>
  <div style={{width: "2rem"}}></div>
  <EvervaultCardDemo></EvervaultCardDemo>
  <div style={{width: "2rem"}}></div>
  <BackgroundGradientDemo></BackgroundGradientDemo>
  </div>
  <div style={{display: "flex", marginRight:"5rem", marginLeft: "5rem", justifyContent: "space-around"}} >
  {pinInfo.map((item) => {
    return (
      <>
      <AnimatedPinDemo href={item.href} title={item.title}></AnimatedPinDemo>
      </>
    )
  })}
  </div>
  <LampDemo></LampDemo>
      </TracingBeam>
      <Footer></Footer>
    </main>
  );
}
