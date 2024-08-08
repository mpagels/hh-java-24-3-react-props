import './App.css'
import Person from "./components/Person.tsx";

const persons = [
    {
        name: "Martin",
        description: "Martin is a teacher",
        age: 37,
    },
    {
        name: "Marcell",
        description: "Marcell is a coach",
        age: 37,
    },
    {
        name: "Robert",
        description: "Robert is a student",
        age: 27,
    },
];




function App() {

    function sayhello() {
        console.log("Hello World")
    }

  return persons.map(person => <Person key={person.name} name={person.name} description={person.description} age={person.age} callback={sayhello}/>)
}

export default App;




