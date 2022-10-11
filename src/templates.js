// Signup Html

function signUpHtml () {
    const title = "Sign up to Howdie"
    content = /*html*/`
    <div class="form_container">
    <h1>${title}</h1>
    <form method="POST">
        <label for="email">Your email</label>
        <input id="email" name="email" type="email">
        <label for="password">Your password</label>
        <input id="password" name="password" type="password">
        <button type="submit">Signup</button>
    </form>
    </div>
    `
    return Layout({title, content})
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

function NavBar() {
  return /*html*/ `
    <h1>Howdie</h1>
    <nav>
        <a href="/login">Sign In</a>
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

module.exports = { HomePage, signUpHtml };
