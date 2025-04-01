import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Props} from "./props.ts";
import {Intro} from './intro.tsx'

export default function App() {

    const newNames: Props = {
        name1: "Catherine",
        name2: "Matthew"
    }

    return (
        <>
        <Intro names={newNames} />/
        </>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
