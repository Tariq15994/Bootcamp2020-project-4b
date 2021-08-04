import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import section4 from '../../images/section4.png';




export default function Section4() {
  const CryptoSection = useWebAnimations({
    keyframes: {
      transform: "translate(15px,0px)",

    },
    animationOptions: {
      duration: 1500, // Run for 1000ms
      iterations: 4, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  })
  function scrollFor() {
    CryptoSection.getAnimation().play();
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", scrollFor);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", scrollFor);
    };
  });
  return (

    <div className='section3'>
      <h1 className='section3-h1'>What Can You Build?</h1>
      <p className='section3-para'>The possibilities of what you can build on the Syscoin platform are limited only by your imagination. Here are a some use cases to get your wheels turning:</p>
      <img className='section3-img' src={section4} height='750' ref={CryptoSection.ref} alt='none'></img>
      {/* <button onClick={() => getAnimation().pause()}>Pause</button> */}
      {/* <button onClick={() => getAnimation().play()}>Play</button> */}
      {/* <button onClick={()=>{section4_animate.getAnimation().play()}}>play</button> */}
    </div>

  )
}