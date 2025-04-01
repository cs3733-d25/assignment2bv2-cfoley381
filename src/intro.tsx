import {Props} from "./props.ts";

type namesProps = {
    names: Props
}

export function Intro(props: namesProps) {
    return <h2>Hi there, this is {props.names.name1} and {props.names.name2}!</h2>;
}
