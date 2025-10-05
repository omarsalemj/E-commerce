import React ,{useState} from 'react'
import {HiArrowRight,HiArrowLeft}  from "react-icons/hi"

const Banner = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    const slider=[
        'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg',
        'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
        'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
        'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg'
    ];

    const prevSlide =()=>{
        setcurrentSlide(currentSlide === 0 ? 3:(prev)=> prev-1);
    };
    const nextSlide =()=>{
        setcurrentSlide(currentSlide === 3 ? 0 :(prev)=> prev + 1);
    };


  return (

    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[89vh] relative'>

            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
                <img className='w-screen object-cover' src={slider[0]} alt="ImgOne" loading="priority" />
                <img className='w-screen object-cover' src={slider[1]} alt="ImgTwo" loading="priority" />
                <img className='w-screen object-cover' src={slider[2]} alt="ImgThree" loading="priority" />
                <img className='w-screen object-cover' src={slider[3]} alt="ImgFour" loading="priority" />
            </div>

            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-16'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] bg-white bg-opacity-60 border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-200'>
                    <HiArrowLeft/>
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] bg-white bg-opacity-60 border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-200'>
                    <HiArrowRight/>
                </div>
            </div>

        </div>
    </div>

  );
};

export default Banner