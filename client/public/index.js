const blockedRequestBtn = document.getElementById("blockedRequest");
const successRequestBtn = document.getElementById("successRequest");
const preflightRequestBtn = document.getElementById("preflightRequest");
const cookieRequestBtn = document.getElementById("cookieRequest");
const API = "http://localhost:3000";

const getPath = (path) => `${API}/${path}`;

blockedRequestBtn.addEventListener("click", function () {
  fetch(getPath("block"))
    .then(console.log)
    .catch(() => console.log("failed due to CORS"));
});

successRequestBtn.addEventListener("click", function () {
  fetch(getPath("unblocked"))
    .then(console.log)
    .catch(() => console.log("failed due to CORS"));
});

preflightRequestBtn.addEventListener("click", function () {
  fetch(getPath("preflight"), {
    headers: { Ping: "application/json" }, // this header should be explicitly in response
  })
    .then(console.log)
    .catch(() => console.log("failed due to CORS"));
});

cookieRequestBtn.addEventListener("click", function () {
  fetch(getPath("cookie"), {
    credentials: "include", // removing this will forbid server to use cookie associated with this page
  })
    .then(console.log)
    .catch(() => console.log("failed due to CORS"));
});
