import React from 'react';
import '../../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
// import Section1 from './section1';
// import Section2 from './section2';
// import Section3 from './section3';
// import Section4 from './section4';


// export default function Sections() {
    // return (
//             <div className='bg'>
export default function Sections(){
    const { ref, playState } = useWebAnimations({
      keyframes: {
      transform: "translateX(50px)", // Move by 500px
      background: ["red", "blue", "green"], // Go through three colors
    },
    animationOptions: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state
    // },
    // More useful options...
  });

  return (
    <div className="container" ref={ref}>
      <p>🍿 Animation is {playState}</p>
      <div className="target"  />
    </div>
  );
};
                {/* <Section1 />
                <Section2 />
                <Section3 />
                <Section4 /> */}
            // </div>
    // )
// };