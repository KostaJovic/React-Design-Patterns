import { Person } from "../../types/types"

export const UserInfo = ({ user } : { user?: Person}) => {
    if (user === undefined) return;
    const { name, age, hairColor, hobbies } = user;

    return (
        <>
            <h3>{ name }</h3>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <ul>
                {hobbies.map(( hobby, index) => <li key={ hobby + index }>{ hobby }</li>)}
            </ul>
        </>
    )
}