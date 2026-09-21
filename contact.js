const confirmation = document.querySelector("#form-confirmation");

if (confirmation && new URLSearchParams(window.location.search).has("sent")) {
  confirmation.hidden = false;
}
