import React from 'react'

const Skills = () => {
    return (
        <div id='Skills'>
            <section className='Skills flexad w-full'>
                <div className='flexad flex-col mt-32 mx-10md:w-3/4 flex-wrap'>
                    <div className="border-6 h-16 w-44 flexad text-3xl font-bold">MY SKILLS</div>
                    <div className="flexad flex-col space-y-10 my-10">
                        <p className='font-bold text-2xl self-start'>USING NOW:</p>
                        <div className="1 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://www.svgrepo.com/show/373441/arduino.svg" alt="Arduino" className='w-24'/>Arduino</div>
                        <div className="imgad"><img src="https://www.svgrepo.com/show/374016/python.svg" alt="Python" className='w-24'/>Python</div>
                        </div>
                        
                        <div className="3 flexad space-x-10 md:space-x-30">
                        <div className="imgad"><img src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="C" className='w-24 '/>C</div>
                        <div className="imgad"><img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="C++" className='w-24'/>C++</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Skills flexad w-full'>
            
            </section>
        </div>
    )
}

export default Skills
