import { useState } from 'react';
import '../../styles/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Carousel({ items, renderItem }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function next() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length
        );
    }

    function prev() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }

    return (
        <div className='carousel-container'>
            <button onClick={prev} className='carousel-button left'><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="carousel">
                <div className="carousel-item">
                    {renderItem(items[currentIndex], currentIndex)}
                </div>
            </div>
            <button onClick={next} className='carousel-button right'><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    );
}