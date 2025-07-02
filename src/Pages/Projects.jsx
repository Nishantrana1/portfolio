import React from 'react'


function Projects() {
  const projectDetails=[

  ];

  return (
    <div className='flexad w-full'>
      <div className='flexad flex-col my-32 mx-10'>
        <div className="border-6 h-16 w-55 flexad text-3xl font-bold">MY PROJECTS</div>
          <div className="projects flexad md:flex-row flex-col gap-8 mt-15 flex-wrap">
            {projectDetails.map(({gifpath, githublink, pagelink, description},index)=>( 
              <div key={index} className='flex flex-col h-108 md:w-[30%]'>
                <img src={gifpath} alt={`Project-${index+1}`} className='border h-50 mb-3'/>
                <p className='text-justify text-lg mb-3'>{description}</p>
                <a href={pagelink} className='text-blue-700 text-center text-lg font-semibold underline'>Deploy Link</a>
                <a href={githublink} className='text-blue-700 text-center text-lg font-semibold underline'>Github Link</a>
                <div className="md:hidden my-8 border w-full h-[1px]"></div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Projects
