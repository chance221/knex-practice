require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection:process.env.DB_URL,
})
//this is an example of a knex query

knexInstance.from('amazong_products').select('*')
  .then(result=>{
    console.log(result)
  })


//this is a query where you filter using the where clause

knexInstance
  .select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({name: 'Point of view gun'})
  .then(result=>{
    console.log(result)
  })



  //this is a query that only pulls the first result and stops immediately after

  
knexInstance
.select('product_id', 'name', 'price', 'category')
.from('amazong_products')
.where({name: 'Point of view gun'})
.first() //this is how you let the query know you only need the first one found. 
.then(result=>{
  console.log(result)
})
