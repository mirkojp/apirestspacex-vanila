import fetchData from '../utils/fetchData';

const Home = async () => {
    const Rockets = await fetchData();

    const view = `
    <div class="Rockets">
    ${Rockets.map(rocket => `
        <article class="Rocket-item">
            <a href="#/${rocket.id}">
                <img src="${rocket.links.patch.small}" alt="${rocket.name}">
                <h2>${rocket.name}</h2>
            </a>
        </article>
    `).join('')}
    </div>

    `

    return view
}

export default Home