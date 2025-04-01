import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Props} from "./props.ts";
import {Intro} from './intro.tsx'
import {Hobby1} from "./hobby1.tsx"

export default function App() {

    const newNames: Props = {
        name1: "Catherine",
        name2: "Matthew"
    }

    return (
        <>
        <Intro names={newNames} />
            <Hobby1 />
        </>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
