import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  const projects = [
    { imgSrc: '/public/ACH website.jpg', title: 'ACH Company Website', tags: ['API', 'Development'], projectLink: 'https://github.com' },
    { imgSrc: '/public/campus-transfer.jpg', title: 'Campus Transfer', tags: ['API', 'Development'], projectLink: 'https://github.com' },
    { imgSrc: '/public/coffee ecommerce.webp', title: 'Coffee Ecommerce', tags: ['API', 'Development'], projectLink: 'https://github.com' },
    { imgSrc: '/public/lawyer-client.jpg', title: 'Legal Connect', tags: ['API', 'Development'], projectLink: 'https://github.com' },
    { imgSrc: '/public/game.jpg', title: 'Simple Game', tags: ['API', 'Development', 'Godot'], projectLink: 'https://github.com' },
  ]

  return (
    <section id='#project' className='sectionProject py-16'>
        <h2 className='text-3xl font-bold text-center mb-10'>My Portfolio Highlights</h2>
      <div className='container mx-auto px-4'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              key={key}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
