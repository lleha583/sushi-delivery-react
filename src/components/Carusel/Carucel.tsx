import { useEffect, useState } from 'react';
import './carusel.css';
import slide1 from '../../assets/img/carusel_slide_1.png';
import slide2 from '../../assets/img/carusel_slide_2.png';
import slide3 from '../../assets/img/carusel_slide_3.png';

export default function Carusel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { id: 1, content: slide1},
        { id: 2, content: slide2},
        { id: 3, content: slide3},
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 8000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <section className="carusel">
            <div className="carusel__inner">
            {slides.map((slide, index) => (
                    <img
                    key={slide.id}
                    src={slide.content}
                    className={index === currentIndex ? 'active' : ''}
                    alt={`Slide ${index + 1}`}
                />
                ))}
            </div>
            <div className='carusel_navigation'>
                <div className='carusel_points'>
                    {
                        slides.map((item, index)=> {
                            return (
                                <div className={(index === currentIndex) ? 'point' : 'point_active'}
                                onClick={()=> {setCurrentIndex(index)}} key={index}></div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}