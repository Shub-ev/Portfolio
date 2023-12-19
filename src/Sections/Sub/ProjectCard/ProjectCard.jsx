// AboutCard.js
import React from 'react'
import './ProjectCard.css';

const ProjectCard = ({ name, type, image, info, used }) => {

  const UsedLang = Object.values(used);

  return (
    <div className="card bg-blue-50 rounded-2xl pt-4">
      <div className="title px-4 py-2">
        <span className="card-title text-3xl font-extrabold">{name}</span>
        <h2 className='text-xl text-gray-800 font-semibold'>{type}</h2>
      </div>
      <img src={image} alt="" className='border-2 border-blue-50 py-4' />

      <div className="bottom p-4">
        <ul className='flex gap-4'>
          {UsedLang.map((lang, index) => (
            <li key={index} className='LangButton sm:text-xl md:text-xs lg:text-lg font-extrabold border-2 px-3 py-1 rounded-xl border-blue-400'>{lang}</li>
          ))}
        </ul>
        <p className="card-content xs:text-base sm:text-lg pt-4 font-semibold text-gray-600">{info}</p>
      </div>

      <button className='bg-blue-400 hover:bg-blue-600 text-white font-semibold px-4 py-2 w-full rounded-xl'>VIEW</button>
    </div>
  )
}

export default ProjectCard;