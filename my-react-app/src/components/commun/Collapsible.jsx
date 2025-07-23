import '../../styles/Collapsible.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

export function Collapsible({ summary, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;

        if (content) {
            if (isOpen) {
                content.style.height = "0px";
                requestAnimationFrame(() => {
                    const scrollHeight = content.scrollHeight;
                    content.style.height = scrollHeight + "px";
                });
            } else {
                content.style.height = content.scrollHeight + "px";
                requestAnimationFrame(() => {
                    content.style.height = "0px";
                });
            }
        }
    }, [isOpen]);

    return (
        <div className="about-details">
            <div className="summary" onClick={() => setIsOpen(!isOpen)}>
                {summary}
                <span className={`chevron ${isOpen ? 'rotated' : ''}`}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </span>
            </div>
            <div className={`collapsible-content ${isOpen ? 'open' : ''}`} style={{ overflow: "hidden", transition: "height 0.5s ease" }} ref={contentRef}>
                <div className="inner">{children}</div>
            </div>
        </div>
    )
}