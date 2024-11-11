import React from 'react';
import HeroSlider, {Slide, Nav} from 'hero-slider'; 
const b= "https://www.pca.ac.in/images/1.jpg";
const camp= "https://www.pca.ac.in/images/6.JPG";
const c= "https://www.pca.ac.in/images/5.JPG";
const d= "https://www.pca.ac.in/images/2.jpg";
const e= "https://www.pca.ac.in/images/4.jpg";
const g= "https://www.pca.ac.in/images/2.jpg";
const a= "https://www.pca.ac.in/images/3.jpg";

const ImageSlider=()=>{
  return (
    <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide,nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide)}
        onChange={nextSlide=> console.log("onChange",nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.33)",
            backgroundSize: "cover"
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            heigth: "100vh"
        }}
        >
        <Slide
            background={{
            backgroundImage: c,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: camp,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImage: b,
            backgroundAttachment: "fixed"
            }}
          />
        <Slide
            background={{
            backgroundImageSrc: d,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImageSrc: e,
            backgroundAttachment: "fixed"
            }}
            />
        <Slide
            background={{
            backgroundImageSrc: g,
            backgroundAttachment: "fixed"
            }}
          />
        <Slide
            background={{
            backgroundImage: a,
            backgroundAttachment: "fixed"
            }}
          />
          <Nav />
    </HeroSlider>
  );
}

export default ImageSlider;