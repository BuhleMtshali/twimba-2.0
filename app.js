//function for searching from the api
let searchElement = document.getElementById('search-input');
searchElement.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
       searchApi(searchElement.value);
       searchElement.value = '';
    }
})

//the above function calls the bellow function
function searchApi(query){
    const options = {
        method: 'GET',
        params: {
          query: query,
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

function renderSearchResults(results){
    let postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = ''
    console.log(results.results)
    results.results.forEach((tweet) => {
        let  html = `   
            <p class="username">${tweet.user.name} <span class="material-icons verified">verified</span> <span class="handle-user">${tweet.user.username}
            </span></p>
            <p class="caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img src= ${tweet.media_url ? tweet.media_url[0] : ''} alt="post image">
            <div class="reactions">
            <div class="reaction-container blue-reaction">
            <i class="fa-regular fa-comment"></i>
            <p class="number">${tweet.reply_count }</p>
            </div>
            <!-- end of reaction container -->
            <div class="reaction-container green-reaction">
            <i class="fa-solid fa-retweet"></i>
            <p class="number">${tweet.retweet_count }</p>
            </div>
            <!-- end of reaction container -->
            <div class="reaction-container pink-reaction">
            <i class="fa-regular fa-heart"></i>
            <p class="number">${tweet.quoute_count}</p>
            </div>
            <!-- end of reaction container -->
            // <div class="reaction-container blue-reaction">
            // <i class="fa-solid fa-chart-simple"></i>
            // <p class="number">181k</p>
            // </div>
            <!-- end of reaction container -++->
            <div class="reaction-container blue-reaction">
            <i class="fa-regular fa-bookmark"></i>
            <p class="number">${tweet.bookmark_count}</p>
            </div>
            <!-- end of reaction container -->
            <div class="reaction-container blue-reaction">
            <i class="fa-solid fa-share-nodes"></i>
            </div>
            <!-- end of reaction container -->
            </div>
            <!-- end of reactions div -->
            </div>`;

            postContainer.innerHTML += html;
    })
    
       
        
   
}