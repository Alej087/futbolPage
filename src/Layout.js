import { Link, Outlet } from "react-router-dom";
import styles from "./app.module.css";

export default function Layout() {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.navbarLink}>
                    Home
                </Link>
            </nav>
            <nav className={styles.navbar}>
                <Link to="/games" className={styles.navbarLink}>
                    Games
                </Link>
                <Link to="/ranking" className={styles.navbarLink}>
                    Ranking
                </Link>
                <Link to="/players" className={styles.navbarLink}>
                    Players
                </Link>
            </nav>
            <Outlet />
        </div>
    );
}
