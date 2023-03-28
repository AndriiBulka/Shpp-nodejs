enum Buttons {
  plus = "plus",
  minus = "minus",
}

async function fetchCount(button: Buttons) {
  const res = await fetch(`http://localhost:3000/${button}`, {
    method: "POST",
  })
  const data = await res.json()
  let plus = document.getElementById("plus")
  let minus = document.getElementById("minus")
  if (button === Buttons.plus && plus) {
    plus.innerHTML = `&nbsp&nbsp&nbsp: ${data.plus}`
  }
  if (button === Buttons.minus && minus) {
    minus.innerHTML = `&nbsp&nbsp&nbsp: ${data.minus}`
  }
}
