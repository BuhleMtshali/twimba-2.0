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
          limit: '20',
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


// function for rendering out search results
function renderSearchResults(results){
    let postContainer = document.getElementById('render-div');
    postContainer.innerHTML = ''
    console.log(results.results)
    results.results.forEach((tweet) => {
        let  html = `  
                    <div class="inner-render">
                    <div class="user-pic">
                    <img src=${tweet.user.profile_pic_url} alt="user profile picture">
                    </div>
                    <!-- end of user pic -->
                    <div class="photo">
                    <div class="user-infor-posts" id="postContainer">
                    <p class="username">${tweet.user.name} <span class="material-icons verified">verified</span> <span class="handle-user">${tweet.user.username}</span></p>
                    <p class="caption">${tweet.text}</p>
                    <img src="${tweet.media_url && tweet.media_url.length > 0 ? tweet.media_url[0] : ''}" alt="post image">
                    <div class="reactions">
                    <div class="reaction-container blue-reaction">
                    <i class="fa-regular fa-comment"></i>
                    <p class="number">${tweet.reply_count ? tweet.reply_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container green-reaction">
                    <i class="fa-solid fa-retweet"></i>
                    <p class="number">${tweet.retweet_count ? tweet.retweet_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container pink-reaction">
                    <i class="fa-regular fa-heart"></i>
                    <p class="number">${tweet.favorite_count ? tweet.favorite_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container blue-reaction">
                    <i class="fa-regular fa-bookmark"></i>
                    <p class="number">${tweet.bookmark_count ? tweet.bookmark_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container blue-reaction">
                    <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <!-- end of reaction container -->
                    </div>
                    <!-- end of reactions div -->
                    </div>
                    <!-- end of user-infor-posts -->
                    </div>
                    </div>
                    </div>
                    `

            postContainer.innerHTML += html;
    })
    
        
   
}


//function to refresh the feed
window.onload = refreshData;




function refreshData(){
    const options = {
        method: 'GET',
        params: {
          query: 'south africa',
          section: 'top',
          min_retweets: '1',
          min_likes: '1',
          limit: '20',
          start_date: '2022-01-01',
          language: 'en'
        },
        headers: {
          'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
          'x-rapidapi-host': 'twitter154.p.rapidapi.com'
        }
      }

      const feedUrl = 'https://twitter154.p.rapidapi.com/search/search';

      axios.get(feedUrl, options)
      .then(response => renderFeed(response.data))
      .catch(error => console.error('Error fetching search results', error));
}


//function for rendering the results
function renderFeed(feed){
    let postContainer = document.getElementById('render-div');
    postContainer.innerHTML = '';
    console.log(feed.results)
    feed.results.forEach((tweet) => {
        let  html = `  
                    <div class="inner-render">
                    <div class="user-pic">
                    <img src=${tweet.user.profile_pic_url} alt="user profile picture">
                    </div>
                    <!-- end of user pic -->
                    <div class="photo">
                    <div class="user-infor-posts" id="postContainer">
                    <p class="username">${tweet.user.name} <span class="material-icons verified">verified</span> <span class="handle-user">${tweet.user.username}</span></p>
                    <p class="caption">${tweet.text}</p>
                    <img src="${tweet.media_url && tweet.media_url.length > 0 ? tweet.media_url[0] : ''}" alt="post image">
                    <div class="reactions">
                    <div class="reaction-container blue-reaction">
                    <i class="fa-regular fa-comment"></i>
                    <p class="number">${tweet.reply_count ? tweet.reply_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container green-reaction">
                    <i class="fa-solid fa-retweet"></i>
                    <p class="number">${tweet.retweet_count ? tweet.retweet_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container pink-reaction">
                    <i class="fa-regular fa-heart"></i>
                    <p class="number">${tweet.favorite_count ? tweet.favorite_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container blue-reaction">
                    <i class="fa-regular fa-bookmark"></i>
                    <p class="number">${tweet.bookmark_count ? tweet.bookmark_count : 0}</p>
                    </div>
                    <!-- end of reaction container -->
                    <div class="reaction-container blue-reaction">
                    <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <!-- end of reaction container -->
                    </div>
                    <!-- end of reactions div -->
                    </div>
                    <!-- end of user-infor-posts -->
                    </div>
                    </div>
                    </div>
                    `

            postContainer.innerHTML += html;
    })
}