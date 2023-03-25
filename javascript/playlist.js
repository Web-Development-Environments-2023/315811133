const video = document.querySelector("iframe");

const songs = [{name: "Ice Bear's Rap", link:'UBk0zFkT55Y'}, {name: 'Bear Facts Rap', link:'a4KDSJHb5KY'}, {name: 'Baby Bear Rap', link: 'JZJh-m9pYSI'},
{name: 'Play It smooth', link:'UcEnkH8-eh8'}, 
{name: 'Pigeons', link:'1sVhBLAlf5Y'}, {name: 'The Road Song', link:'BsUcF28Nz1w'},
{name: 'Disco Dance Party', link:'nbirEpp0x74'},{name: 'The Science Project Song', link:'SvzHoSyj3gg'}
,{name: 'Yummy Yummy', link:'RmKgBNqVUzI'}
,{name: 'Chloe & Ice Bear Duet', link:'1CYGHQbdmkY'}];

const playlist = document.querySelector('.playlist-songs');


songs.forEach((song) => {
    let li = document.createElement('li');
    li.dataset.link = song.link;
    li.innerText = song.name;
    li.addEventListener('click', () => {
        video.src = "https://www.youtube.com/embed/" + li.dataset.link;
    })
    playlist.appendChild(li);
});

