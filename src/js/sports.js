const loadSports = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displaySports(data.sports))
    .catch(error =>  console.log(error))
}
const displaySports = (sports) =>{
    const cardContainer = document.getElementById('card-container');
    sports.slice(0,20).forEach(sport => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('max-w-sm', 'bg-white', 'rounded-lg', 'border', 'border-gray-200', 'shadow-md', 'dark:bg-black', 'dark:border-gray-700');
        cardDiv.innerHTML =`
            <a href="#">
                <img class="rounded-t-lg w-full" src="${sport.strSportThumb ? sport.strSportThumb : 'No Image Found'}" alt="NO Image Found">
            </a>
            <div class="p-5">
                <a href="#" class='flex justify-between items-center'>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${sport.strSport}</h5>
                    <img src='${sport.strSportIconGreen}'>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${sport.strSportDescription.slice(0,100)}</p>
                <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-zinc-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        `
        cardContainer.appendChild(cardDiv);
    });
    
}
loadSports();