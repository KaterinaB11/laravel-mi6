import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Missions() {
    const [missions, setMissions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Adjust as needed

    const loadMissions = async () => {
        const response = await axios.get("/api/missions");
        const data = response.data;
        setMissions(data);
    };

    useEffect(() => {
        loadMissions();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const totalPages = Math.ceil(missions.length / itemsPerPage);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <main>
            <div className="main-container">
                <h1>Your Missions</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>People</th>
                        </tr>
                    </thead>
                    <tbody>
                        {missions.slice(startIndex, endIndex).map((mission) => (
                            <tr key={mission.id}>
                                <td>{mission.name}</td>
                                <td>{mission.year}</td>
                                <td>
                                    <ul>
                                        {mission.people.map((person) => (
                                            <li key={person.id}>{person.name}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={previousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </main>
    );
}