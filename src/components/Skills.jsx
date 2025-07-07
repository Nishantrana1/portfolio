import React from 'react'

const Skills = () => {
    const skillsNow = [
        { name: 'Arduino', logo: 'https://www.svgrepo.com/show/373441/arduino.svg' },
        { name: 'Python', logo: 'https://www.svgrepo.com/show/374016/python.svg' },
        { name: 'C', logo: 'https://cdn.worldvectorlogo.com/logos/c-1.svg' },
        { name: 'C++', logo: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
    ];

    return (
        <div id='Skills' className="w-full flexad flex-col py-16 px-5">
            <div className="flexad flex-col md:w-3/4">
                <div className="border-6 h-16 w-44 flexad text-3xl font-bold mb-8">MY SKILLS</div>

                <p className="font-bold text-2xl self-start mb-6">USING NOW:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skillsNow.map((skill, index) => (
                        <div key={index} className="imgad flex flex-col items-center">
                            <img src={skill.logo} alt={skill.name} className="w-20 h-20 object-contain mb-2" />
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
