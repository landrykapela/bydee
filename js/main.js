const feature = document.querySelector("#more-feature");
const featureDesc = document.querySelector("#feature-description");
const featureImg = document.querySelector("#feature-img");

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  let x = rect.left;
  let x2 = x + element.offsetWidth;
  let y = rect.top;
  let y2 = y + element.offsetHeight;
  return !(
    x >= window.innerWidth ||
    y >= window.innerHeight ||
    x2 < 0 ||
    y2 < 0
  );
};
// window.addEventListener("load", () => {
//   if (isInViewport(feature)) {
//     // featureDesc.classList.remove("hidden");
//     featureDesc.classList.add("slide_right");
//     // featureImg.classList.remove("hidden");
//     featureImg.classList.add("slide_left");
//   }
// });

window.addEventListener("scroll", () => {
  if (isInViewport(feature)) {
    featureDesc.classList.remove("slide_right");
    featureDesc.classList.add("slide_right");
    // featureImg.classList.remove("hidden");
    // featureImg.classList.add("slide_left");
  }
});
