const Articlesservice = require(`../src/articles-service`)
const knex = require('knex')

/*
to define a test suite write a function that describes the usite and then describe each feature being tested. 
Each describe inside the test suite runs the test defined and the results of that suite will be broken down to display each result.
*/
describe(`Articles service object`, function() {
  //create a connection to the test database
  let db;

  let testArticles = [
    {
      title: 'First test post!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?'
    },
    {
      title: 'Second test post!',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, exercitationem cupiditate dignissimos est perspiciatis, nobis commodi alias saepe atque facilis labore sequi deleniti. Sint, adipisci facere! Velit temporibus debitis rerum.'
    },
    {
      title: 'Third test post!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptate? Necessitatibus, reiciendis? Cupiditate totam laborum esse animi ratione ipsa dignissimos laboriosam eos similique cumque. Est nostrum esse porro id quaerat.'
    },
  ]


  

  before(()=>{
    db=knex({
      client:'pg',
      connection:process.env.TEST_DB_URL,
    })
  })
  //this is the first test in the test suite.
  describe(`getAllArticles()`, ()=>{
    it (`resolves all articles from 'blogful_articles' table`, ()=>{
      //test that ArticlesServles.getAllArtucles gets data from table 
    })


  })
  
})