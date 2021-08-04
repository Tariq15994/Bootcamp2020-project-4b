import React,{useEffect} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import section2 from '../../images/section2.png'



export default function Section2() {
    const Agile = useWebAnimations({
        keyframes: {
          transform: "translate(15px,0px)",
        
        },
        animationOptions: {
          duration: 1500, // Run for 1500ms
          iterations: 4, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      })
      function scrollFor() {
        Agile.getAnimation().play();
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
        
            <div className='side-section'>
                    <h1 className='section1-h1'>Agile Methodology</h1>
                    <p className='section1-para'>Agile is an iterative approach to project management and software development 
                    that helps teams deliver value to their customers faster and with fewer headaches. Requirements,  plans, and
                     results  are evaluated continuously so teams<br /> have a natural mechanism for responding to <br />change 
                     quickly.</p>
                    <img ref={Agile.ref} className='section1-img' src={section2} alt='not' height='550'></img>
                </div>
      
    )}