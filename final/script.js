const anime = {
  "shows": [
    {
      "name": "Frieren: Beyond Journey's End",
      "main_character": "Frieren",
      "service": "Crunchyroll",
      "start_date": "2023-09-29",
      "image": "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
    },
    {
      "name": "Jujutsu Kaisen",
      "main_character": "Yuji Itadori",
      "service": "Crunchyroll",
      "start_date": "2020-10-03",
      "image": "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
    },
    {
      "name": "Bocchi the Rock!",
      "main_character": "Hitori Gotoh",
      "service": "Crunchyroll",
      "start_date": "2022-10-09",
      "image": "https://cdn.myanimelist.net/images/anime/1448/127956.jpg"
    },
    {
      "name": "Steins;Gate",
      "main_character": "Rintaro Okabe",
      "service": "Crunchyroll",
      "start_date": "2011-04-06",
      "image": "https://cdn.myanimelist.net/images/anime/1935/127974.jpg"
    },
    {
      "name": "Bakemonogatari",
      "main_character": "Koyomi Araragi",
      "service": "Crunchyroll",
      "start_date": "2009-07-03",
      "image": "https://cdn.myanimelist.net/images/anime/11/75274.jpg"
    }
  ]
};

function displayShows() {
  const container = document.getElementById("showList");

  anime.shows.forEach(show => {
    container.innerHTML += `
      <div class="show-card">
        <img src="${show.image}" alt="${show.name} cover">
        <h2>${show.name}</h2>
        <p>Main Character: ${show.main_character}</p>
        <p>Service: ${show.service}</p>
        <p>Start Date: ${show.start_date}</p>
      </div>
    `;
  });
}

function animateDiv() {
  const centerPosition = ($(window).width() - $('#animatedDiv').outerWidth()) / 2;
  $('#animatedDiv').animate({ left: centerPosition + 'px' }, 3000);
}

$(document).ready(function() {
  $('#loadButton').click(function() {
    $('#ajaxContent').load('content.txt', function(responseTxt, statusTxt, xhr) {
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});