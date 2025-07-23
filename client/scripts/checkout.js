document.getElementById("checkout-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  // Optionally post to backend order endpoint
  localStorage.removeItem("cart");
  this.style.display = "none";
  document.getElementById("thank-you").style.display = "block";
});
