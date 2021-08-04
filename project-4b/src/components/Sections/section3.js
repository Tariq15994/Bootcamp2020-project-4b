import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Section3() {
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
        
            <div className='section2' >
                    <h1 className='section2-h1'>Point Of Sale</h1>
                    <p className='section2-para'>
                        The Syscoin protocol facilitates real-world point-of-sale applications that  can be used  to tra
                        nsact in-store  or via e-commerce. The high speed, quick resolution of asset transactions via
                        Syscoin’s proprietary  Z-DAG  technology means you can empower your business with the speed and security of blockchain.
                        <br />
                        Some examples of retail use cases include:
                        <ul>
                            <li> De-Centralised Marketplaces and E-Commerce</li>
                            <li>Game Assets and Microtransactions </li>
                            <li>Certificate Backed Digital Goods </li>
                        </ul>



                     </p>
                    <img className='section2-img' ref={CryptoSection.ref} src='http://project-4b-bootcamp.surge.sh/static/media/pointofsale.e03253c6.png' alt='not' height='550'></img>
                </div>

        
    )
};