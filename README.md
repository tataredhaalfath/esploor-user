## Getting Started

## Installation
```bash
  $ npm install
  $ npm run start
```

## Setup ENV
```exampe
  PORT=5000

  DB_HOST=localhost
  DB_USERNAME=root
  DB_PASSWORD=
  DB_NAME=users_database
```
## Database Migration and Seeder
```bash
  $ npx sequelize db:migrate
  $ npx sequelize db:seed:all
```

## API Documentation
- you can see the API Documentation in the api-docs.rest file

## API Contract

- [Register](#register)
- [Login](#login)
- [Update](#update)
- [Get Detail](#get-detail)
- [Get All](#get-all)
- [Logout](#logout)
- [Create Refresh Token](#create-refresh-token)
- [Get Token](#get-token)



### Register

### Description
This api for register new user

### Method
`POST`

### URL
```diff
{URL_API}/users/register
```

### Body
```diff
{
  "name":"fath",
  "email":"fath@gmail.com",
  "password":"12345678",
  "profession":"web developer"
}
```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5
  }
}
```
### Error Response
email is exist
```diff
{
  "status": "error",
  "message": "email already exist"
}
```
password less than 6 character
```diff
{
  "status": "error",
  "message": [
    {
      "type": "stringMin",
      "message": "The 'password' field length must be greater than or equal to 6 characters long.",
      "field": "password",
      "expected": 6,
      "actual": 5
    }
  ]
}
```

<br>
<br>

---

### Login

### Description
This api for login

### Method
`POST`

### URL
```diff
{URL_API}/users/login
```

### Body
```diff
{
  "email":"fath@gmail.com",
  "password":"12345678"
}
```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "fath",
    "email": "fath@gmail.com",
    "role": "student",
    "avatar": null,
    "profession": "web developer"
  }
}
```
### Error Response
user not found
```diff
{
  "status": "error",
  "message": "user not found"
}
```
password dont match
```diff
{
  "status": "error",
  "message": "password not correct"
}
```

<br>
<br>

---


### Update

### Description
Api for update data user

### Method
`PUT`

### URL
```diff
{URL_API}/users/users/{user_id}
```

### Body
```diff
{
  "name":"al fath",
  "email":"fath@gmail.com",
  "password":"12345678",
  "avatar":"https://imagesa.com",
  "profession":"backend web dev" 
}

```
### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "al fath",
    "email": "fath@gmail.com",
    "profession": "backend web dev",
    "avatar": "https://imagesa.com"
  }
}
```
### Error Response
user not found
```diff
{
  "status": "error",
  "message": "user not found"
}
```

<br>
<br>

---

### Get Detail

### Description
Api for get detail data user

### Method
`GET`

### URL
```diff
{URL_API}/users/{user_id}
```

### Response
```diff
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "al fath",
    "profession": "backend web dev",
    "avatar": "https://imagesa.com",
    "email": "fath@gmail.com",
    "role": "student"
  }
}
```
### Error Response
user not found
```diff
{
  "status": "error",
  "message": "user not found"
}
```

<br>
<br>

---


### Get All

### Description
Api for get all data user

### Method
`GET`

### URL
```diff
{URL_API}/users
```

## Params

```diff
user_ids: [id user] (optional)
```

### Response
```diff
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Tata Redha Al Fath",
      "profession": "Back End Developer",
      "avatar": "http://localhost:8080/images/1671720982334.png",
      "email": "redha@gmail.com",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "alfath",
      "profession": "Front-end Developer",
      "avatar": null,
      "email": "alfath@gmail.com",
      "role": "student"
    },
    ...
  ]
}
```


<br>
<br>

---

### Logout

### Description
Api for logout user session

### Method
`POST`

### URL
```diff
{URL_API}/users/logout
```

### Body
```diff
{
  "user_id":"5"
}
```

### Response
```diff
{
  "status": "success",
  "message": "refresh token deleted"
}
```

### Error Response
user not found
```diff
{
  "status": "error",
  "message": "user not found"
}
```

<br>
<br>

---

### Create Refresh Token
Api for create new refresh token

### Method
`POST`

### URL
```diff
{URL_API}/refresh_tokens
```

### Body
```diff
{
  "refresh_token":"2137sadhjkhu214dsa",
  "user_id": 5
}
```

### Response
```diff
{
    "status": "success",
    "data": {
        "id": 7
    }
}
```

<br>
<br>

---

### Get Token
Api for create new refresh token

### Method
`POST`

### URL
```diff
{URL_API}/refresh_tokens
```

### Params
```diff
refresh_tokens = [refresh_token] (required)
```

### Response
```diff
{
    "status": "success",
    "token": {
        "id": 7,
        "token": "2137sadhjkhu214dsa",
        "user_id": 5,
        "createdAt": "2022-12-22T16:06:51.000Z",
        "updatedAt": "2022-12-22T16:06:51.000Z"
    }
}
```

<br>
<br>

---

