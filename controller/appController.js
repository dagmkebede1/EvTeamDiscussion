// SQL (structured Query Language) :- its is a language to we use to create and modify the database
// --- > ex: MySQL, PostgreSQL, and others

// NoSQL (Not Only Structured Query Language) :- not use the SQL language
// --- > MongoBD, Redis, and others

// CRUD (Create, Read, Update, Delete) // facebook signup-create, update --update, profile view -- read, account deletion --delete.

export let getController = (req, res) => {
  res.json({
    msg: "its a GET request",
  });
};

export let postController = (req, res) => {
  // to send a data/resource to the server
  res.json({
    msg: "this is a POST request",
  });
};

export let patchController = (req, res) => {
  // to modify or update a resource/data that we have in our server/DB [to update some it]
  res.json({ msg: "this is a Patch request" });
};

export let deleteController = (req, res) => {
  // to delete a resource/data that we have in our server/DB
  res.json({ msg: "this is a Delete request" });
};

export let putController = (req, res) => {
  // to modify or update a resource/data that we have in our server/DB [we have to update all of it, incase if there is no data it will be created ]
  res.json({ msg: "this is a PUT request" });
};

// export default getController
