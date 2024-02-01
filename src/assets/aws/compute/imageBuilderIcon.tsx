import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function ImageBuilder({ className }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      className={className}
    >
      <defs>
        <linearGradient
          id="Arch_AWS-EC2-Image-Builder_32_svg__a"
          x1="0%"
          x2="100%"
          y1="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#C8511B"></stop>
          <stop offset="100%" stopColor="#F90"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#Arch_AWS-EC2-Image-Builder_32_svg__a)"
          d="M0 0h40v40H0z"
        ></path>
        <path
          fill="#FFF"
          d="M15.077 16.374l-3.825 3.802 3.825 3.797.702-.697-3.123-3.1 3.123-3.104-.702-.698zm-8.085 15.64h11.91V8.339H6.992v23.675zM6 33h13.894V7.352H6V33zm1.63-13.317c0 5.609 4.59 10.172 10.235 10.172v-.986c-5.096 0-9.243-4.122-9.243-9.186 0-5.066 4.147-9.186 9.243-9.186v-.986C12.22 9.51 7.63 14.073 7.63 19.683zm13.831 5.194v.986c3.39 0 6.148-2.741 6.148-6.11 0-3.37-2.757-6.111-6.148-6.111v.986c2.843 0 5.155 2.3 5.155 5.125s-2.312 5.124-5.155 5.124zM34 17.71v4.087c0 .553-.453 1.003-1.01 1.003h-1.758a10.4 10.4 0 01-.78 1.87l1.245 1.236a1 1 0 010 1.42l-2.908 2.89c-.393.39-1.035.39-1.428 0l-1.246-1.238c-.6.32-1.23.58-1.879.777v1.747c0 .554-.453 1.005-1.01 1.005h-2.055v-.987h2.055l.018-2.517.369-.098a9.525 9.525 0 002.338-.965l.33-.19 1.781 1.769 2.933-2.89-1.78-1.794.19-.328a9.386 9.386 0 00.974-2.326l.098-.367h2.514l.017-4.104-2.531-.019-.098-.366A9.386 9.386 0 0029.406 15l-.192-.327 1.78-1.77-2.907-2.915-1.805 1.77-.33-.192a9.49 9.49 0 00-2.339-.965l-.37-.097v-2.5l-2.03-.017V7h2.013c.557 0 1.01.45 1.01 1.003v1.748c.648.197 1.279.457 1.88.776l1.245-1.237a1.016 1.016 0 011.428 0l2.908 2.89a1 1 0 010 1.42l-1.245 1.236c.32.598.583 1.225.78 1.869h1.759c.556 0 1.009.45 1.009 1.005z"
        ></path>
      </g>
    </svg>
  )
}

export default React.memo(ImageBuilder)
