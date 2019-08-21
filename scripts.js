function load() {
  let message = document.querySelector("div.message");
  let image = document.querySelector("img.image");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 12) {
    message.innerHTML = `Good Morning - `;
    message.innerHTML += `It is ${hour}:${minute}`;
    image.src = "morning.jpeg";
    document.body.style.background = "#e2cd9f";
  } else if (hour < 18) {
    message.innerHTML = `Good Afternoon - `;
    message.innerHTML += `It is ${hour}:${minute}`;
    image.src = "afternoon.jpeg";
    document.body.style.background = "#b9846f";
  } else {
    message.innerHTML = `Good Night - `;
    message.innerHTML += `It is ${hour}:${minute}`;
    image.src = "night.jpeg";
    document.body.style.background = "#515154";
  }
}
