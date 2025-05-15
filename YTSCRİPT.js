const apiKey = "AIzaSyCGiv6Jbg4Se5DOdVk4BbAWMkIY0OK6w18";

async function searchVideos() {
  const query = document.getElementById("search").value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query)}&key=${apiKey}&type=video`;

  const res = await fetch(url);
  const data = await res.json();

  const container = document.getElementById("video-container");
  container.innerHTML = "";

  data.items.forEach(item => {
    const videoId = item.id.videoId;
    const title = item.snippet.title;
    const thumbnail = item.snippet.thumbnails.medium.url;

    const videoElement = document.createElement("div");
    videoElement.className = "video";
    videoElement.innerHTML = `
      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
        <img src="${thumbnail}" alt="${title}">
        <div class="title">${title}</div>
      </a>
    `;

    container.appendChild(videoElement);
  });
}