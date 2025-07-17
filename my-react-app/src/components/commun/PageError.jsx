import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import '../../styles/PageError.css';

export function PageError() {
    const error = useRouteError()
    console.error(error)
    return <div className="page-error">
        <Banner />
        <div className="error-content">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="link-error">
                Retourner sur la page d'accueil
            </Link>
        </div>
        <Footer />
    </div>
}