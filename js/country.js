


const countryDiv = () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))

}

const displayCountry = (country) =>{
    country.forEach(element => {
        // console.log(element);
        const divContainer = document.getElementById('div-container');
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        
        <div class="col">
              <div class="card">
                <img src="${element.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.name.common}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
        
        `
        divContainer.appendChild(div);
        
    });

    
}
/* const filters = () =>{
    // https://restcountries.com/v3.1/subregion/europe
    fetch(`https://restcountries.com/v3.1/subregion/${countryDiv} `)
    .then(res => res.json())
    .then(data => console.log(data))
    
}
 */
const filtersing = () =>{
    const button = document.getElementById('search');
    countryDiv(button)
    
} 
const showCountry = countrys =>{
    const url = `https://restcountries.com/v3.1/subregion/${countrys} `
    fetch(url)
    .then(res => res.json())
    .then(data => filters(data))
}

const filters = find=>{
    const searchButton = document.getElementById("filter-container")
    const ul  = document.createElement('ul')
    console.log(find.name.common);
    
    ul.innerHTML =`
    <li><a>  hi aiasdflkjasdf ${find} </a></li>
    
    `

    searchButton.appendChild(ul)
}



countryDiv('');