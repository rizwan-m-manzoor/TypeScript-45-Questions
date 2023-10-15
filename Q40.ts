interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create album objects using the make_album() function
  const album1 = make_album('Artist 1', 'Album 1', 10);
  const album2 = make_album('Artist 2', 'Album 2');
  const album3 = make_album('Artist 3', 'Album 3', 15);
  
  // Print the album objects
  console.log(album1);
  console.log(album2);
  console.log(album3);
  