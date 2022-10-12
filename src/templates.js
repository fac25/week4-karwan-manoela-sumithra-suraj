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

function NavBarLogout() {
  return /*html*/ `
    <h1>My Howdies</h1>
    <nav>
    <form method='POST' action="/log-out"><button>Log out</button></form>
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

// Test
// function getMyHowdies() {
//   const title = "My Howdies";
//   const content = NavBarLogout();

//   return Layout({ title, content });
// }

// Export
module.exports = {
  HomePage,
  signUpHtml,
  signInHtml,
  signUpFailed,
  // getMyHowdies,
};
