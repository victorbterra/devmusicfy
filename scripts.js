document.addEventListener('DOMContentLoaded', () => {
    const artists = [
      {
        name: "Luna Velázquez",
        image: "https://picsum.photos/id/1/300/300",
      },
      {
        name: "Akira Tanaka",
        image: "https://picsum.photos/id/15/300/300",
      },
      {
        name: "Zoe Freeman",
        image: "https://picsum.photos/id/22/300/300",
      },
      {
        name: "Omar Al-Farsi",
        image: "https://picsum.photos/id/37/300/300",
      },
      {
        name: "Ava Kowalski",
        image: "https://picsum.photos/id/43/300/300",
      },
      {
        name: "Diego Montero",
        image: "https://picsum.photos/id/58/300/300",
      },
      {
        name: "Yuki Chen",
        image: "https://picsum.photos/id/65/300/300",
      },
      {
        name: "Aisha Okafor",
        image: "https://picsum.photos/id/77/300/300",
      },
      {
        name: "Leo Dubois",
        image: "https://picsum.photos/id/88/300/300",
      },
      {
        name: "Mia Larsson",
        image: "https://picsum.photos/id/94/300/300",
      },
    ];
    
    const albums = [
      {
        name: "Midnight Echoes",
        artist: "Luna Velázquez",
        cover: "https://picsum.photos/id/1025/300/300",
      },
      {
        name: "Sakura Dreams",
        artist: "Akira Tanaka",
        cover: "https://picsum.photos/id/1040/300/300",
      },
      {
        name: "Electric Horizons",
        artist: "Zoe Freeman",
        cover: "https://picsum.photos/id/1055/300/300",
      },
      {
        name: "Desert Whispers",
        artist: "Omar Al-Farsi",
        cover: "https://picsum.photos/id/1070/300/300",
      },
      {
        name: "Neon Skies",
        artist: "Ava Kowalski",
        cover: "https://picsum.photos/id/1080/300/300",
      },
      {
        name: "Flamenco Fusion",
        artist: "Diego Montero",
        cover: "https://picsum.photos/id/1084/300/300",
      },
      {
        name: "Bamboo Rhythms",
        artist: "Yuki Chen",
        cover: "https://picsum.photos/id/110/300/300",
      },
      {
        name: "Savanna Beats",
        artist: "Aisha Okafor",
        cover: "https://picsum.photos/id/1082/300/300",
      },
      {
        name: "Parisian Nights",
        artist: "Leo Dubois",
        cover: "https://picsum.photos/id/1069/300/300",
      },
      {
        name: "Nordic Legends",
        artist: "Mia Larsson",
        cover: "https://picsum.photos/id/1054/300/300",
      },
    ];

    const artistsGrid =  document.querySelector('.artists-grid');
    const albumsGrid =  document.querySelector('.albums-grid');

    artists.forEach(artist => {
      const artistItem = document.createElement('div');
      artistItem.classList.add('artist-item');
      artistItem.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artista</p>
      `;
      artistsGrid.appendChild(artistItem);
    });

    albums.forEach(album => {
      const albumItem = document.createElement('div');
      albumItem.classList.add('album-item');
      albumItem.innerHTML = `
        <img src="${album.cover}" alt="${album.name}">
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      `;
      albumsGrid.appendChild(albumItem);
    });
});
