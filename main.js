let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/flanaganreidy");
request.addEventListener('load', populatePage);
request.send();

function populatePage() {
  let person = JSON.parse(this.responseText);
  let thebasics = `
  <div class = "theBasics">
  <h2>The Basics</h2>
  <p>Name: ${person.name}
  <br>Username : ${person.login}
  <br>Email: reidy.pf@gmail.com
  <br>Company: ${person.company}
  <br>Website: <a href = '${person.html_url}'>${person.html_url}</a>
  </p>

  </div>
  <div class = "bio">
  <h2>The Story</h2>
  <p>${person.bio}</p>
  </div>

  <img src =${person.avatar_url}>
  `
  let section1 = document.querySelector('.section');
  section1.innerHTML = thebasics;

  let titleCard = `
  <h1> ${person.name}</h1>`


  let title = document.querySelector('.titleCard');
  title.innerHTML = titleCard;

}
