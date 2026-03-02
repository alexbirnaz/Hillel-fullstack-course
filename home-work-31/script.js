// Weather API
const weatherBtn = document.getElementById("weatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

weatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return;

  const apiKey = "5d066958a60d315387d9492393935c19";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (response.status === 404) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      weatherResult.innerHTML = `
        <div class="weather-info">
          <h3>${data.name}</h3>
          <img src="${iconUrl}" alt="weather icon">
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
          <p><strong>Description:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
          <p><strong>Wind Direction:</strong> ${data.wind.deg}°</p>
        </div>
      `;
    })
    .catch((error) => {
      weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
    });
});

// Posts API
const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postResult = document.getElementById("postResult");
const commentsResult = document.getElementById("commentsResult");

postBtn.addEventListener("click", () => {
  const postId = postInput.value;

  if (postId < 1 || postId > 100) {
    postResult.innerHTML = '<p class="error">ID must be between 1 and 100</p>';
    commentsResult.innerHTML = "";
    return;
  }

  commentsResult.innerHTML = "";

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Post not found");
      }
      return response.json();
    })
    .then((post) => {
      postResult.innerHTML = `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button id="commentsBtn">Get Comments</button>
        </div>
      `;

      document.getElementById("commentsBtn").addEventListener("click", () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => response.json())
          .then((comments) => {
            commentsResult.innerHTML = comments
              .map(
                (comment) => `
              <div class="comment">
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
              </div>
            `,
              )
              .join("");
          })
          .catch((error) => {
            commentsResult.innerHTML = `<p class="error">${error.message}</p>`;
          });
      });
    })
    .catch((error) => {
      postResult.innerHTML = `<p class="error">${error.message}</p>`;
    });
});
