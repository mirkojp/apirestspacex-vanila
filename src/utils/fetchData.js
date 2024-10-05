const API = "https://api.spacexdata.com/v5/launches";

async function fetchData(id) {
    // Check if ID exists and construct the URL correctly
    const apiURL = id ? `${API}/${id}` : API; // Add a slash before the id
    console.log('Fetching from URL:', apiURL);

    try {
        const response = await fetch(apiURL);
        
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched Data:', data);
        return data;

    } catch (error) {
        console.log('Fetch Error..!!', error);
    }
}

export default fetchData;