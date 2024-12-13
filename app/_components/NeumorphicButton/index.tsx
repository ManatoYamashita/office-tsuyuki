"use client";

import Link from "next/link";

interface NeumorficButtonProps {
    label: string;
    url?: string;
  }
  
  export default function NeumorficButton({ label, url }: NeumorficButtonProps) {
    return (
      <>
        {url ? (
          <Link href={url}>
              <button type="button" className="button">{label}</button>
          </Link>
        ) : (
          <button type="button" className="button">{label}</button>
        )}

        <style jsx>{`

          button {
            padding: 1em 3em;
            background: #efefef;
            border: none;
            border-radius: .5rem;
            color: #444;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: .2rem;
            text-align: center;
            outline: none;
            cursor: pointer;
            transition: .2s ease-in-out;
            box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
                        -6px -6px 10px rgba(255, 255, 255, .5),
                        6px 6px 8px rgba(255, 255, 255, .075),
                        6px 6px 10px rgba(0, 0, 0, .15);
          }

          @media (min-width: 768px) {
            button {
              padding: 1.5em 5em;
              font-size: 1.2rem;
            }
          }

          button:hover {
            box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
                        -2px -2px 4px rgba(255, 255, 255, .4),
                        2px 2px 2px rgba(255, 255, 255, .05),
                        2px 2px 4px rgba(0, 0, 0, .1);
          }

          button:active {
            box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
                        inset -2px -2px 4px rgba(255, 255, 255, .5),
                        inset 2px 2px 2px rgba(255, 255, 255, .075),
                        inset 2px 2px 4px rgba(0, 0, 0, .15);
          }

        `}</style>
      </>
    );
  }
  