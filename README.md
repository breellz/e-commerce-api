<<<<<<< HEAD


<p align="center">
  <h3 align="center">E commerce web api</h3>

  <p align="center">
    Tell a story
    <br />
    <a href="https://github.com/breellz/e-commerce-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://breellz-e-commerce.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/breellz/e-commerce-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/breellz/e-commerce-api/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project
This is an ecommerce API  built with NodeJs. It features authentication, full CRUD ability on products, order, cart and user.
Documentation here:
https://documenter.getpostman.com/view/11784799/UVJhDEyt

### Built With
* [NodeJs](http://nodejs.org)
  * Mongoose
  * Express
* [MongoDB](https://mongodb.com)
  * Database management
* [Jest](https://jestjs.io)
  * Node testing with jest

<!-- GETTING STARTED -->
## Getting Started

1 fork the repo

2. clone to your local machine

3. ```npm install```

4. ```npm start```

### Prerequisites
* npm packages

```npm install```

### Installation

1. fork the repo

2. clone the Repo

3. install dependencies 
```npm install```

4. run dev server
```npm run dev```

5. Test components
```npm test```

<!-- INTERACTING WITH THE API -->
App can be tested without cloning as it is deployed on the web\
PRODUCTION EDNPOINT: "https://breellz-e-commerce-api.herokuapp.com"

TO CREATE USERS
Method: POST\
ENDPOINT: "localhost:3000/users"\
DATA-TYPE: JSON\
body: {
    "name": "Bassit Owolabi",
    "email":"barseetbrn@gmail.com",
    "password": "123456"
}

TO LOGIN USERS\
Method: POST\
ENDPOINT: "localhost:3000/users/login"\
DATA-TYPE: JSON\
body: {
    "email":"barseetbrn@gmail.com",
    "password": "123456"
}

TO LOGOUT USERS\
Method: POST\
ENDPOINT: "localhost:3000/users/logout"\
DATA-TYPE: JSON\

TO LOGOUT ALL SESSIONS\
Method: POST\
ENDPOINT: "localhost:3000/users/logoutAll"\
DATA-TYPE: JSON

TO ADD ITEM TO STORE\
Method: POST\
ENDPOINT: "localhost:3000/items"\
DATA-TYPE: JSON\
body:{
    "name": "Pair of socks ",
    "description": "fancy ass socks",
    "category": "fashion",
    "price": 9000
}

TO GET ALL ITEMS IN STORE\
Method: GET\
ENDPOINT: "localhost:3000/items"\
DATA-TYPE: JSON\

TO GET AN ITEM IN STORE\
Method: GET\
ENDPOINT: "localhost:3000/items/id"\
DATA-TYPE: JSON\


TO UPDATE ITEM IN STORE\
Method: PATCH\
ENDPOINT: "localhost:3000/items/id"\
DATA-TYPE: JSON\
body: {
    any of the accepted object keys
}



TO DELETE AN ITEM IN STORE\
Method: DELETE\
ENDPOINT: "localhost:3000/items/id"\
DATA-TYPE: JSON

TO ADD AN ITEM TO CART\
Method: POST\
ENDPOINT: "localhost:3000/cart"\
DATA-TYPE: JSON\
BODY : {
    "itemId": "61a1fce7a1685e765135c191",
    "quantity": 1
}

TO GET THE  CART OF THE CURRENT USER\
Method: GET\
ENDPOINT: "localhost:3000/cart"

TO DELETE ITEM IN CART\
METHOD: DELETE\
ENDPOINT: localhost:3000/cart?itemId=61a1fce7a1685e765135c191
Id of the item to be deleted is passed as a query string



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/breellz/e-commerce-api/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact
Twitter - [@breellz](https://twitter.com/breellz)

[Facebook](https://fb.com/breellz)

[stackoverflow](https://stackoverflow.com/users/13081082/breellz)

[LinkedIn](https://linkedin.com/in/bassit-owolabi-55751b15a)

[Instagram](https://instagram.com/breellzfit)

Project Link: [https://github.com/breellz/e-commerce-api](https://github.com/breellz/e-commerce-api)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Stackoverflow
