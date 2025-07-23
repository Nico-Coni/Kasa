import { Outlet } from "react-router-dom";
import { Banner } from './Banner.jsx';
import { Footer } from './Footer.jsx';



export function Layout() {
    return (<>
        <header>
            <Banner />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    );
}
