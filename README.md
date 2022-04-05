# Gelp Review API

## Overview

Hello, this is an API of a list of restaurants and associated reviews that users had posted about the food, location, and services provided by the restaurant. This application will use a react front end, rails as the backend and heroku as the deployment tool. You will find the instructions below on how to launch the project.

In the project directory, you can run:

### `npm start --prefix client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to start up rails for the backend, run:

### `rails s`

This will run your rails server on port [http://localhost:4000](http://localhost:4000).

## Feature List

- Home page

- Log in/out

- Create a new restarant vendor

- Create a new (review of restaurant) post

- Delete a review post

- Search for a restaurant and their associated reviews

## MVP

1. Log in/out of the site

2. List of all restaurants

3. Create a review for one specific restuarant 

4. List a single restuarant and their associated reviews

5. Modify or delete a review that was posted

6. Create a new restaurant listing

## Stretch Goal

7. View restaurant on a map

8. Search a restaurant based on their distance from the current user's location

9. Filter restaurants based on their average rating

## Models and Relationships

I had set up my models' relationship like this: 

``` User -< Review >- Restaurant``` 

```Restaurant >- User```

### Deploying

I had also deployed my API on Heroku. If you would like to see it in that environment, please run:

## heroku open

### Resources

https://github.com/learn-co-curriculum/project-template-react-rails-api

https://medium.com/@jvolpe721/using-the-faker-gem-ff3d58ecb2c

https://youtu.be/eDw46GYAIDQ

