import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="button-overlay" />
        <span>Button
          <svg width={53} height={58} viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.25 36.3612L17.25 51.9497C11.5833 55.2213 4.5 51.1318 4.50001 44.5885L4.50001 13.4115C4.50001 6.86824 11.5833 2.77868 17.25 6.05033L44.25 21.6388C49.9167 24.9104 49.9167 33.0896 44.25 36.3612Z" stroke="currentColor" strokeWidth={9} /></svg></span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    font-size: 17px;
    border-radius: 12px;
    background: linear-gradient(
      180deg,
      rgb(56, 56, 56) 0%,
      rgb(36, 36, 36) 66%,
      rgb(41, 41, 41) 100%
    );
    color: rgb(218, 218, 218);
    border: none;
    padding: 2px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease; /* Added for scaling effect */
  }

  .button:hover {
    transform: scale(1.05); /* Scale up the button on hover */
  }

  .button span {
    border-radius: 10px;
    padding: 0.8em 1.3em;
    padding-right: 1.2em;
    text-shadow: 0px 0px 20px #4b4b4b;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    color: inherit;
    transition: all 0.3s;
    background-color: rgb(29, 29, 29);
    background-image: radial-gradient(
        at 95% 89%,
        rgb(15, 15, 15) 0px,
        transparent 50%
      ),
      radial-gradient(at 0% 100%, rgb(17, 17, 17) 0px, transparent 50%),
      radial-gradient(at 0% 0%, rgb(29, 29, 29) 0px, transparent 50%);
  }

  .button:hover span {
    background-color: rgb(26, 25, 25);
    animation: pulse 0.6s infinite; /* Added pulse animation */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .button-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-conic-gradient(
        rgb(48, 47, 47) 0.0000001%,
        rgb(51, 51, 51) 0.000104%
      )
      60% 60%/600% 600%;
    filter: opacity(10%) contrast(105%);
    -webkit-filter: opacity(10%) contrast(105%);
    transition: opacity 0.3s ease; /* Smooth transition for overlay */
  }

  .button:hover .button-overlay {
    opacity: 0.3; /* Change overlay opacity on hover */
  }

  .button svg {
    width: 15px;
    height: 15px;
    transition: transform 0.3s ease; /* Added for SVG movement */
  }

  .button:hover svg {
    transform: translateX(5px); /* Slightly move the SVG on hover */
  }`;

export default Button;
