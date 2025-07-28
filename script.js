function revealGift() {
  const input = document.getElementById("nameInput").value.trim().toLowerCase();
  if (input === "herfullname") {
    document.getElementById("gift").style.display = "block";
  } else {
    alert("Be honest");
  }
}
