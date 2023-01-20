//unique auto increment id for objects
var idForProduct="0";
var idForReveiws="0";

//array of permitted sizes
var sizeChecker = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
/**
 *Consturctor function create new instance with follows properties

 * @param {string} ID unique value of product
 * @param {string} name of product
 * @param {string} description of product
 * @param {number} price of product
 * @param {string} brand of product
 * @param {[]} sizes array of product
 * @param {string} activeSize  of product
 * @param {number} quantity of product in stock
 * @param {Date} date of creating  product
 * @param {[]} reviews array of product
 * @param {[]} images array of  of product
 */
function Product(name, description, price,brand, sizes, activeSize, quantity, reviews, images){
    
    this.ID = idForProduct++;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date =  new Date().toISOString();
    this.reviews = reviews;
    this.images = images;
                    
    //getters   
    this.getID = () => this.ID;
    this.getName = () => this.name;
    this.getDescription = () => this.description;
    this.getPrice = () => this.price;
    this.getBrand = () => this.brand;
    this.getSizes = () => this.sizes;
    this.getActiveSize = () => this.activeSize;
    this.getQuantity = () => this.quantity;
    this.getDate = () => this.date;
    this.getReviews = () => this.reviews;
    this.getImages = () => this.images;

    //setters

    this.setName = name => this.name = name;
    this.setDescription = description => this.description = description;
    this.setPrice = price => this.price = price;
    this.setBrand = brand => this.brand = brand;
    this.setSizes = sizes => this.sizes = sizes
    this.setActiveSize = activeSize => this.activeSize = activeSize;
    this.setQuantity = quantity => this.quantity = quantity;
    this.setDate = date => this.date = date;
    this.setReviews = review => this.review = review;
    this.setImages = images => this.images = images;

    //methods

    this.getReviewById = ID => this.reviews.find(r => r.getID() === ID);

    this.getImage = path => path !== undefined ? this.images.find(img => img === path) : this.images[0];

    this.addSize = size => {
        if (sizeChecker.includes(size) && !(this.sizes.includes(size))){
                this.sizes.push(size);
            }
    }

    this.deleteSize = size => {
        if (sizeChecker.includes(size) && (this.sizes.includes(size))){
            //    this.sizes.splice(sizes.indexOf(size),1) 
        this.sizes = this.sizes.filter(s => s !== size)
            }
    }

    this.addReview = review => this.reviews.push(review);

    this.deleteReview = ID => this.reviews = this.reviews.filter( r => r.getID === ID);

    this.getAverageRating = () => { 
            let total = 0;
            let count = 1;
            this.reviews.forEach(review => {
                    let raiting = review.getRaiting().values(); 
                    for (const value of raiting) {
                        total+=value
                        count++
                    }
                } 
            );
            const res=total/count;
        return  res.toFixed(1);
    }
}//end product

/**
 * Consturctor-function create new instance with follows properties
 * 
 * @param {string} ID uniqu value of review
 * @param {string} author of review
 * @param {Date} date of creating reviews
 * @param {string} comment for review
 * @param {Map<string,number>} rating of 'service', 'price', 'value', 'quality'                              
 */
function Reviews(author,comment, rating){
  
    this.ID = idForReveiws++;
    this.author = author;
    this.date =  new Date().toISOString();
    this.comment = comment;
    this.rating = new Map ([
        ["servise",rating[0]],
        ["price",rating[1]],
        ["value",rating[2]],
        ["quality",rating[3]]
    ]);
    //getters
    this.getID = () => this.ID;
    this.getAuthor = () => this.author;
    this.getComment = () =>this.comment;
    this.getRaiting= () => this.rating ;

    //setters
    this.setAuthor = author => this.author = author; 
    this.setDate = date => this.date = date;
    this.setComment = comment =>this.comment = comment;
    this.setRating = rating => this.rating = rating;
    
}//end Reviwes

/**
 * 
 * @param {[]} products 
 * @param {string} search 
 */
function searchProduct(products, search){
//todo
}

/**
 * 
 * @param {[]} products 
 * @param {string} sortRule 
 */
function sortProduct(products, sortRule){
//todo
}

//test
const review_1 = new Reviews ("Jon","Good staff",[4,3,2,5]);
const review_2 = new Reviews ("Tom","I like it ",[5,3,4,3]); 
const review_3 = new Reviews ("Jenny","It`s perfect to me", [5,3,5,4]);
const review_4 = new Reviews ("Anna","Good for running", [4,3,4,4]);
const review_5 = new Reviews ("Bob","Best choice ", [5,4,5,4]);
const testReview = new Reviews ("Test","Best test for add review test ", [123,1,2,3]);

const arrReviwes = [review_1,review_2, review_3, review_4,review_5];
const arrImages = ["../img_1.jpg","../img_2.jpg","../img_3.jpg","../img_4.jpg","../img_5.jpg"];

const p_1 = new Product("shirt", "Material is cotton, color white, made in modern style ", 99,"H&M",['XS', 'S', 'M', 'XL'], "M", 100, arrReviwes, arrImages);
const p_2 = new Product("jecet", "Material is cotton, color black, made in modern style ", 199,"H&M",['M', 'L', 'XL', 'XXL'],"M", 50, arrReviwes, arrImages);

//  console.log(p_1.getReviewById(4)); 
// console.log(p_1.getImage("../img_2.jpg"));
// console.log(p_1.getSizes());
// p_1.addSize("XXL");
// console.log(p_1.getSizes());
// p_1.deleteSize("S")
// console.log(p_1.getSizes());
// console.log(p_1.getReviews()[5]);
// p_1.addReview(testReview)
// console.log(p_1.deleteReview(5));
// // p_1.deleteReview(5);
// console.log(p_1.getReviews()[5]);
console.log(p_1.getAverageRating());