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
GET /users

Returns all the users of the site

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

Info needed in the header is:

* user id: integer

Gets a specific show, will include what user posted the show as an association

---
POST /reviews

Info needed in the body is:

* ranking: integer (1-10)
* review: text

Posts a review and a ranking

---
GET /reviews/:id

Info needed in the header is:

* review id: integer

Gets the review and ranking from a specific review
will include what shows from an association

---
POST /comments

Info needed in the body is:

* review id that the comment is about: integer
* comment: text

Posts a comment for a specific show

---
GET /comments/:id

Info need in the header is:

* review id that the comment/ is about: integer

Gets all the comments on a specific review
 



https://obscure-eyrie-45843.herokuapp.com/ | https://git.heroku.com/obscure-eyrie-45843.git
