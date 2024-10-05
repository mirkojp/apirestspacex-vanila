import getHash from '../utils/getHash';
import fetchData from '../utils/fetchData';

const Rocket = async() =>{

    const id = getHash();
    console.log(id)
    const rocket = await fetchData(id);
    console.log(rocket)
    console.log(id)
    const view = `
    <div class="Rockets-inner">
    <article class="Rocket-card">
        <img src="${rocket.links.patch.small}" alt="${rocket.name}">
        <h2>${rocket.name}</h2>
    </article>

    <article class="Rockets-card">
        <h3>Failures:</h3>
        <ul>
            ${rocket.failures.length > 0
            ? rocket.failures.map(failure => `<li>${failure.reason} at ${failure.time} seconds</li>`).join('')
            : '<li>No failures reported</li>'
        }
        </ul>
        <h3>Details: <span>${rocket.details}</span></h3>
        <h3>Flight Number: <span>${rocket.flight_number}</span></h3>
        <h3>Launch Date and Time: <span>${new Date(rocket.date_utc).toLocaleString()}</span></h3>
    </article>
    </div>
    `

    return view
} 

export default Rocket