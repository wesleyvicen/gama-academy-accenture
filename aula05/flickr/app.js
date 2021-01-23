(function(){
    var key = 'a79dbdd1d24bbdf97f202f74ff0b63ec'
    var flickrEndPoint = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key='
    
    var SQUARE_IMG = 'q'
    function getPhotos(searchTerm) {
        var url = `${flickrEndPoint}${key}&text=${searchTerm}`

        return (
            fetch(url)
            .then(res => res.json())
            .then(data => data.photos.photo)
        )
    }

    var app = document.querySelector('#app')
    var searchForm = app.querySelector('.search-form')
    var searchTerm = app.querySelector('.search-term')
    var results = app.querySelector('.results')

function createFirckrThumb(photoData){
    var link = document.createElement('a')
    link.setAttribute('href', photoData.large)
    link.setAttribute('target', '_blank')

    var image = document.createElement('img');
    image.setAttribute('src', photoData.thumb)
    image.setAttribute('alt', photoData.title)

    link.appendChild(image)

    return link
}

searchForm.addEventListener('submit', function(e){
    e.preventDefault();

    var filter = searchTerm.value
    results.innerText = 'Pesquisar'
    getPhotos(filter)
    .then(function(result){
        results.innerText = ''
        result.forEach(function(photo){
            var urlA = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            var thumbnail = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${SQUARE_IMG}.jpg`            ;


            var item = createFirckrThumb({
                    thumb: thumbnail,
                    large: urlA,
                    title: photo.title
             });
             results.appendChild(item);
        })
    })
})
}) ();