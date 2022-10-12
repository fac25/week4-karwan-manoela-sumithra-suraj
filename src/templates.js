const { displayMyHowdies } = require("./model/my-howdies.js")
// Signup Html

function signUpHtml() {
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
  return Layout({ title, content });
}

function Layout({ title, content }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
        <link rel ="stylesheet" href ="../style.css">
          <meta charset="UTF-8">
          <title>${title}</title>
        </head>
        <body>
        <div>${content}</div>
        </body>
      </html>
    `;
}

//TODO NavBar to display correct button navigation to other pages
function NavBar() {
  return /*html*/ `
    <h1>Howdie</h1>
    <nav>
        <a href="/log-in">Sign In</a>
        <a href="/sign-up">Sign Up</a>
    </nav>
    `;
}

function HomePage() {
  const title = "Howdie";
  const posts = /*html*/ `
  <div>User Content</div>
  `;
  const content = NavBar() + posts;

  return Layout({ title, content });
}

// Sign in Html

function signInHtml() {
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
  const content = NavBar() + form;
  return Layout({ title, content });
}

function signUpFailed() {
  const title = "Login failed";
  const form = `
    <p>Please 
    <a href="/sign-up">sign up</a>
     or 
     <a href="/log-in">log in</a>
     </p>`;
  const content = NavBar() + form;
  return Layout({ title, content });
}

function myHowdiesHtml(user_id) {
  const title = "My Howdies Page";
  const form = /*html */ `
    <div class="howdies-form">
    <h1>${title}</h1>
    <form method="POST">
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

    const myHowdies = !displayMyHowdies(user_id) ?  displayMyHowdies(user_id) : [{"title": "test", "content": "test", "image_src": "/nothing", "created_at": "never"}];
    const myHowdiesHtml = myHowdies.map(myHowdy =>{
      return /*html*/`
      <div>
      <h2>${myHowdy.title}</h2>
      <p>${myHowdy.content}</p>
      <img src=${myHowdy.image_src}>
      <p>${myHowdy.created_at}</p>
    </div>
      `
    }).reverse().join("");
    
    const content = NavBar() + form + myHowdiesHtml;

    return Layout({title, content})
}

module.exports = {
  HomePage,
  signUpHtml,
  signInHtml,
  signUpFailed,
  myHowdiesHtml,
};
