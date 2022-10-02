//need to correct for live hosting
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'cnidiria',
    user: 'postgres',
    password: ''
};

// const connection = 'postgres://postgres:postgres@localhost:5432/Cnidiria'

const initOptions = {
    // Capitalizes all SQL generated
    capSQL: true,
    // global event notification;
    error(error, e) {
      if (e.cn) {
        // A connection-related error;
  
        // Connections are reported back with the password hashed,
        // for safe errors logging, without exposing passwords.
        console.log('CN:', e.cn);
        console.log('EVENT:', error.message || error);
      }
    },
    // this is to be commited for debugging purposes, but left commented out until you need it
    // if un-commented, it will print out the resulting query when any query is ran
    query(e) {
      console.log(e.query);
    },
  };

const pgp = require('pg-promise')(initOptions);
  
const db = pgp(connection)

db.connect()
  .then(obj => {
    // After query runs succesfully, disconnect
    obj.done();
  })
  .catch(error => {
    console.log('ERROR FROM DB:========>', error.message);
  });

async function getAllPosts(req, res){
    try {
        //db call table is cUsers
        res.send("All Posts endpoint")
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all posts'})
    }
}

async function getOnePost(req, res){
    try {
        const { id } = req.params
        //db call
        res.send("One Posts endpoint for id " + id)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting post by ID'})
    }
}

async function addPost(req, res){
    try {
        info = ['Test Title', "test test test", "2022-10-02", 30, "madison", 3000, "remote", "Bob" ]
        const data = await db.one(
            `INSERT
             INTO
              cUsers (
                title, 
                desc, 
                date, 
                timeframe, 
                location, 
                budget, 
                jobtype, 
                postowner
                ) 
                VALUES (
                    $/title/, 
                    $/desc/, 
                    $/date/, 
                    $/timeframe/, 
                    $/location/, 
                    $/budget/, 
                    $/jobtype/, 
                    $/postowner/
                    ) 
                    RETURNING id`, 
                    info
                    )
            console.log(data)

        res.send("add one post with id " + data)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error adding post'})
    }
}

async function deletePost(req, res){
    try {
        const { id } = req.params
        //db call
        res.send("delete one post with id " + id)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error deleting post'})
    }
}

module.exports = {
    getAllPosts,
    getOnePost,
    addPost,
    deletePost
}