document.querySelectorAll("table").forEach((e) => {
e.classList.add("table", "table-bordered");
});


  document.documentElement.dataset.bsTheme = "dark";

  // Wrapper .container (idempotent, sans innerHTML)
  const body = document.body;
  const first = body.firstElementChild;
  const alreadyWrapped = first && first.classList.contains("container");
  if (!alreadyWrapped) {
    const container = document.createElement("div");
    container.className = "container";
    while (body.firstChild) container.appendChild(body.firstChild);
    body.appendChild(container);
  }

  
