function scrollLeft(playlistId) {
    const playlist = document.getElementById(playlistId);
    const ul = playlist.querySelector('ul');
    ul.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(playlistId) {
    const playlist = document.getElementById(playlistId);
    const ul = playlist.querySelector('ul');
    ul.scrollBy({ left: 300, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const playlists = {
        physics: [
            { title: 'Vectors', src: 'videos/vectors.mp4' },
            { title: 'Dopplers Effect', src: 'videos/doppler.mp4' },
            { title: 'Torque', src: 'videos/torque.mp4' }
        ],
        math: [
            { title: 'Math Introduction', src: 'videos/math.mp4' },
            { title: 'Circles', src: 'videos/circle.mp4' },
            { title: 'Locus', src: 'videos/locus.mp4' }
        ],
        chemistry: [
            { title: 'Solid State', src: 'videos/solidstate.mp4' },
            { title: 'Electronegativity', src: 'videos/electronegativity.mp4' },
            { title: 'Periodic Trends', src: 'videos/periodic.mp4' }
        ],
    };

    for (let subject in playlists) {
        let playlistElement = document.getElementById(subject).querySelector('ul');
        playlists[subject].forEach(video => {
            let li = document.createElement('li');
            li.innerHTML = `
                <h4>${video.title}</h4>
                <video controls>
                    <source src="${video.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            playlistElement.appendChild(li);
        });
    }
});
