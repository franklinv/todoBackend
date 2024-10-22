# ToDo Application Backend
Backend system for the ToDo Application

### Tech Stack 
RESTful API using Node.js, Express, Mongoose
## Features
- Modular, Clean Code 
- Validation has been done for all the routes
- DB Model has been creates=d for saving the data
- Added a Utility function for Code Reusability and exposed it for validation
- Added comments

### Database
The ToDo Backend uses the Atlas MongoDB Database to Add, Modify, Delete ToDos

Credentials of the database are in the .env file

### Routes
GET: `http://localhost:3000/todos`
To retrieve the list of ToDos

POST: `http://localhost:3000/todos`   
To Add/Save a ToDo in the Database, pass the following in the Request Body
{
 "description": "New ToDo",
 "completed" : true 
}

PUT: `http://localhost:3000/todos/6716fad1901a3e369b773678` 
To Update a ToDo in the Database, pass the todo Id in the params
and the following in the Request Body
{
 "description": "Task Description to be updated",
 "completed" : true 
}

DELETE: `http://localhost:3000/todos/6716fad1901a3e369b773678` 
To Delete a ToDo from the Database, pass the todo Id in the params
## Installation Steps
### Clone the repository, install node packages

``` 
git clone https://github.com/franklinv/todoBackend.git
cd todoBackend
npm install
node app.js
```






