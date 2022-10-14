function validate(message) {
    if (message) {
      return `<span style="color: red">${message}</span>`;
    } else {
      return "";
    }
  }

  function sanitise(input) {
    return input.replaceAll("<", "&lt")
  }

  module.exports = { validate, sanitise }