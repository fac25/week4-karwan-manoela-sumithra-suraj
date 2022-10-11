// Signup Html
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

module.exports = { HomePage };
