import React, { useEffect, useState } from "react";

export default function StatusFilter({selectedStatus, setSelectedStatus}){

    const [statuses, setStatuses] = useState([]);

    const loadStatuses = async() => {
        try{
            const response = await fetch ('api/statuses');
            const data = await response.json();
        setStatuses(data)
    } catch (error) {
        console.log(error)
    }
    }
useEffect(() => {
    loadStatuses();
}, [])

return (
    <div className="status-filter">
        <h3>Choose the status</h3>
        {
            statuses.map(status => {
                return <button
                    key={status.id}
                    className={ 'status-filter__status' + (status.id == selectedStatus ? ' status-filter__status_selected' : '')}
                    onClick={() => setSelectedStatus(status.id)}
                >
                    { status.name }
                </button>
            })
        }
    </div>
)
}