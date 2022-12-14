const { displayMyHowdies } = require("./model/my-howdies.js");
const { displayHowdies } = require("./model/howdies.js");
const { validate, sanitise } = require("./cleaned");

// Error message object
const errorMsg = {
  email: "Please enter your email",
  password: "Please enter a password",
  username: "Please enter your username",
};

function checkForErrors(input) {
  let errors = {};
  const keys = Object.keys(input);

  // iterate over object
  keys.forEach((key, index) => {
    if (!input[key]) {
      errors[key] = errorMsg[key];
    }
  });

  return errors;
}

// Signup Html
function signUpHtml(
  session,
  error = {},
  formInputs = { username: "", email: "" }
) {
  const navBar = NavBar(session);
  const title = "Sign up to Howdie";

  content = /*html*/ `
    <div class="signup_container">
    <h2>${title}</h2>
    <form method="POST">
    <div>
    <label for="username">Username: </label>
        <input id="username" name="username" type="text" value=${
          formInputs.username
        }>
        <p>${validate(error.username)}</p>
        
        </div>
        <div>
        <label for="email">Email: </label>
        <input id="email" name="email" type="email" value=${formInputs.email}>
        <p>${validate(error.email)}</p>
        </div>
        <div>
        <label for="password">Password:</label>
        <input id="password" name="password" type="password">
        <p>${validate(error.password)}</p>
        </div>
        <div class="signup-btn"> 
        <button type="submit">Signup</button>
        </div>
    </form>
    </div>
    `;
  return Layout({ title, content, navBar });
}

function Layout({ title, content, navBar }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel ="stylesheet" href="../styles.css">
          <meta charset="UTF-8">
          <title>${title}</title>
        </head>
        <body>
        <header>
        ${navBar}
        </header>
        <main>
        ${content}
        </main>
        ${Footer()}
        </body>
      </html>
    `;
}

//TODO NavBar to display correct button navigation to other pages
function NavBar(session) {
  const userId = session?.user_id;
  const loggedIn = /*html*/ `
  <h1>Howdie</h1>
  <nav>
    <ul>
    <div class="left-loggedin">
      <li><a href="/">Home</a></li>
      <li><a href="/my-howdies/${userId}">Profile</a></li>
      </div>
      <li class="right-loggedin"><form method='POST' action="/log-out"><button>Log out</button></form></li>

    </ul>
  </nav>
  `;

  const loggedOut = /*html*/ `
  <h1>Howdie</h1>
  <nav>
    <ul>
      <li class="left-loggedout"><a href="/">Home</a></li>
  
      <div class="right-loggedout">
      <li><a href="/sign-up">Sign Up</a></li>
      <li><a href="/log-in">Log In</a></li>
      </div>
    </ul>
  </nav>
  `;

  return session ? loggedIn : loggedOut;
}

function HomePage(session) {
  const navBar = NavBar(session);
  const howdies = displayHowdies();

  const title = "Howdies";
  const posts = /*html*/ `
  <div class="home-container">${howdies
    .map((howdie) => {
      return /*html*/ `
    <div class="card">
      
      <h3 class="title">${howdie.title}</h3>
      
      <img src="${howdie.image_src}" >
      <h4>${howdie.username}</h4>
      <p class="content">${howdie.content}</p>
      <p class="content">${new Date(howdie.created_at).toLocaleString()}</p>

    </div>
    `;
    })
    .reverse()
    .join("")}
    </div>
  `;

  const content = posts;

  return Layout({ title, content, navBar });
}

// Signup Html

// function NavBarLogout() {
//   return /*html*/ `
//     <h1>My Howdies</h1>
//     <nav>
//     <form method='POST' action="/log-out"><button>Log out</button></form>
//     </nav>
//     `;
// }

// Sign in Html

function signInHtml(session, error = {}, formInputs = { email: "" }) {
  const navBar = NavBar(session);
  const title = "Sign In";
  const form = /*html */ `
    <div class="signin-container">
    <h2>${title}</h2>
    <form method="POST">
        <div>
        <label for="email">Your email</label>
        <input id="email" name="email" type="email" value=${formInputs.email}>
        <p>${validate(error.email)}</p>
        </div>
        <div>
        <label for="password">Your password</label>
        <input id="password" name="password" type="password">
        <p>${validate(error.password)}</p>
        </div>
        <div class="signin-btn">
        <button type="submit">Login</button>
        </div>
    </form>
    </div>`;
  const content = form;
  return Layout({ title, content, navBar });
}

function failedAttempt(title) {
  const content = /*html */ `

  <div class="failed-attempt">
  <h2>${title}</h2>
    <div>Please 
    <a href="/sign-up">SignUp</a>
     or 
     <a href="/log-in">LogIn</a>
     </div>
     </div>`;
  return Layout({ title, content, navBar: "" });
}

function myHowdiesHtml(
  user_id,
  session,
  error = {},
  formInputs = { title: "", content: "" }
) {
  const navBar = NavBar(session);

  const title = "My Howdies Page";
  const form = /*html */ `
    <div class="myhowdies-form">
    <h2>${title}</h2>
    <form method="POST" enctype="multipart/form-data">
      <div>
      <label for="title">How to</label>
      <input type="text" name="title" id="title" value=${formInputs.title}>
      <p>${validate(error.title)}</p>
      </div>
      
      <div class="text_area">
        <label for="content">Instructions</label>
        <textarea name="content" id="content" cols="30" rows="10">${
          formInputs.content
        }</textarea>
        <p>${validate(error.content)}</p>
       </div>
       <div>
      <label for="image">Upload an image</label>
      <input type="file" id="image" name="image">
      <p>${validate(error.image)}</p>
    </div>
    <div class="post-btn">
      <button type="submit">Post</button>
    </div>
    </form>
  </div>
    `;

  const myHowdies = displayMyHowdies(user_id);
  const myHowdiesHtml =
    /*html*/
    `<div class="myhowdy-container">${myHowdies
      .map((myhowdy) => {
        return /*html*/ `
      <div class="card">
      
      <h3 class="title">${myhowdy.title}</h3>
      
      <img src="${myhowdy.image_src}" >
      <p class="content">${myhowdy.content}</p>
      <p class="content">${new Date(myhowdy.created_at).toLocaleString()}</p>
    </div>
      `;
      })
      .reverse()
      .join("")}</div>`;

  const content = form + myHowdiesHtml;

  return Layout({ title, content, navBar });
}

function Footer() {
  return /*html*/ `
    <footer>
    <p>Howdie &#169; 2022</p>
    </footer>
  `;
}

// Export
module.exports = {
  HomePage,
  signUpHtml,
  signInHtml,
  failedAttempt,
  myHowdiesHtml,
  NavBar,
  checkForErrors,
};
