// "use client";

// import Link from "next/link";

// interface NeumorficButtonProps {
//     label: string;
//     url?: string;
//   }
  
//   export default function NeumorficButton({ label, url }: NeumorficButtonProps) {
//     return (
//       <>
//         {url ? (
//           <Link href={url}>
//               <button type="button" className="button">{label}</button>
//           </Link>
//         ) : (
//           <button type="button" className="button">{label}</button>
//         )}

//         <style jsx>{`

//           button {
//             padding: 1em 3em;
//             background: #efefef;
//             border: none;
//             border-radius: .5rem;
//             color: #444;
//             font-size: 1rem;
//             font-weight: 700;
//             letter-spacing: .2rem;
//             text-align: center;
//             outline: none;
//             cursor: pointer;
//             transition: .2s ease-in-out;
//             box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
//                         -6px -6px 10px rgba(255, 255, 255, .5),
//                         6px 6px 8px rgba(255, 255, 255, .075),
//                         6px 6px 10px rgba(0, 0, 0, .15);
//           }

//           @media (min-width: 768px) {
//             button {
//               padding: 1.5em 5em;
//               font-size: 1.2rem;
//             }
//           }

//           button:hover {
//             box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
//                         -2px -2px 4px rgba(255, 255, 255, .4),
//                         2px 2px 2px rgba(255, 255, 255, .05),
//                         2px 2px 4px rgba(0, 0, 0, .1);
//           }

//           button:active {
//             box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
//                         inset -2px -2px 4px rgba(255, 255, 255, .5),
//                         inset 2px 2px 2px rgba(255, 255, 255, .075),
//                         inset 2px 2px 4px rgba(0, 0, 0, .15);
//           }

//         `}</style>
//       </>
//     );
//   }
  

import React from 'react';
import Link from "next/link";

interface BtnProps {
    label: string;
    url: string;
}

function Btn({label, url}: BtnProps){
  return (
    <Link href={url} aria-label="button link">
      <button type="button" className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-1 px-6 py-4 overflow-hidden border-2 rounded-full group">
            {label}
            <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
            </svg>
      </button>
    </Link>
  );
}

export default Btn;
