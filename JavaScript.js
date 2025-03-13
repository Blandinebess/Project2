const dresses = [
  "Ball Gown",
  "Floral Purple Dress",
  "Mermaid",
  "wedding",
  "Modern dark-brown Gown",
];
const dressList = document.getElementById("collection");

dresses.forEach((dress) => {
  const dressItem = document.createElement("li");
  dressItem.textContent = dress;
  dressList.appendChild(dressItem);
});
