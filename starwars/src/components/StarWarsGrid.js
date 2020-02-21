import React, { useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                setPeople(response.data.results);
            })
            .catch(error => {
                console.log("Error Found", error);
            })
    }, []);

    //console.log(people.name)

    return (
        <div>
            {people.map((person, index) =>{
                return(
                    <StarWarsCard
                        key={index}
                        name={person.name}
                        gender={person.gender}
                        birth_year={person.birth_year}
                    />
                )
            })}
        </div>
    )
}
