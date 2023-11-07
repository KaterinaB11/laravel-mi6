import React from "react";
import People from "./People";
import '../../css/style.scss';
import Missions from "../missions/Missions";

export default function MainContent ({content}) {
    return (
        <main>
            <h1>Welcome to MI6</h1>
            <People/>
            <Missions/>
        </main> 
    )
}