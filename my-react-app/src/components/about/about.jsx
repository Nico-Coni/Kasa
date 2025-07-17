import mountain from '../../assets/Image_banner_valley.svg';
import '../../styles/About.css';
import { Collapsible } from '../commun/Collapsible';
import data from '../../data/data.JSON';

export function About() {
    const aboutData = data.About;
    return <div className='about-container'>
        <div className="about-header">
            <img src={mountain} alt="Mountain Banner" className="banner-image" />
        </div>
        <div className="about-content">
            {aboutData.map((item) => (
                <Collapsible key={item.id} summary={item.title}>
                    <p className="about-text">{item.content}</p>
                </Collapsible>
            ))}
        </div>
    </div>
}