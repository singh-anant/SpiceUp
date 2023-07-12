# SpiceUp

The Food Ordering App is a web application allowing users to browse and order food from various restaurants. It is built using React, a popular JavaScript library for building user interfaces, and React Redux, a predictable state container for managing application state. For handling authentication Node-Js, Express-Js, and Mysql are used.

## Features


- User Registration-User can register through the app which will store the data in MySQL database.
- Restaurant Listing: Users can view a list of restaurants available on the platform, along with their menus and other details.
- Menu Navigation: Users can browse a selected restaurant's menu items, filter them based on categories or preferences, and add items to their cart.
- Cart Management: Users can view their cart, modify quantities, remove items, and proceed to checkout.
- Order Placement: Users can place orders for the selected items, specify delivery details, and make payments.

## Acknowledgements

This project was developed as part of a learning experience and for demonstration purposes.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Redux: Predictable state container for managing application state.
- React Router: Library for handling routes and navigation within the application.
- Node.js: A runtime environment for executing JavaScript code on the server-side.
- Express.js: A fast and minimalist web application framework for Node.js.
- MySQL: A popular open-source relational database management system.
- Postman: A popular API testing tool for API development.
- Parcel:Fast and zero-configuration bundler for web applications
- CSS: Styling using CSS.

## SQL QUERIES

- CREATE DATABASE IF NOT EXISTS spiceup;
- USE spiceup;
- SELECT DATABASE();
- CREATE TABLE user_registration (id INT NOT NULL AUTO_INCREMENT,name VARCHAR(50) NOT 
  NULL,email VARCHAR(50) NOT NULL,password VARCHAR(60) NOT NULL,PRIMARY KEY (`id`));
- SELECT * FROM user_registration;
  
## Screenshots

### User Interface

[![Screenshot-293.png](https://i.postimg.cc/rwq8vcbP/Screenshot-293.png)](https://postimg.cc/D8YkGV7r)

[![Screenshot-296.png](https://i.postimg.cc/qMhB8jK1/Screenshot-296.png)](https://postimg.cc/Vdwcw9Dt)

[![Screenshot-295.png](https://i.postimg.cc/cCjsp8p7/Screenshot-295.png)](https://postimg.cc/vxrF9DHD)

[![Screenshot-294.png](https://i.postimg.cc/Bbd0YfFM/Screenshot-294.png)](https://postimg.cc/9wtK0SJ7)

[![Screenshot-297.png](https://i.postimg.cc/65J6fChw/Screenshot-297.png)](https://postimg.cc/YjRwpGVy)

[![Screenshot-298.png](https://i.postimg.cc/bv3jXtbG/Screenshot-298.png)](https://postimg.cc/Ffd631Tm)

[![Screenshot-299.png](https://i.postimg.cc/3rDJGtmn/Screenshot-299.png)](https://postimg.cc/c60SyMDn)

[![Screenshot-300.png](https://i.postimg.cc/kG8Jd5qk/Screenshot-300.png)](https://postimg.cc/PvXsWTL4)

### My SQL 

[![SQL-1.jpg](https://i.postimg.cc/02DQTVNb/SQL-1.jpg)](https://postimg.cc/cr10YMwS)

[![SQL-2.jpg](https://i.postimg.cc/h4JhrDW8/SQL-2.jpg)](https://postimg.cc/8sS1kVCs)

[![SQL-3.jpg](https://i.postimg.cc/pTSbrMsR/SQL-3.jpg)](https://postimg.cc/2bnX9MpK)

[![SQL-4.jpg](https://i.postimg.cc/0yCNQrDv/SQL-4.jpg)](https://postimg.cc/18fS7mv7)

### Postman

[![PO-Login.jpg](https://i.postimg.cc/B6n4tgsc/PO-Login.jpg)](https://postimg.cc/Ff82B0Y7)

[![PO-Register.jpg](https://i.postimg.cc/FzfvVHYY/PO-Register.jpg)](https://postimg.cc/m1GKbRN4)
