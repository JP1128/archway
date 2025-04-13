// Upper section for splash page
// Responsive layout: column on small screens, row on medium+ screens (1:1)
// Left: title, description, signup button with vw-based scaling
// right: 16:9 video box with centered text and custom SVG play button inside
// Video should be added inside the video container later


import React from 'react';
import FilledButton from './buttons/FilledButton';

const UpperSplashCards = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-10">
            {/* Left content area */}
            <div className="flex flex-col w-full md:w-1/2 text-left">
                <h1 className="text-[4vw] md:text-[2.6vw] font-extrabold text-black leading-snug mb-4">
                    <span className="block">ARCHWAY:</span>
                    <span className="block">By Students, For Students</span>
                </h1>
                <p className="text-[4vw] md:text-[1.8vw] text-[#4D4D4D] mb-4">
                    ARCHWAY is a student-driven platform for sharing tips, resources, and real experiences to help one
                    another thrive—on campus and beyond. From study strategies to life hacks, everything is created by
                    students, for students.
                </p>
                {/* Signup button on left area */}
                <div className="mt-2">
                    <div className="px-[0.5vw] py-[1.5vw] md:px-0.5 md:py-1.5 text-[3.5vw] md:text-base">
                        <FilledButton>Sign up</FilledButton>
                    </div>
                </div>
            </div>

            {/* Right Video Area */}
            <div
                className="relative w-full md:w-1/2 aspect-[16/9] rounded-[10px] border border-[#909090] overflow-hidden flex items-center justify-center"
                style={{
                    boxShadow: '3px 3px 3px rgba(250, 80, 83, 0.75)',
                }}
            >
                <div className="absolute inset-0 flex flex-col justify-between py-[16.66%] px-[8.33%]">
                    <div className="flex-1" />
                    {/* text in the video container */}
                    <div className="flex flex-col items-center justify-center flex-[2] w-full text-center">
                        <p className="text-[4vw] md:text-xl font-medium text-black leading-tight">Introducing</p>
                        <p className="text-[5vw] md:text-3xl font-bold text-black leading-tight">ARCHWAY</p>
                    </div>
                    <div className="flex-1" />
                </div>

                {/* Play Button in video container*/}
                <svg
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute"
                    style={{
                        width: '10vw',
                        height: '10vw',
                        maxWidth: '60px',
                        maxHeight: '60px',
                        minWidth: '30px',
                        minHeight: '30px',
                    }}
                >
                    <rect width="50" height="50" rx="10" fill="#FA5053" fillOpacity="0.85" />
                    <path
                        d="M33.175 21.2498L21.1 14.3248C20.4466 13.9475 19.705 13.7499 18.9505 13.752C18.196 13.754 17.4555 13.9558 16.8042 14.3366C16.1529 14.7175 15.614 15.264 15.2422 15.9206C14.8704 16.5771 14.6791 17.3204 14.6875 18.0748V31.9748C14.6875 33.1087 15.1379 34.196 15.9396 34.9977C16.7414 35.7994 17.8287 36.2498 18.9625 36.2499C19.7131 36.2486 20.4501 36.0503 21.1 35.6749L33.175 28.7498C33.8238 28.3743 34.3625 27.8348 34.737 27.1854C35.1115 26.536 35.3086 25.7995 35.3086 25.0498C35.3086 24.3002 35.1115 23.5637 34.737 22.9143C34.3625 22.2649 33.8238 21.7254 33.175 21.3498V21.2498ZM31.925 26.4873L19.85 33.5123C19.5794 33.6657 19.2736 33.7464 18.9625 33.7464C18.6514 33.7464 18.3457 33.6657 18.075 33.5123C17.8051 33.3565 17.581 33.1324 17.4253 32.8625C17.2695 32.5926 17.1875 32.2865 17.1875 31.9748V18.0248C17.1875 17.7132 17.2695 17.4071 17.4253 17.1372C17.581 16.8673 17.8051 16.6432 18.075 16.4873C18.3466 16.3358 18.6516 16.2542 18.9625 16.2498C19.2732 16.2562 19.5777 16.3377 19.85 16.4873L31.925 23.4623C32.195 23.6181 32.4192 23.8422 32.5751 24.1121C32.731 24.382 32.8131 24.6882 32.8131 24.9998C32.8131 25.3115 32.731 25.6177 32.5751 25.8876C32.4192 26.1575 32.195 26.3816 31.925 26.5373V26.4873Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
};

export default UpperSplashCards;
