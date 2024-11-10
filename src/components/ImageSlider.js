import React from 'react';
import HeroSlider, {Slide} from 'hero-slider'; 
const b= "https://www.pca.ac.in/images/1.jpg";
const camp= "https://www.pca.ac.in/images/6.JPG";
const c= "https://www.pca.ac.in/images/5.JPG";
const d= "https://www.pca.ac.in/images/2.jpg";
const e= "https://www.pca.ac.in/images/4.jpg";
const g= "https://www.pca.ac.in/images/2.jpg";
const a= "https://www.pca.ac.in/images/3.jpg";

const app=()=>{
  return (
    <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide,nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide)}
        onChange={nextSlide=> console.log("onChange",nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            heigth: "1000vh"
        }}
        >
        <Slide
            background={{
            backgroundImage: `url(${b})`,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: `url(${camp})`,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: `url(${c})`,
            backgroundAttachment: "fixed"
            }}
          />
        <Slide
            background={{
            backgroundImage: `url(${d})`,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: `url(${e})`,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: `url(${g})`,
            backgroundAttachment: "fixed"
            }}
          />
        <Slide
            background={{
            backgroundImage: `url(${a})`,
            backgroundAttachment: "fixed"
            }}
          />
    </HeroSlider>
  )
}

export default App;