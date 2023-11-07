import React, { useEffect, useState } from "react";
import '../../css/people.scss';
import PersonDetail from './PersonDetail';

export default function People() {
    const [people, setPeople] = useState([]);
    const [personId, setPersonId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Adjust the number of items per page as needed

    const fetchPeople = async () => {
        try {
            const response = await fetch('api/people');
            const data = await response.json();
            setPeople(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPeople();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const displayedPeople = people.slice(startIndex, endIndex);
    const totalPages = Math.ceil(people.length / itemsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    const renderPagination = () => {
        return (
            <div className="pagination">
                <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        );
    };

    return (
        <div className="people-list">
            {!personId ? (
                <>
                    <div className="people-list__top">
                        <h3>People of interest</h3>
                    </div>
                    {displayedPeople.length > 0 ? (
                        <>
                            <ol className="people-list__list">
                                {displayedPeople.map((person) => (
                                    <li key={person.id} className="people-list__person" onClick={() => setPersonId(person.id)}>
                                        <p>{person.name}</p>
                                    </li>
                                ))}
                            </ol>
                            {renderPagination()}
                        </>
                    ) : 'Loading...'
                    }
                </>
            ) : (
                <PersonDetail personId={personId} setPersonId={setPersonId} />
            )}
        </div>
    );
}