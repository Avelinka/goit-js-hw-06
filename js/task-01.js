const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

[...categoryItems].forEach((categoryItem) => {
  console.log(`Category: ${categoryItem.querySelector("h2").textContent}`);
  console.log(`Elements: ${categoryItem.querySelectorAll("li").length}`);
});
