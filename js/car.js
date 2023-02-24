

const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];

  const divContainer = document.getElementById('div-container');

  const div = document.createElement('div');
  div.classList.add('col');

  div.innerHTML = `
  
  <div class="card p-2">
  <img src="${data[0].imageURL}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
      <h5 class="card-title"> ${data[0].name} </h5>
      <p class="card-text">${data[0].description}</p>
      <button class="btn btn-primary border-0"> Car Price: ${data[0].price} </button>
  </div>
</div>

  `
  divContainer.appendChild(div);


//   part -2
  const div2 = document.createElement('div');
  div2.classList.add('col');

  div2.innerHTML = `

  <div class="card p-2">
  <img src="${data[1].imageURL}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
      <h5 class="card-title"> ${data[1].name} </h5>
      <p class="card-text">${data[1].description}</p>
      <button class="btn btn-primary border-0"> Car Price: ${data[1].price} </button>
  </div>
</div>

  `
  divContainer.appendChild(div2);