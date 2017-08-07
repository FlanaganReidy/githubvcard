let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/flanaganreidy");
request.addEventListener('load', populatePage);
request.send();

function populatePage() {
  let person = JSON.parse(this.responseText);
  let thebasics = `
  <div class = "theBasics">
  <h2>The Basics</h2>
  <dl class = "me">
  <dt>Name:</dt> <dd>${person.name}</dd>
  <dt>Username:</dt> <dd>${person.login}</dd>
  <dt>Email:</dt> <dd>reidy.pf@gmail.com</dd>
  <dt>Company:</dt> <dd>${person.company}</dd>
  <dt>Website:</dt> <dd><a href = '${person.html_url}'>${person.html_url}</a></dd>
  </dl>
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
