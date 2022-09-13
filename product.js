

// use product   = creates a new db
// db   = shows the current db

// database>collection>document = the order of mongodb

// 1) Find all the information about each products
 db.product.find({}).pretty() 

{
        "_id" : ObjectId("631d6e4b3f72af7e6399766b"),
        "id" : "1",
        "product_name" : "Intelligent Fresh Chips",
        "product_price" : 655,
        "product_material" : "Concrete",
        "product_color" : "mint green"
}
{
        "_id" : ObjectId("631d6e4b3f72af7e6399766c"),
        "id" : "2",
        "product_name" : "Practical Fresh Sausages",
        "product_price" : 911,
        "product_material" : "Cotton",
        "product_color" : "indigo"
}
// datas have been deleted



// 2) Find the product price which are between 400 to 800 


db.product.find({ product_price:{$gt:400,$lt:800}}) 

{ "_id" : ObjectId("631d6e4b3f72af7e6399766b"), "id" : "1", "product_name" : "Intelligent Fresh Chips", "product_price" : 655, "product_material" : "Concrete", "product_color" : "mint green" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766d"), "id" : "3", "product_name" : "Refined Steel Car", "product_price" : 690, "product_material" : "Rubber", "product_color" : "gold" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766e"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997670"), "id" : "6", "product_name" : "Awesome Wooden Towels", "product_price" : 474, "product_material" : "Plastic", "product_color" : "orange" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997671"), "id" : "7", "product_name" : "Practical Soft Shoes", "product_price" : 500, "product_material" : "Rubber", "product_color" : "pink" }


// 3) Find the product price which are not between 400 to 600

db.product.find({ product_price:{$not:{$gt:400,$lt:800}}}) 

{ "_id" : ObjectId("631d6e4b3f72af7e6399766c"), "id" : "2", "product_name" : "Practical Fresh Sausages", "product_price" : 911, "product_material" : "Cotton", "product_color" : "indigo" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766f"), "id" : "5", "product_name" : "Sleek Cotton Chair", "product_price" : 33, "product_material" : "Fresh", "product_color" : "black" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997672"), "id" : "8", "product_name" : "Incredible Steel Hat", "product_price" : 78, "product_material" : "Rubber", "product_color" : "violet" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997673"), "id" : "9", "product_name" : "Awesome Wooden Ball", "product_price" : 28, "product_material" : "Soft", "product_color" : "azure" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997674"), "id" : "10", "product_name" : "Generic Wooden Pizza", "product_price" : 84, "product_material" : "Frozen", "product_color" : "indigo" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997675"), "id" : "11", "product_name" : "Unbranded Wooden Cheese", "product_price" : 26, "product_material" : "Soft", "product_color" : "black" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997676"), "id" : "12", "product_name" : "Unbranded Plastic Salad", "product_price" : 89, "product_material" : "Wooden", "product_color" : "pink" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997677"), "id" : "13", "product_name" : "Gorgeous Cotton Keyboard", "product_price" : 37, "product_material" : "Concrete", "product_color" : "sky blue" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997678"), "id" : "14", "product_name" : "Incredible Steel Shirt", "product_price" : 54, "product_material" : "Metal", "product_color" : "white" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997679"), "id" : "15", "product_name" : "Ergonomic Cotton Hat", "product_price" : 43, "product_material" : "Rubber", "product_color" : "mint green" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767a"), "id" : "16", "product_name" : "Small Soft Chair", "product_price" : 47, "product_material" : "Cotton", "product_color" : "teal" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767b"), "id" : "17", "product_name" : "Incredible Metal Car", "product_price" : 36, "product_material" : "Fresh", "product_color" : "indigo" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767c"), "id" : "18", "product_name" : "Licensed Plastic Bacon", "product_price" : 88, "product_material" : "Steel", "product_color" : "yellow" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767d"), "id" : "19", "product_name" : "Intelligent Cotton Chips", "product_price" : 46, "product_material" : "Soft", "product_color" : "azure" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767e"), "id" : "20", "product_name" : "Handcrafted Wooden Bacon", "product_price" : 36, "product_material" : "Concrete", "product_color" : "lime" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767f"), "id" : "21", "product_name" : "Unbranded Granite Chicken", "product_price" : 90, "product_material" : "Metal", "product_color" : "gold" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997680"), "id" : "22", "product_name" : "Ergonomic Soft Hat", "product_price" : 99, "product_material" : "Rubber", "product_color" : "black" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997681"), "id" : "23", "product_name" : "Intelligent Steel Pizza", "product_price" : 95, "product_material" : "Cotton", "product_color" : "azure" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997682"), "id" : "24", "product_name" : "Tasty Rubber Cheese", "product_price" : 47, "product_material" : "Frozen", "product_color" : "orchid" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997683"), "id" : "25", "product_name" : "Licensed Steel Car", "product_price" : 20, "product_material" : "Cotton", "product_color" : "indigo" }


