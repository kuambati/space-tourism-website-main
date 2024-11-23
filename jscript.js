function togglenav() {
  const nav1 = document.querySelector(".navigation-container");
  const tog = document.querySelector(".toggle-mobile-nav");
  const hamburg = tog.querySelector("svg");

  const visible = nav1.getAttribute("data-visible");
  if (visible === "false") {
    nav1.setAttribute("data-visible", true);
    tog.setAttribute("aria-expanded", true);
    hamburg.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>`;
  } else if (visible === "true") {
    nav1.setAttribute("data-visible", false);
    tog.setAttribute("aria-expanded", false);

    hamburg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>`;
  }
}

function backHome() {
  // const homeBtn = document.querySelector(".logo-btn");
  window.open("C:UsersDELLDownloadsspace-tourism-website-mainindex.html");
}
