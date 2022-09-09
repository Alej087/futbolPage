import styles from "./players.module.css";
import players from "../../players.json";

export default function Players() {
    const playersInfo = players;
    return (
        <div>
            <div className={styles.fondoContainer}>
                <div className={styles.fondo}></div>
                <table className={styles.table}>
                    <thead className={styles.titleTable}>
                        <th>Player Name</th>
                        <th>Team Name</th>
                        <th>Ranking</th>
                        <th>Q Games Played</th>
                        <th>Q Goals</th>
                    </thead>
                    {playersInfo.map((player) => (
                        <tbody key={player.id}>
                            <td className={styles.name}>{player.playerName}</td>
                            <td>{player.teamName}</td>
                            <td>{player.ranking}</td>
                            <td>{player.qGamesPlayed}</td>
                            <td>{player.qGoals}</td>
                        </tbody>
                    ))}
                </table>
                <div className={styles.footer}>@CopyRights</div>
            </div>
        </div>
    );
}
