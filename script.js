function clickM() {
  const Title = document.getElementById("title").value;
  const Year = document.getElementById("year").value;
  fetch(`http://www.omdbapi.com/?s=${Title}&y=${Year}&apikey=e0414938`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.Search.map((data) => {
        const dv = document.createElement("div");
        dv.innerHTML = `
       <h2 id="title">${data.Title}</h2>
        <p id="year">${data.Year}</p>
        <img src="${data.Poster}" alt="" id="img" />
      `;

        const con = document.querySelector(".movie-list");
        con.appendChild(dv);
      });
      // document.getElementById("img").src = data["Search"][1].Poster;
      // document.getElementById("year").innerHTML = data["Search"][1].Year;
    })

    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
