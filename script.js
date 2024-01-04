import Toast from "./Toast.js"

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: " Gud Job ",
    position: "top-center",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})
