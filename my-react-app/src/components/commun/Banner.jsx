import logoBanner from '../../assets/Logo_banner.svg';
import { NavLink } from "react-router-dom";
import '../../styles/Banner.sass';

export function Banner() {
    return (
        <div className="banner">
            <img src={logoBanner} alt="Kasa--Logo" />
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
                    Accueil
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
                    A propos
                </NavLink>
            </nav>
        </div>
    )
}