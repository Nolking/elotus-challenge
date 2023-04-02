# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 72 hours (please no more!)

## User Stories

The following **required** functionality is completed:

- [X] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [X] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [X] Add a search bar.
- [X] User can view movie details by tapping on a cell.
- [X] User sees loading state while waiting for the API.
- [X] User sees an error message when there is a network error.
- [X] Simple responsive.

The following **optional** features are implemented:

- [X] Implement segmented control to switch between list view and grid view.
- [X] All images fade in.
- [ ] Implement lazy load image.
- [X] Customize the highlight and selection effect of the cell.
- [X] Improve UX loading by skeleton loading.
- [X] Enhance responsive.

The following **additional** features are implemented:

- [X] Add similar movie feature in movide detail page
- [X] When user clicks outside the search box, it disappears
- [X] Add 404 page for invalid url
- [X] User can return to homepage from footer
- [X] Whenever user navigate to new movie, it returns to the top page
## Notes

- Please use ReactJS with typescript
- Libraries, Frameworks, Languages used: 
- ReactJs : 17.0.2
- Typescript: 4.9.5
- SCSS
- Ant Design: 5.3.3
- Context: 3.0.5
- React-router-dom: 5.3.3


## Video Walkthrough

Here's a walkthrough of implemented user stories:

> Please record screen to a GIF file and attach link here

## Submit

**When you're done, send us back a link to a repository with your source code, with a description of what you've done and any build instructions in the readme!**

Instructions: 
- Run "npm install"
- You can start the application with "npm start" the application will run on "http://localhost:3000"
- To make API requests, API_KEY should be added to src/config/dev.ts, it will be provided through email

To build the project: 
- Run "npm run build"
- Run "npm install -g serve"
- Run "serve -s build"

> You can use this file as the readme (please update what you've done, build instructions).

## License

    Copyright [2016] [your-name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.