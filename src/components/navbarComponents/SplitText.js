// import { useSprings, animated } from '@react-spring/web';
// import { useEffect, useRef, useState } from 'react';

// const SplitText = ({
//   text = '',
//   className = '',
//   delay = 100,
//   animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
//   animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
//   easing = 'easeOutCubic',
//   threshold = 0.1,
//   rootMargin = '-100px',
//   textAlign = 'center',
//   onLetterAnimationComplete,
// }) => {
//   const words = text.split(' ').map(word => word.split(''));
//   const letters = words.flat();
//   const [inView, setInView] = useState(false);
//   const ref = useRef();
//   const animatedCount = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(ref.current);
//         }
//       },
//       { threshold, rootMargin }
//     );
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold, rootMargin]);

//   const springs = useSprings(
//     letters.length,
//     letters.map((_, i) => ({
//       from: animationFrom,
//       to: inView
//         ? async (next) => {
//             await next(animationTo);
//             animatedCount.current += 1;
//             if (animatedCount.current === letters.length && onLetterAnimationComplete) {
//               onLetterAnimationComplete();
//             }
//           }
//         : animationFrom,
//       delay: i * delay,
//       config: { easing },
//     }))
//   );

//   return (
//     <p
//       ref={ref}
//       className={`split-parent ${className}`}
//       style={{ textAlign, overflow: 'hidden', display: 'inline', whiteSpace: 'normal', wordWrap: 'break-word' }}
//     >
//       {words.map((word, wordIndex) => (
//         <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
//           {word.map((letter, letterIndex) => {
//             const index = words
//               .slice(0, wordIndex)
//               .reduce((acc, w) => acc + w.length, 0) + letterIndex;

//             return (
//               <animated.span
//                 key={index}
//                 style={{
//                   ...springs[index],
//                   display: 'inline-block',
//                   willChange: 'transform, opacity',
//                 }}
//               >
//                 {letter}
//               </animated.span>
//             );
//           })}
//           <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
//         </span>
//       ))}
//     </p>
//   );
// };

// export default SplitText;
// import { useSprings, animated } from '@react-spring/web';
// import { useEffect, useRef, useState } from 'react';

// const SplitText = ({
//   text = '',
//   className = '',
//   delay = 100,
//   animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
//   animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
//   easing = 'easeOutCubic',
//   threshold = 0.1,
//   rootMargin = '-100px',
//   textAlign = 'center',
//   onWordAnimationComplete,
// }) => {
//   const words = text.trim().split(' ');
//   const [inView, setInView] = useState(false);
//   const ref = useRef();
//   const animatedCount = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(ref.current);
//         }
//       },
//       { threshold, rootMargin }
//     );
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold, rootMargin]);

//   const springs = useSprings(
//     words.length,
//     words.map((_, i) => ({
//       from: animationFrom,
//       to: inView
//         ? async (next) => {
//             await next(animationTo);
//             animatedCount.current += 1;
//             if (animatedCount.current === words.length && onWordAnimationComplete) {
//               onWordAnimationComplete();
//             }
//           }
//         : animationFrom,
//       delay: i * delay,
//       config: { easing },
//     }))
//   );

//   return (
//     <p
//       ref={ref}
//       className={`split-parent ${className}`}
//       style={{ textAlign, overflow: 'hidden', display: 'inline', whiteSpace: 'normal', wordWrap: 'break-word' }}
//     >
//       {words.map((word, index) => (
//         <animated.span
//           key={index}
//           style={{
//             ...springs[index],
//             display: 'inline-block',
//             marginRight: '0.3em',
//             willChange: 'transform, opacity',
//           }}
//         >
//           {word}
//         </animated.span>
//       ))}
//     </p>
//   );
// };

// export default SplitText;


import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 150,
  animationFrom = { opacity: 0, transform: 'translateY(30px)' },
  animationTo = { opacity: 1, transform: 'translateY(0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onWordAnimationComplete,
}) => {
  const words = text.trim().split(/\s+/);
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: animationFrom,
      to: inView
        ? async (next) => {
            await next(animationTo);
            animatedCount.current += 1;
            if (animatedCount.current === words.length && onWordAnimationComplete) {
              onWordAnimationComplete();
            }
          }
        : animationFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: textAlign === 'center' ? 'center' : 'flex-start',
        gap: '0.4em',
      }}
    >
      {springs.map((style, i) => (
        <animated.span
          key={i}
          style={{
            ...style,
            display: 'inline-block',
          }}
        >
          {words[i]}
        </animated.span>
      ))}
    </p>
  );
};

export default SplitText;


