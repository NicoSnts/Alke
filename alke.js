document.addEventListener('DOMContentLoaded', () => {
    const alkeElements = document.querySelectorAll('[alke-animation]');
    const debugLog = document.getElementById('alke-debug-log');

    const logDebug = (message) => {
        const logEntry = document.createElement('div');
        logEntry.textContent = message;
        debugLog.appendChild(logEntry);
    };

    const applyAnimations = () => {
        alkeElements.forEach(el => {
            const animationType = el.getAttribute('alke-animation') || 'fade-in';
            const blurAmount = el.getAttribute('alke-blur');
            const type = el.getAttribute('alke-type') || 'standard';
            const staggerTime = parseFloat(el.getAttribute('alke-stagger')) || 0.1;
            const distance = el.getAttribute('alke-distance') || '20%';
            const duration = parseFloat(el.getAttribute('alke-duration')) || 1;
            const delay = parseFloat(el.getAttribute('alke-delay')) || 0;
            const infinite = el.hasAttribute('alke-infinite');
            const startTrigger = el.getAttribute('alke-start') || 'top bottom';
            const disableBelow = parseInt(el.getAttribute('alke-disabled'), 10);

            logDebug(`Setting up animation for element: ${el.tagName}#${el.id}`);

            // Check if the animation should be disabled on small screens
            const disableAnimation = disableBelow && window.innerWidth <= disableBelow;

            if (disableAnimation) {
                logDebug(`Animation disabled on element: ${el.tagName}#${el.id} due to screen size.`);
                // If disabled, set the element to its final state without animation
                gsap.set(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: 'none',
                });
                // Remove any existing ScrollTrigger to avoid unexpected behavior
                ScrollTrigger.getById(el)?.kill();
                return; // Skip applying the animation
            }

            let animationConfig = {
                opacity: 1,
                x: 0,
                y: 0,
                filter: blurAmount ? 'blur(0px)' : 'none',
                duration: duration,
                delay: delay,
                ease: 'power4.out'
            };

            // Initial State Setup based on animation type
            gsap.set(type === 'stagger' ? el.children : el, {
                opacity: 0,
                x: animationType.includes('left') ? `-${distance}` : animationType.includes('right') ? distance : 0,
                y: animationType.includes('up') ? distance : animationType.includes('down') ? `-${distance}` : 0,
                filter: blurAmount ? `blur(${blurAmount})` : 'none'
            });

            const triggerAnimation = () => {
                try {
                    if (type === 'stagger' && el.children.length > 0) {
                        gsap.to([...el.children], {
                            ...animationConfig,
                            stagger: staggerTime // Using the numeric staggerTime value
                        });
                    } else {
                        gsap.to(el, animationConfig);
                    }
                    logDebug(`Animation triggered for element: ${el.tagName}#${el.id}`);
                } catch (error) {
                    logDebug(`Error animating element: ${el.tagName}#${el.id} - ${error.message}`);
                }
            };

            // ScrollTrigger Integration
            gsap.timeline({
                id: el, // Assign an ID to each ScrollTrigger instance for easier management
                scrollTrigger: {
                    trigger: el,
                    start: startTrigger,
                    onEnter: triggerAnimation,
                    onLeaveBack: () => {
                        // Reset for infinite animations
                        if (infinite) {
                            gsap.set(type === 'stagger' ? el.children : el, {
                                opacity: 0,
                                x: animationType.includes('left') ? `-${distance}` : animationType.includes('right') ? distance : 0,
                                y: animationType.includes('up') ? distance : animationType.includes('down') ? `-${distance}` : 0,
                                filter: blurAmount ? `blur(${blurAmount})` : 'none'
                            });
                        }
                    },
                    onEnterBack: triggerAnimation,
                    toggleActions: 'play none none none',
                    once: !infinite // If not infinite, the animation will only play once
                }
            });
        });
    };

    // Apply animations on load
    applyAnimations();
});
