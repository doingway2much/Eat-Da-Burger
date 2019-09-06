# Eat-Da-Burger
The "Eat-Da-Burger" App is created with Node.js, mysql, express, handelbars, orm, Javascript and jQuery.  The App allows you to add burgers to the menu and then devour them.  Once devoured they move to the right side of the screen and give you an option to delete the burgers.  This can be hellpful when trying to clean up recorders from users playing arround.


[Live DEMO hosted on Heroku](https://dry-beach-45701.herokuapp.com "Live DEMO")  

[Watch a DEMO on YouTube](https://www.youtube.com/watch?v=KZ7MI2xj6vo&feature=youtu.be "YouTube DEMO")

![IMG1](https://github.com/doingway2much/Bootstrap-Portfolio/blob/master/assets/img/BurgerApp.jpg?raw=true)


Instalation:
1)  The first thing you need to do is clone the repo
```
git clone https://github.com/doingway2much/Eat-Da-Burger.git
```
2)  You need to create the DB and import the seed data you can do this via the CLI (Make sure your in the DB directory)
```
mysql -u root -p 
Enter Password:
source schema.sql
source seeds.sql
```
3) Next run the following command to install all the packages from the package.json file
```
npm install
```
4)  You have to update the DB passord in the connections.js file
```
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password_Goes_Here",
  database: "burgers_db"
});
```
5)  Finally you can run the app by running the following command
```
node server.js
```
