// Displayed tooltips on field mouseover
document.addEventListener("mousemove" , (event) => {
    console.log((`Mouse moved to X: ${event.clientX}, Y: ${event.clientY}`));
});

const card = document.querySelector("Product-card");
card.addEventListener("Mouseover", () => {
    card.computedStyleMap.backgroundColor = "hhi7h7";
});

card.addEventListener("mouseout", () => {
    card.computedStyleMap.backgroundColor = "Tan";
});

