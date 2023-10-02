fetch(`http://www.omdbapi.com/?s=batman&apikey=e0414938`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.error("An error occurred:", error);
  });
