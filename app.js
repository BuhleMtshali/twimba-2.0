//function for searching from the api
let searchElement = document.getElementById('search-input');
searchElement.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
       searchApi(searchElement.value);
       searchElement.value = '';
    }
})

//the above function calls the bellow function
function searchApi(){
    const options = {
        method: 'GET',
        params: {
          query: searchElement.value,
          section: 'top',
          min_retweets: '1',
          min_likes: '1',
          limit: '5',
          start_date: '2022-01-01',
          language: 'en'
        },
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'twitter154.p.rapidapi.com'
        }
      }

      const url = 'https://twitter154.p.rapidapi.com/search/search';

      axios.get(url, options).then(response => renderSearchResults(response.data))
      .catch(error => console.error('Error fetching search results', error));
      
}

function renderSearchResults(data){
    console.log(data.results)
}