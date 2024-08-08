import {HeadlineProp, PersonProps} from "./types/types.ts";


export default function Person({name, description, age, callback} : PersonProps) {

    return <>
        <Headline name={name}/>
        <p>{description}</p>
        <p>Alter: {age}</p>
        <button onClick={callback}>Say Hello</button>
    </>
}

function Headline(props: HeadlineProp) {
    return <h2>{props.name}</h2>
}
