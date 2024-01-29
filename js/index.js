console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  // log the fetch results
  console.log(data.results);
  // fetch the name of Luke
  console.log(data.results[0].name);
  // eye color from R2D2
  console.log("R2D2 Eye Color: " + data.results[2].eye_color);
  return data;
}

fetchData();
