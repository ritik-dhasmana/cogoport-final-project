# Cogoport Final Project - BACKEND
## _Backend API_

### Category
#### - GET    /category
 - Get all categories present 
 - Parameters - none 
 - response - returns a list of all categories present 
 - example-
 
http://localhost:3000/category
```
[
    {
        "id": 1,
        "name": "react",
        "created_at": "2023-02-06T13:33:31.858Z",
        "updated_at": "2023-02-06T13:33:31.858Z"
    },
    {
        "id": 2,
        "name": "postman",
        "created_at": "2023-02-06T13:33:31.865Z",
        "updated_at": "2023-02-06T13:33:31.865Z"
    }
]
```

### Articles
#### - GET /articles
- Get all articles present or a specific article by using article id in parameter
- Body Parameters (optional) (only one parameter can be passed at a time)
  * id (article id) : returns article by id
  * name (author name | string) : returns articles of a specific user
  * title (article title | string) : returns articles by passing partial or full title
  * categories (categories list | [string]) : returns articles having atleast one of the mentioned categories
- response - returns a list of all articles present 
- example- 

http://localhost:3000/articles

without any body parameters
```
[
    {
        "id": 2,
        "title": "tech",
        "text": "hello",
        "image_url": null,
        "user_id": 1,
        "created_at": "2023-02-06T13:29:49.304Z",
        "updated_at": "2023-02-06T13:29:49.304Z",
        "categories": [],
        "user": {
            "id": 1,
            "name": "Ritik",
            "password_digest": "$2a$12$FYxV0kyBmCJCHLstN3H9P.0auDQM6asCmLWWbf8NJVxOVtES/KBLC",
            "email": "ritik@gmail.com",
            "description": "Hello",
            "pfp_url": null,
            "created_at": "2023-02-06T13:19:11.173Z",
            "updated_at": "2023-02-06T13:19:11.173Z"
        }
    },
    {
        "id": 3,
        "title": "tech",
        "text": "text",
        "image_url": null,
        "user_id": 1,
        "created_at": "2023-02-06T13:33:31.835Z",
        "updated_at": "2023-02-06T13:33:31.835Z",
        "categories": [
            {
                "id": 1,
                "name": "react",
                "created_at": "2023-02-06T13:33:31.858Z",
                "updated_at": "2023-02-06T13:33:31.858Z"
            },
            {
                "id": 2,
                "name": "postman",
                "created_at": "2023-02-06T13:33:31.865Z",
                "updated_at": "2023-02-06T13:33:31.865Z"
            }
        ],
        "user": {
            "id": 1,
            "name": "Ritik",
            "password_digest": "$2a$12$FYxV0kyBmCJCHLstN3H9P.0auDQM6asCmLWWbf8NJVxOVtES/KBLC",
            "email": "ritik@gmail.com",
            "description": "Hello",
            "pfp_url": null,
            "created_at": "2023-02-06T13:19:11.173Z",
            "updated_at": "2023-02-06T13:19:11.173Z"
        }
    }
]
```

Another example -

http://localhost:3000/articles      

body parameters- 

 id [article id] (Example- id: 3)
```
[
    {
        "id": 3,
        "title": "tech",
        "text": "text",
        "image_url": null,
        "user_id": 1,
        "created_at": "2023-02-06T13:33:31.835Z",
        "updated_at": "2023-02-06T13:33:31.835Z",
        "categories": [
            {
                "id": 1,
                "name": "react",
                "created_at": "2023-02-06T13:33:31.858Z",
                "updated_at": "2023-02-06T13:33:31.858Z"
            },
            {
                "id": 2,
                "name": "postman",
                "created_at": "2023-02-06T13:33:31.865Z",
                "updated_at": "2023-02-06T13:33:31.865Z"
            }
        ],
        "user": {
            "id": 1,
            "name": "Ritik",
            "password_digest": "$2a$12$FYxV0kyBmCJCHLstN3H9P.0auDQM6asCmLWWbf8NJVxOVtES/KBLC",
            "email": "ritik@gmail.com",
            "description": "Hello",
            "pfp_url": null,
            "created_at": "2023-02-06T13:19:11.173Z",
            "updated_at": "2023-02-06T13:19:11.173Z"
        }
    }
]
```

