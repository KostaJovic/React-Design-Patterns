import { Person, Product } from "../../types/types"

export const PersonListItem = ({ person } : { person : Person}) => {
    const { name, age, hairColor, hobbies } = person
    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Hobbies: {hobbies.join(", ")}</p>
            <ul>
                {hobbies.map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                ))}
            </ul>
        </>
    )
}  

export const ProductListItem = ({ product } : { product : Product}) => {
    const { name, price, description, rating } = product
    return (
        <>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating} stars</p>
        </>
    );
}