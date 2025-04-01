import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Props} from "./props.ts";
import {Title} from "./title.tsx"
import {Intro} from './intro.tsx'
import {Hobby1} from "./hobby1.tsx"
import {Hobby2} from "./hobby2.tsx"

export default function App() {

    const newNames: Props = {
        name1: "Catherine",
        name2: "Matthew"
    }

    return (
        <>
            <Title />
            <Intro names={newNames} />
            <Hobby1 />
            <Hobby2 />
        </>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
