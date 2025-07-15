import logoFooter from '../../assets/Logo_footer.svg';
import '../../styles/Footer.css';

export function Footer() {
    return (
        <div className="footer">
            <img src={logoFooter} alt="Kasa--Logo" />
            <p className="footerText">&copy; 2020 Kasa. All rights reserved.</p>
        </div>
    );
}