import styles from "./ranking.module.css";
import teams from "../../teams.json";

export default function Ranking(params) {
    const teamsInfo = teams;
    return (
        <div>
            <div className={styles.fondoContainer}>
                <div className={styles.fondo}></div>
                <table className={styles.table}>
                    <thead className={styles.titleTable}>
                        <th>Team Name</th>
                        <th>Ranking</th>
                        <th>Q Games Played</th>
                        <th>Points</th>
                    </thead>
                    {teamsInfo.map((team) => (
                        <tbody key={team.id}>
                            <td className={styles.name}>{team.teamName}</td>
                            <td>{team.ranking}</td>
                            <td>{team.qGamesPlayed}</td>
                            <td>{team.points}</td>
                        </tbody>
                    ))}
                </table>
                <div className={styles.footer}>@CopyRights</div>
            </div>
        </div>
    );
}
