const f = document.forms[0];
let tr = document.querySelector("#table tr");
let t = tr.parentElement;
let cardVisual = document.querySelector(".card-visual")


f.addEventListener("submit", (e) => {
  e.preventDefault();
  let dataobject = {};

  const formData = new FormData(f);
  const system = formData.get('system');
  const company = formData.get('company');
  const images = f.querySelector(`input[type="radio"][name="system"][value="${system}"]`).dataset.image;
  const images2 = f.querySelector(`input[type="radio"][name="company"][value="${company}"]`).dataset.logo;


  for (let i = 0; i < f.elements.length; i++) {
    let tag = f[i];
    if (tag.name) {
      if (tag.type === "radio" && tag.checked) {
        dataobject[tag.name] = tag.value;
      } else if (tag.type !== "radio") {
        dataobject[tag.name] = tag.value;
      }
    }
  }

  cardVisual.innerHTML = `
  <div><img src="${images2}" alt="" width="120px" height="28px"></div>
  <div>${dataobject.numbers}</div>
  <div>${dataobject.user}</div>
  <div>${dataobject.validity}</div>
  <div><img src="${images}" alt="" width="100px" height="30px"></div>
  `

  console.log(dataobject);
  let html = "<tr>";
  html += `<td><img src="${images2}" alt="" width="120px" height="27px"></td>`;
  html += `<td>${dataobject.user || ""}</td>`;
  html += `<td>${dataobject.numbers || ""}</td>`;
  html += `<td>${dataobject.validity || ""}</td>`;
  html += `<td><img src="${images}" alt="" width="100px" height="30px"></td>`;
  html += "</tr>"
  t.innerHTML += html;
})
