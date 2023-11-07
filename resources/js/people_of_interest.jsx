import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';


 
export default function PeopleOfInterest() {
    return (
        <App/>
    );
}
 
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<PeopleOfInterest />);