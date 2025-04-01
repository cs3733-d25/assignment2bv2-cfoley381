import {Props} from "./props.ts";
import books from './assets/books.png'; // Tell webpack this JS file uses this image
import pizza from './assets/pizza.jpg'; // Tell webpack this JS file uses this image


type namesProps = {
    names: Props
}

export function Intro(props: namesProps) {
    return (
        <body>
            <h2>Hi there, our names are {props.names.name1} and {props.names.name2}!</h2>

            <div id="pizza">
                <img src={pizza} width = "640" alt = "Pizza photo" />
            </div>

            <p>Hello, my name is {props.names.name2} I am a senior RBE major. I grew up in California and have 1 brother.</p>

            <p> I absolutely love to cook and try to explore different cuisines.</p>

            <br/>

            <div id="books">
                <img src={books} width = "640" alt = "Book photo" />
            </div>

            <p>Hello, my name is {props.names.name1} I am a sophmore CS major. I grew up in MA, I have 3 sisters, and a dog.
                I went on a foreign exchange program last D-term in Konstanz, Germany.</p>

            <p> My favorite genre is fantasy, although enjoy a wide range of genres.</p>
        </body>

    )
}
