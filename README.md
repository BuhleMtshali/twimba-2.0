# Twimba

Twimba is a simplified social media platform inspired by Twitter. Users can explore trending topics, follow accounts, and search for specific posts through a seamless interface. The app integrates with an API to fetch and display live content.

## Live Demo
Check out the live version of Twimba: [Twimba on Netlify](https://twimba-zaio.netlify.app/)


## Features
- **Home Feed:** Displays a collection of posts fetched from the API.
- **Search Functionality:** Search for specific content using keywords.
- **Trending Section:** View trending topics in South Africa.
- **Who to Follow Section:** Discover suggested accounts to follow.
- **Post Interactions:** Includes comments, retweets, likes, bookmarks, and share options for posts.
- **Responsive Design:** Adapts seamlessly to various screen sizes, ensuring optimal user experience across devices.

## Responsive Design Details
Twimba includes media queries to adapt its layout to different screen sizes:
- **Mobile (max-width: 576px):**
  - Navigation moves to the bottom of the screen and adjusts to display icons only.
  - Main content and trending sections are streamlined to fit smaller screens.
  - Reduced padding and image sizes for better accessibility on small screens.
- **Tablets (min-width: 577px and max-width: 768px):**
  - Navigation becomes vertical and shifts to the right side of the screen.
  - Trending content is hidden for a cleaner interface.
- **Laptops/Small Desktops (min-width: 769px and max-width: 1290px):**
  - Navigation adjusts to a more compact layout while maintaining functionality.
  - Larger screens accommodate additional spacing for content.
- **Large Desktops (min-width: 1290px):**
  - Full content layout is displayed, providing the most comprehensive experience.

## Tech Stack
- **HTML:** Structure of the application.
- **CSS:** Styling and layout, including responsive design with media queries.
- **JavaScript:** Core functionality, including API integration and dynamic rendering.
- **Axios:** Used to handle HTTP requests.

## API Integration
The app fetches data from the Twitter154 API using Axios. Key features include:
- Fetching top posts based on user input.
- Displaying media content like images and videos.
- Filtering results by date, retweets, likes, and language.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone [text](https://github.com/BuhleMtshali/twimba-2.0)

2. cd Twimba

3. Open the index.html file in your preferred browser to view the app

**Folder Structure**
index.html: Main HTML file for the app.
app.css: Contains styles, layout details, and responsive design rules.
app.js: Handles the app's functionality, including API integration and rendering.
assets/: Directory for images, icons, and other static resources.

**How to Use**
Open the app in your browser or visit the live demo.
Use the search bar to find posts related to specific keywords.
Interact with the trending topics and suggested accounts in the sidebar.
Refresh the page to see updated content on the home feed.


**Customization**
You can customize the API parameters in the app.js file:
**Query:** Modify the default search keyword.
**Start Date:** Adjust the date range for fetching posts.
**Limit**: Change the number of posts displayed.

**Credits**
**Icons:** Material Icons and FontAwesome.
**Fonts:** Google Fonts (Inter Tight, Poppins, and more).
**API:** Twitter154 API.

**Future Improvements**
- User authentication and profiles.
- Posting functionality for users.
- Dark mode support.
- Enhanced filtering options for search results.