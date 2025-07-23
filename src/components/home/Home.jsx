import Sea from '../../assets/Image_banner_sea.svg'
import { RentalList } from './RentalList.jsx';
import '../../styles/Home.sass'

export function Home() {
    return <div className='home-container'>
        <div className="img-banner">
            <img src={Sea} alt="Vue sur une côte" />
            <div className="overlay">
                <h1 className='overlay-text'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
        <RentalList />
    </div>
}