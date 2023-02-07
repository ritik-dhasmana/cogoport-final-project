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
- Body Parameters - id(optional)
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

#### - POST /articles
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
