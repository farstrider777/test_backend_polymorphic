###Built API for a fully functioning web site ShowRanker###

Skills practiced

1. Sequelize
  * Used Sequelize to write migrations and models.
  * Edited my models to have all the properties I wanted.
  * Wrote routes to access my tables
  * Wrote controllers that defined the behavior of my Routes.
  * Used associations to add information from other tables to specific Routes
2. Security
  * Used bcrypt to encrypt my users passwords and create a salt.
  * Used jwt-simple to create an access token for each user based on their passwords and salt.
  * Refused access on specific routes if the user didn't provide password/access token.
3. Node.js
  * Installed and ran a server in my terminal.
  * Debugged error codes and problems with connections.
4. Postman
  * Used Postman to test my routes and check my database.
5. API Documentation
  * Wrote simple and organized documentation for my API.

###API Documentation###

----
POST /users

Adds a user to Users. Info needed in the body is:

* userName: string
* email: string
* hashedPassword: string
* profilelUrl: string
* backgroundUrl: string
* firstName: string
* lastName: string
* city: string

----
POST /login

Must have correct password and email!

Returns a token and your info. Info needed in the body is:

* email: string
* hashedPassword: string

----
PUT /updateuser

Must have a valid access-token in the headers.

Uses middleware to see what user you are based your access-token. If you put any of these fields in the body their values will be updated for that user:

* profileUrl: string
* backgroundUrl: string
* firstName: string
* lastName: string
* email: string
* city: string

----
GET /users

Returns all info of all the users on the site.

---
GET /users/:id

Info needed in the url params is:

* user id: integer

Gets all the info on a specific user.

---
DELETE /users/:id

Info needed in the header is:

* user id: integer

Deletes a specific user

---
POST /usershows

Info needed in the body is:

* showName: string
* seenIt: boolean

---
GET /usershows/:id

Info needed in the url params is:

* user id: integer

Gets a specific show, will include what user posted the show as an association.

---
POST /reviews

Must send a valid access-token in the headers, i.e. be logged in. Will use middleware to select the correct user.

Info needed in the body is:

* showId: integer
* ranking: integer (1-5)
* review: text
* showName: string
* posterPath: string
* backgroundPath: string
* showDescription: text

Posts a review, a ranking and other relevant information.

---
DELETE /deletereview/:id

Info needed in the url params is:

* id: integer

Deletes a review from the database selected by id.

---
GET /reviews/:id

Info needed in the header is:

* review id: integer

Gets the review and ranking from a specific review.
Will include what shows from an association.

---
POST /comments

Info needed in the body includes an integer for review which is the foreign key from the review table:

* review: integer
* comment: text
* profileUrl: string
* UserName: string

Posts a comment for a specific show.

---
GET /comments/:id

Info needed in url parmas is:

* review id that the comment/ is about: integer

Gets all the comments on a specific review.

---
GET /showreviews/:showId

Info needed in url params is:

* showId of the show you want the reviews for.

Gets all the reviews for a specific show.

---
GET /userreviews/:userId

Info needed in the url params is:

* userId of the user who wrote the reviews.

Gets all the reviews that a specific user wrote.

---
GET /me

You will need an valid access-token in the headers.

Gets the user info for the user who's access-token you send it. Also sets the users userId number in the req.user.id field for the next request.

---
POST /follow/:userId

You will need a vaild access-token in the headers. Info needed in the url params is:

* userId of the person you have decided to follow.

Uses your access-token to find your userId then posts you are a follower to the userId you put in the url params.

---
GET /followers/:userId

Info needed in the url params:

* userId: integer

Gets all the followers of a specific userId.

---
GET /following/:userId

Info needed in the url parmas:

* userId: integer

Gets all the users that a specific person is following.

---
DELETE /deletefollowing/:userId

You will need a valid access-token to use this route. Info needed in the url params is:

* userId: integer

Will delete a following relationship between the signed in user and the userId you put in the url params.

---
GET /news/:userId

Info needed in the url params is:

* userId: integer

Will get all the news about a specific user.

---
POST /rankings/:userId

You will need a valid access-token in the headers to use this route. Info needed in the url params is:

* userId: integer

Info needed in the body is:

* listId: integer
* rankings: string

This route will post a users rankings for a specific list id. Rankings need to be in a string of comma separated showId's.

---
GET /getrankings/:userId

Info needed in the url params is:

* userId: integer

This will get the rankings string for a specific user with a listId of one. 








https://obscure-eyrie-45843.herokuapp.com/ | https://git.heroku.com/obscure-eyrie-45843.git
