document.addEventListener("DOMContentLoaded", () => {
  const alkeElements = document.querySelectorAll("[alke-animation]");

  const applyAnimations = () => {
    alkeElements.forEach((el) => {
      const animationType = el.getAttribute("alke-animation") || "fade-in";
      const blurAmount = el.getAttribute("alke-blur");
      const type = el.getAttribute("alke-type") || "standard";
      const staggerTime = parseFloat(el.getAttribute("alke-stagger")) || 0.1;
      const distance = el.getAttribute("alke-distance") || "20%";
      const duration = parseFloat(el.getAttribute("alke-duration")) || 1;
      const delay = parseFloat(el.getAttribute("alke-delay")) || 0;
      const infinite = el.hasAttribute("alke-infinite");
      const startTrigger = el.getAttribute("alke-start") || "top 100%";

      let animationConfig = {
        opacity: 1,
        x: 0,
        y: 0,
        filter: blurAmount ? "blur(0px)" : "none",
        duration: duration,
        delay: delay,
        ease: "power4.out",
      };

      // Initial State Setup based on animation type
      gsap.set(type === "stagger" ? el.children : el, {
        opacity: 0,
        x: animationType.includes("left")
          ? `-${distance}`
          : animationType.includes("right")
          ? distance
          : 0,
        y: animationType.includes("up")
          ? distance
          : animationType.includes("down")
          ? `-${distance}`
          : 0,
        filter: blurAmount ? `blur(${blurAmount})` : "none",
      });

      const triggerAnimation = () => {
        if (type === "stagger" && el.children.length > 0) {
          gsap.to([...el.children], {
            ...animationConfig,
            stagger: staggerTime,
          });
        } else {
          gsap.to(el, animationConfig);
        }
      };

      gsap.timeline({
        id: el,
        scrollTrigger: {
          trigger: el,
          start: startTrigger,
          onEnter: triggerAnimation,
          onLeaveBack: () => {
            if (infinite) {
              gsap.set(type === "stagger" ? el.children : el, {
                opacity: 0,
                x: animationType.includes("left")
                  ? `-${distance}`
                  : animationType.includes("right")
                  ? distance
                  : 0,
                y: animationType.includes("up")
                  ? distance
                  : animationType.includes("down")
                  ? `-${distance}`
                  : 0,
                filter: blurAmount ? `blur(${blurAmount})` : "none",
              });
            }
          },
          onEnterBack: triggerAnimation,
          toggleActions: "play none none none",
          once: !infinite,
        },
      });
    });
  };

  // Apply animations on load
  applyAnimations();
});
