const eng = document.querySelector("#eng");
// var lang = ["English", "Francais"];

let language = [];
if (eng) {
  eng.addEventListener("change", (e) => {
    let setLang = e.target.value;
    if (setLang == 0) language = english;
    else language = francais;

    language.map((item) => {
      const el = document.getElementById(item.id);
      if (el) el.textContent = item.text;
    });
  });
}
