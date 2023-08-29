const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

[...categoryItems].forEach((categoryItem) => {
  console.log(`Category: ${categoryItem.firstElementChild.textContent}`);
  console.log(`Elements: ${categoryItem.lastElementChild.children.length}`);
});
