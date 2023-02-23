
# Building a Simple CRUD app with Node, Express, and MongoDB

Source: <https://zellwk.com/blog/crud-express-mongodb/>

CRUD, Express and MongoDB
CRUD, Express and MongoDB are big words for a person who has never touched any server-side programming in their life. Let’s quickly introduce what they are before we diving into the tutorial.

Express is a framework for building web applications on top of Node.js. It simplifies the server creation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language.

MongoDB is a database. This is the place where you store information for your websites (or applications).

CRUD is an acronym for Create, Read, Update and Delete. It is a set of operations we get servers to execute (POST, GET, PUT and DELETE requests respectively). This is what each operation does:

Create (POST) - Make something
Read (GET)- Get something
Update (PUT) - Change something
Delete (DELETE)- Remove something
POST, GET, PUT, and DELETE requests let us construct Rest APIs.

# Install 

npm init

# Install Express

npm install express --save

# Install nodemon

npm install nodemon --save-dev

# What is nodemon

Nodemon is a utility depended on about 3 million projects, that will monitor for any changes in your source and automatically restart your server. Perfect for development.

Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes. To install, get Node.js, then from your terminal run

# Install body-parser

npm install body-parser --save

# What is body-parser

Body-parser is a middleware. They help to tidy up the request object before we use them. Express lets us use middleware with the use method.

# What is mongodb

MongoDB is a database. We can store information into this database to remember Yoda’s words. Then, we can retrieve this information and display to people who view our app.

I normally use Mongoose (which is a framework for MongoDB) when I use MongoDB. I’ll teach you how to use basic MongoDB in this article. If you want to learn Mongoose, consider reading my article on Mongoose.

# Install mongoDB

npm install mongodb --save
