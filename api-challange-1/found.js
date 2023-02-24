

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

//   Person Title Name 
const founds = document.getElementById('found-person');
 const h1 = document.createElement('h1');
 h1.innerHTML = `
 <h1  class="fw-bold text-success text-center mx-auto mt-5">${person.message} </h1>
 `;
 founds.appendChild(h1);


//  get person 1

const person1 = document.getElementById('div-container')
  const div = document.createElement('div');
//   console.log(person.result[0].name);

  div.innerHTML = `

                <div id="card-header" class="card-footer">
                 Person Name : ${person.result[0].name.common}
                </div>
                <ul id="person1" class="list-group list-group-flush">
                  <li class="list-group-item">Age: ${person.result[0].age}</li>
                  <li class="list-group-item">Street: ${person.result[0].address.street}, House No: ${person.result[0].address.house}</li>
                  
                </ul>
              
  ` ;

  person1.appendChild(div);

//  get  person 2
const person2 = document.getElementById('div-container2')
  const div2 = document.createElement('div');
  div2.innerHTML = `

                <div id="card-header" class="card-footer">
                 Person Name : ${person.result[1].name.common}
                </div>
                <ul id="person1" class="list-group list-group-flush">
                  <li class="list-group-item">Age: ${person.result[1].age}</li>
                  <li class="list-group-item">Street: ${person.result[1].address.street}, House No: ${person.result[1].address.house}</li>
                  
                </ul>
              
  ` ;
  person2.appendChild(div2);