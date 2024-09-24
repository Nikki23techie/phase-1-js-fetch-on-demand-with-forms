
const init = () => {
    const inputForm = document.querySelector("form");// queryselector targets existing node from th dom
  
    inputForm.addEventListener("submit", (event) => {// a callback is a function passed as an argument to the another funtion  
      event.preventDefault(); // prevent the default page refreshing behavior
      const input = document.querySelector("input#searchByID"); // #reprents inputs by ID

       console.log(input.value);// value is property of input to extract the value type of user 
  
  
    });
  };

  fetch("http://localhost:3000/movies") //url of the json server(GET)
        .then((response) => response.json())// json transforms the body of the response object into json notation
        .then((data) => {
          console.log(data);

    //       <li>
    //   <h3>The Brave Little Toaster</h3>
    //   <div>ID: 1</div>
    //  </li>//

       data.forEach(movie => {
        console.log(movie);
        const li = document.createElement('li');
            
        const h3 = document.createElement('h3');
        h3.innerText = movie.title
        const div = document.createElement('div');
        div.innerText = `ID: ${movie.id}` //string interpolation
        li.append(h3,div)
        const ul = document.querySelector("ul")
        ul.append(li)  
       });


    //       // LOG: (3) [{…}, {…}, {…}]
        });
  
  document.addEventListener("DOMContentLoaded", init);// init function is invoked as soon as domcontent load