// 4) List the four product which are grater than 500 in price 

 db.product.find({ product_price:{$gt:500}}).limit(2) --COMMAND

{ "_id" : ObjectId("631d6e4b3f72af7e6399766b"), "id" : "1", "product_name" : "Intelligent Fresh Chips", "product_price" : 655, "product_material" : "Concrete", "product_color" : "mint green" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766c"), "id" : "2", "product_name" : "Practical Fresh Sausages", "product_price" : 911, "product_material" : "Cotton", "product_color" : "indigo" }


// 5) Find the product name and product material of each products

 db.product.find({},{product_name :1,product_material :1})
{ "_id" : ObjectId("631d6e4b3f72af7e6399766b"), "product_name" : "Intelligent Fresh Chips", "product_material" : "Concrete" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766c"), "product_name" : "Practical Fresh Sausages", "product_material" : "Cotton" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399766d"), "product_name" : "Refined Steel Car", "product_material" : "Rubber" }



// 6) Find the product with a row id of 10

 db.product.find({id:"10"},{product_name :1})
{ "_id" : ObjectId("631d6e4b3f72af7e63997674"), "product_name" : "Generic Wooden Pizza" }

// 7) Find only the product name and product material

 db.product.find({},{product_name :1,product_material:1,_id:0})

{ "product_name" : "Intelligent Fresh Chips", "product_material" : "Concrete" }
{ "product_name" : "Practical Fresh Sausages", "product_material" : "Cotton" }
{ "product_name" : "Refined Steel Car", "product_material" : "Rubber" }
{ "product_name" : "Gorgeous Plastic Pants", "product_material" : "Soft" }
{ "product_name" : "Sleek Cotton Chair", "product_material" : "Fresh" }
{ "product_name" : "Awesome Wooden Towels", "product_material" : "Plastic" }
{ "product_name" : "Practical Soft Shoes", "product_material" : "Rubber" }
{ "product_name" : "Incredible Steel Hat", "product_material" : "Rubber" }
{ "product_name" : "Awesome Wooden Ball", "product_material" : "Soft" }
{ "product_name" : "Generic Wooden Pizza", "product_material" : "Frozen" }
{ "product_name" : "Unbranded Wooden Cheese", "product_material" : "Soft" }
{ "product_name" : "Unbranded Plastic Salad", "product_material" : "Wooden" }
{ "product_name" : "Gorgeous Cotton Keyboard", "product_material" : "Concrete" }
{ "product_name" : "Incredible Steel Shirt", "product_material" : "Metal" }
{ "product_name" : "Ergonomic Cotton Hat", "product_material" : "Rubber" }
{ "product_name" : "Small Soft Chair", "product_material" : "Cotton" }
{ "product_name" : "Incredible Metal Car", "product_material" : "Fresh" }
{ "product_name" : "Licensed Plastic Bacon", "product_material" : "Steel" }
{ "product_name" : "Intelligent Cotton Chips", "product_material" : "Soft" }
{ "product_name" : "Handcrafted Wooden Bacon", "product_material" : "Concrete" }
// Type "it" for more

// 8) Find all products which contain the value of soft in product material 

 db.product.find({product_material :{$eq: "Soft"}})


{ "_id" : ObjectId("631d6e4b3f72af7e6399766e"), "id" : "4", "product_name" : "Gorgeous Plastic Pants", "product_price" : 492, "product_material" : "Soft", "product_color" : "plum" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997673"), "id" : "9", "product_name" : "Awesome Wooden Ball", "product_price" : 28, "product_material" : "Soft", "product_color" : "azure" }
{ "_id" : ObjectId("631d6e4b3f72af7e63997675"), "id" : "11", "product_name" : "Unbranded Wooden Cheese", "product_price" : 26, "product_material" : "Soft", "product_color" : "black" }
{ "_id" : ObjectId("631d6e4b3f72af7e6399767d"), "id" : "19", "product_name" : "Intelligent Cotton Chips", "product_price" : 46, "product_material" : "Soft", "product_color" : "azure" }

// 9)Find products which contain product color indigo  and product price 492.00

db.product.find({product_price:{$eq:492.00}},{product_color :{$eq: "indigo"}})

Error: error: {
        "ok" : 0,
        "errmsg" : "Expression $eq takes exactly 2 arguments. 1 were passed in.",
        "code" : 16020,
        "codeName" : "Location16020"
}

// 10) Delete the products which product price value are same


