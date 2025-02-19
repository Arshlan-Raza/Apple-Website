import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";import { useEffect, useState } from "react";
 "../utils"


const Hero = () => {
    
    const [vidoeSrc,setVideoSrc] = useState(window.innerWidth
        < 760 ? smallHeroVideo : heroVideo 
    )

    const  handleVideoSource =  () => {
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo);
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect( () => {
        window.addEventListener('resize',handleVideoSource);

        return () => {
            window.removeEventListener('resize',handleVideoSource)
        }
    }) 

    useGSAP(() =>{
        gsap.to('.hero-title',{
            opacity:1,
            delay:2
        })
        gsap.to('#cta',{
            opacity:1,
            y:-50,delay:2 ,
        })
    },[])

  return (
    <section className='w-full nav-height bg-black relative'>
    
    <div className="h-5/6 w-full flex-center flex-col ">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
            <video className="pointer-events-none" autoPlay muted loop playsInline={true} key={vidoeSrc} >
                <source src={vidoeSrc} type="video/mp4"/>
            </video>
        </div>
    </div>

    <div id="cta" className="flex flex-col items-center opacity-0
    tranlate-y-20">
        <a href="#highlight" className="btn">Buy</a>
        <p>From $199 monthor $999</p>
    </div>

    </section>
  )
}

export default Hero