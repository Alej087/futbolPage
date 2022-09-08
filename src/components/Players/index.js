import styles from "./players.module.css";

export default function Players() {
    return (
        <div>
            <div>
                <table className={styles.table}>
                    <thead className={styles.titleTable}>
                        <th>Player Name</th>
                        <th>Team Name</th>
                        <th>Ranking</th>
                        <th>Q Games Played</th>
                        <th>Q Goals</th>
                    </thead>
                    <tbody>
                        <td className={styles.name}>David González</td>
                        <td>Aguilas</td>
                        <td>1°</td>
                        <td>10</td>
                        <td>30</td>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