#### - POST /articles [Login required]
-  Creates a new article
- Creates a new category if not present in Category table
- Body Parameters - 
```
{
    "title": string,
    "text": string,
    "author_id": id,
    "categories": [string](optional),
    "image_url": string(optional)
}
```
- response - returns the article after successful creation
- example- 

http://localhost:3000/articles
```
{
        "id": 2,
        "title": "tech",
        "text": "hello",
        "image_url": null,
        "user_id": 1,
        "created_at": "2023-02-06T13:29:49.304Z",
        "updated_at": "2023-02-06T13:29:49.304Z",
        "categories": [],
        "user": {
            "id": 1,
            "name": "Ritik",
            "password_digest": "$2a$12$FYxV0kyBmCJCHLstN3H9P.0auDQM6asCmLWWbf8NJVxOVtES/KBLC",
            "email": "ritik@gmail.com",
            "description": "Hello",
            "pfp_url": null,
            "created_at": "2023-02-06T13:19:11.173Z",
            "updated_at": "2023-02-06T13:19:11.173Z"
        }
    }
```

#### - PUT /articles  [Login required]
- Updates an already existing article
- Creates a new category if not present in Category table
- Body Parameters - 
```
{
    "article_id": string(mandatory)
    "title": string(optional),
    "text": string(optional),
    "categories": [string](optional),
    "image_url": string(optional)
}
```
- response - returns the article after successful updation

#### - DELETE /articles [Login required]
-  Deletes an existing article
- Body Parameters - 
```
{
    "article_id": string(mandatory)
}
```

#### - GET /articles/mostliked
-  Gets most liked articles
- Body Parameters - no Parameters required
- response - returns list of articles sorted by likes count in descending order

#### - GET /articles/mostcommented
-  Gets most liked articles
- Body Parameters - no Parameters required
- response - returns list of articles sorted by comments count in descending order


#### - POST /articles/like
-  Likes an article by id
- Body Parameters - 
```
{
    "article_id": string(mandatory)
}
```
- response - returns the liked article

#### - POST /articles/comment
-  Comments on an article by id
- Body Parameters - 
```
{
    "article_id": string(mandatory)
    "text": string
}
```
- response - returns the article in which comment was added

### User
#### - GET    /users
 - Get all users present 
 - Parameters - none 
 - response - returns a list of all users present 

#### - GET /users/profile [Login required]
 - Gets the details of the currently logged in user
 - Parameters - none
 - response - returns the details of the current user
 
#### - GET /users/articles [Login required]
 - Gets all the articles of the currently logged in user
 - Parameters - none
 - response - returns a list of all articles of the current user
 
 #### - POST /users
 - Sign up a new user
 - Body Parameters -
 ```
  "name": string,
  "email": string(mandatory, unique),
  "password": string(mandatory),
  "description": string(optional),
  "pfp_url": string(optional)
 ```
 - response - returns the newly created user
 
 #### - POST /users/login
 - Signs in a user
 - Body Parameters -
 ```
  "email": string(mandatory, unique),
  "password": string(mandatory)
 ```
 - response - returns a bearer token along with user details
 - example -
 
 POST [http://172.25.24.73:3000/users/login](http://172.25.24.73:3000/users/login)
 ```
 {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE2NzU4NDIzOTF9.plcC4hSb2IcLbXaoExJHa5RIZUmsweunSnsQhJMTlRQ",
    "user": {
        "id": 2,
        "name": "amartya",
        "password_digest": "$2a$12$XCmDnGJy8BEkR67qZadpOOCqJsiJ4Vcy8YEij9ktUaQaDSEAByzti",
        "email": "ac@gmail.com",
        "description": "my bio is cooler",
        "pfp_url": null,
        "created_at": "2023-02-07T17:48:54.391Z",
        "updated_at": "2023-02-07T17:48:54.391Z"
    }
}
```

#### - GET /users/mostpopular
 - Gets the users in descending order of count of likes on all their post
 - Body Parameters - None
 - response - returns a list of users
