import React from 'react'
import './Contact.css';
import LinkedIn from '../../../Assets/LinkedIn.png';
import Instagram from '../../../Assets/Instagram.png';

const Contact = () => {
    return (
        <div id='ContactSection' className='Contact bg-gray-800 h-[40vh] flex flex-col text-gray-200 xs:px-5 md:px-32 py-8'>
            <span className='text-xl text-gray-400'>Want to Work with me?</span>
            <div className="first flex justify-between">
                <span className='text-4xl font-semibold'>Contact</span>
                <span className='font-bold text-lg'>Contact No. 9658517111</span>
            </div>
            <div className="sections flex xs:flex-col md:flex-row justify-between items-center w-full h-full">
                <div className="personalInfo flex flex-col justify-center gap-4 h-full">
                    <span>shubhamg200204@gmail.com</span>
                    <span>New Orchard Road, Armonk, New York 10504-1722, United States</span>
                </div>
                <div className="socialMedia flex flex-col xs:hidden lg:block justify-center gap-4 h-full">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consectetur.</span>
                </div>
                <div className="socialMedia flex items-center gap-10 h-full">
                    <img src={LinkedIn} alt="" className='LinkedImg cursor-pointer' />
                    <img src={Instagram} alt="" className='InstaImg cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Contact
