
/**
 *Consturctor function create new instance with follows properties

 * @param {string} ID unique value of product
 * @param {string} name of product
 * @param {string} description of product
 * @param {number} price of product
 * @param {string} brand of product
 * @param {Array<string>} sizes array of product
 * @param {string} activeSize  of product
 * @param {number} quantity of product in stock
 * @param {Date} date of creating  product
 * @param {[]} reviews array of product
 * @param {[]} images array of  of product
 */
 
 function Product(ID, name, description, price,
    brand, sizes, activeSize, quantity,
     date, reviews, images){
   
//init properties
this.ID = ID;
this.name = name;
this.description = description;
this.price = price;
this.brand = brand;
this.sizes = sizes;
this.activeSize = activeSize;
this.quantity = quantity;
this.date = date;
this.reviews = reviews;
this.images = images;
const that = this;                  
//getters   
this.obj ={
getID:()=> {
return this.ID
} }
function getName(){
return this.name;
}
function getDescription(){
return this.description;
}
function getName(){
return this.price;
}
function getName(){
return this.brand;
}
function getName(){
return this.sizes;
}
function getActiveSize(){
return this.activeSize;
}
function getQuantity(){
return this.quantity;
}
function getDate(){
return this.date;
}
function getReviews(){
return this.reviews;
}
function getImages(){
return this.images;
}

//setters
function setID(ID){
this.ID = ID
}

function setName(name){
this.name = name;
}

function setDescription(description){
this.description = description;
}

function setPrice(price){
this.price = price;
}

function setBrand(brand){
this.brand = brand;
}
function setActiveSize(activeSize){
this.activeSize = activeSize;
}
function setQuantity(quantity){
this.quantity = quantity;
}

function setDate(date){
this.date = date;
}

function setReviews(review){
this.review = review;
}   

function setImages(images){
this.image = images;
}


}

/**
 * Consturctor function create new instance with follows properties
 * 
 * @param {string} ID uniqu value of review
 * @param {string} author of review
 * @param {Date} date of review
 * @param {string} comment for review
 * @param {Map<string,number>} rating                                   
 */
function Reviews(ID, author, date, comment, rating){
    
    //init properties
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    //getters
    this.getID =()=>{
        return [this.ID,
        this.author];
    }
    function getAuthor(){
        return this.author;
    }

    function getComment(){
        return tith.comment;
    }
    function getRaiting(){
        return this.rating;
    }

    //setters
    function setID(ID){
        this.ID = ID;
    }

    function setAuthor(author){
        this.author = author;
    }
    
    function setDate(date){
        this.date = date;
    }
    function setComment(comment) {
        this.comment = comment;
    }

    function setRating(rating) {
        this.rating = rating;
    }
}

let r = new Reviews ("23", "Jon", new Date,"good staff", [["servise",4],["price",4],["value",4],["quality",4]]);
console.log(r.getID());

const p = new Product("2","name","good staff",1450.50,"new Balance",["S","M", "L","XL","XXL"],"M",14, new Date().toISOString(),[],["/img/shoes1.jpg","/img/shoes2.jpg"] );

console.log(p.obj.getID())
