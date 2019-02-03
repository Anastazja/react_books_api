## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
To install project you need [npm package manager](https://nodejs.org/en/download/).
In the project directory, you can install all npm packages with command
### `npm install`
after that you can run project:
### `npm start`

## About project

This project allows you to search and check description and basic information about the book.
Books data is received from Google API.

## Known problem

You might notice bug in pagination. It's not a project bug, but API.
For example:
you can go to [https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=1](https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=1)
and you'll get totalItems = 644.

But when you go to [https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=44](https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=44)
and expect to get totalItems = 600 and you'll get totalItems = 554.
(this data's are were generated in this moment, when you'll check it, they can be different).


It's because of The priority for search is to return the initial results as quickly as possible. 
As the user "pages through" to later results, more time will be spent processing them and 
totalItems will become increasing accurate.  
This is why when you specify a really high startIndex, 
it forces the search to go through the first 1000 results and it was then able 
to determine the actual count.  You will find that the search with a high startIndex will 
return more slowly than the initial requests with no or lower startIndex.

[Read more about this bug](https://productforums.google.com/forum/#!topic/books-api/Y_uEJhohJCc).

That's why it's hard to handle pagination, it'll change all the time, when we send a request. 

## Additional information's

API used [Google Books APIs](https://developers.google.com/books/docs/overview).

For grid and styles used [Semantic UI](https://semantic-ui.com/).

For code checking - [ESLint](https://www.npmjs.com/package/eslint).

For style compiling - SCSS.

[Hosting](https://flashy-base-9053.roast.io/)

Due to cdn hosting restriction, not all works expected
(ex:404 pages not working). So it's just a demo.


Author: anastasiia.rzeszow@gmail.com