import './App.css';
import { useEffect, useState } from "react";
import styled from "styled-components";


const ProgressContainer = styled.div`
  width: 100%;
  height: 3px;
  background: transprent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ProgressBar = styled.div`
  height: 3px;
  background: ${(props) => props.color || "#ccc"};
  width: ${(props) => props.width || 0}%;
  transition: width 0.25s ease-out;
`;

const ProgressText = styled.span`
  font-size: 1rem;
  color: white; /* Optional: make it readable on colored background */
  position: absolute;
  right: 10px;
`;

const ScrollIndicator = ({ color, showText }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgressWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar width={progressWidth} color={color}>
        {showText && (
          <ProgressText>{`${Math.round(progressWidth)}%`}</ProgressText>
        )}
      </ProgressBar>
    </ProgressContainer>
  );
};


// const ProgressContainer = styled.div`
//   width: 100%;
//   height: 8px;
//   background: #ccc;
// `;
// const ProgressBar = styled.div`
//   height: 8px;
//   background: ${(props) => props.color || "#ccc"};
//   width: ${(props) => props.width || 0}%;
// `;
// const ProgressText = styled.span`
//   font-size: 1rem;
// `;

// const ScrollIndicator = ({ color, showText }) => {
//   const [progressWidth, setProgressWidth] = useState(0);
//   useEffect(() => {
//     window.onscroll = () => {
//       const winScroll =
//         document.body.scrollTop || document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setProgressWidth(scrolled);
//     };
//   }, []);

//   return (
//     <ProgressContainer>
//       <ProgressBar width={progressWidth} color={color}>
//         {showText && (
//           <ProgressText width={progressWidth}>{`${Math.round(
//             progressWidth
//           )}%`}</ProgressText>
//         )}
//       </ProgressBar>
//     </ProgressContainer>
//   );
// };

export default ScrollIndicator;
