import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 1000,   // Animation duration (ms)
    once: true,       // Animate only once when scrolling down
    easing: "ease-in-out",
  });
};
