import React from 'react'

const About = () => {
    return (
        <div id='About' className='aboutme flexad w-full'>
            <div className='flexad flex-col mt-32 md:w-3/4'>
                <div className="border-6 h-16 w-44 flexad text-3xl font-bold">ABOUT ME</div>
                <p className='md:text-center mx-8 py-8 text-lg text-justify'>I'm a self-motivated Arduino developer with a solid grasp of C++, sensors, and embedded systems. I enjoy building real-world hardware projects like motor-controlled cars, Bluetooth/Wi-Fi-based devices, and sensor-driven automation. Always exploring new components and tools, I focus on writing efficient code, solving practical problems, and learning through hands-on experimentation.
                </p>
            </div>
        </div>
    )
}

export default About
