const { displayMyHowdies } = require("./model/my-howdies.js");
const { displayHowdies } = require("./model/howdies.js");
// Signup Html

function signUpHtml(session) {
  const navBar = NavBar(session)
  const title = "Sign up to Howdie";
  content = /*html*/ `
    <div class="form_container">
    <h1>${title}</h1>
    <form method="POST">
    <label for="username">Username: </label>
        <input id="username" name="username" type="text">
        <label for="email">Email: </label>
        <input id="email" name="email" type="email">
        <label for="password">Password:</label>
        <input id="password" name="password" type="password">
        <button type="submit">Signup</button>
    </form>
    </div>
    `;
  return Layout({ title, content, navBar});
}

function Layout({ title, content, navBar }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel ="stylesheet" href ="../style.css">
          <meta charset="UTF-8">
          <title>${title}</title>
        </head>
        <body>
        <div>
        ${navBar}
        ${content}
        </div>
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
      <li><a href="/">Home</a></li>
      <li><a href="/my-howdies/:${userId}">Profile</a></li>
      <li><form method='POST' action="/log-out"><button>Log out</button></form></li>
    </ul>
  </nav>
  `;

  const loggedOut = /*html*/ `
  <h1>Howdie</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/sign-up">Sign Up</a></li>
      <li><a href="/log-in">Log In</a></li>
    </ul>
  </nav>
  `;

  return session ? loggedIn : loggedOut;
}

// function NavBarLogout() {
//   return /*html*/ `
//     <h1>My Howdies</h1>
//     <nav>
//     <form method='POST' action="/log-out"><button>Log out</button></form>
//     </nav>
//     `;
// }

function HomePage(session) {
  const navBar = NavBar(session);
  const howdies = displayHowdies();

  const title = "Howdies";
  const posts = howdies
    .map((howdie) => {
      return /*html*/ `
    <div class="display-howdie">
      <h3>${howdie.username}</h3>
      <p>${howdie.title}</p>
      <p>${howdie.content}</p>
      <img src="${howdie.image_src}" >
    </div>
    `;
    })
    .reverse()
    .join("");

  const content = posts;

  return Layout({ title, content, navBar });
}

// Sign in Html

function signInHtml(session) {
  const navBar = NavBar(session)
  const title = "Sign In";
  const form = /* */ `
    <div class="form_container">
    <h1>${title}</h1>
    <form method="POST">
        <label for="email">Your email</label>
        <input id="email" name="email" type="email">
        <label for="password">Your password</label>
        <input id="password" name="password" type="password">
        <button type="submit">Login</button>
    </form>
    </div>`;
  const content = form;
  return Layout({ title, content, navBar });
}

function signUpFailed(title) {
  const content = `
  <h2>${title}</h2>
    <p>Please 
    <a href="/sign-up">sign up</a>
     or 
     <a href="/log-in">log in</a>
     </p>`;
  return Layout({ title, content, navBar: "" });
}


function myHowdiesHtml(user_id, session) {
  const navBar = NavBar(session);
  const title = "My Howdies Page";
  const form = /*html */ `
    <div class="howdies-form">
    <h1>${title}</h1>
    <form method="POST" enctype="multipart/form-data">
      <label for="title">How to</label>
      <input type="text" name="title" id="title">
      <label for="content">Instructions</label>
      <textarea name="content" id="content" cols="30" rows="10"></textarea>
      <label for="image">Upload an image</label>
      <input type="file" id="image" name="image">
      <button type="submit">Post</button>
    </form>
  </div>
    `;

  const myHowdies = displayMyHowdies(user_id)
    ? displayMyHowdies(user_id)
    : [
        {
          title: "test",
          content: "test",
          image_src: "/nothing",
          created_at: "never",
        },
      ];
  const myHowdiesHtml = myHowdies
    .map((myHowdy) => {
      return /*html*/ `
      <div>
      <h2>${myHowdy.title}</h2>
      <p>${myHowdy.content}</p>
      <img src="${myHowdy.image_src}">
      <p>${myHowdy.created_at}</p>
    </div>
      `;
    })
    .reverse()
    .join("");

  const content = form + myHowdiesHtml;

  return Layout({ title, content, navBar });
}

// Export
module.exports = {
  HomePage,
  signUpHtml,
  signInHtml,
  signUpFailed,
  myHowdiesHtml,
  NavBar,
};
