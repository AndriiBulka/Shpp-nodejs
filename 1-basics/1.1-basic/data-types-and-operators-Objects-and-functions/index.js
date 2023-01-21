//unique auto increment id for objects
let idForProduct="0";
let idForReveiws="0";

//array of permitted sizes
const sizeChecker = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

/**
 *Consturctor function create new instance with follows properties
 *
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
    
    this.ID = idForProduct++; //auto increment
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
    this.setSizes = sizes => this.sizes = sizes.map(s => s.toUpperCase());
    this.setActiveSize = activeSize => this.activeSize = activeSize.toUpperCase();
    this.setQuantity = quantity => this.quantity = quantity;
    this.setDate = date => this.date = date;
    this.setReviews = reviews => this.reviews = reviews;
    this.setImages = images => this.images = images;

    //methods
    this.getReviewById = ID => this.reviews.find(r => r.getID() === ID);
    
    this.getImage = path => path !== undefined ? this.images.find(img => img === path) : this.images[0];
    
    this.addSize = size => {
        size = size.toUpperCase();    
        if (sizeChecker.includes(size) && !(this.sizes.includes(size))){
                this.sizes.push(size);
            }
    }

    this.deleteSize = size => {
        size = size.toUpperCase();  
        if (sizeChecker.includes(size) && (this.sizes.includes(size))){
                  this.sizes = this.sizes.filter(s => s !== size)
            }
    }

    this.addReview = review => this.reviews.push(review);

    this.deleteReview = ID => this.reviews = this.reviews.filter(r => r.getID === ID);

    this.getAverageRating = () => { 
        let total = 0;
        let count = 0;
        this.reviews.forEach(review => {
                let raiting = review.getRaiting().values(); 
                for (const value of raiting) {
                    total += value
                    count++
                }
            } 
        );
        const res=total/count;
        return  res.toFixed(1);
    }
}//end Products constructor

/**
 * Consturctor-function create new instance with follows properties
 * 
 * @param {string} ID uniqu value of review
 * @param {string} author of review
 * @param {Date} date of creating reviews
 * @param {string} comment for review
 * @param {Map<string,number>} raiting of 'service', 'price', 'value', 'quality'                              
 */
function Reviews(author,comment, rating){
  
    this.ID = idForReveiws++; //auto increment
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
    this.getComment = () => this.comment;
    this.getRaiting= () => this.rating ;

    //setters
    this.setAuthor = author => this.author = author; 
    this.setDate = date => this.date = date;
    this.setComment = comment => this.comment = comment;
    this.setRating = rating => this.rating = rating;
    
}//end Reviwes constructor

/**
 * Search product that contains in  name or discription target searching  word
 * 
 * @param {[]} products 
 * @param {string} search 
 * @returns new array of products that contains in name or discription target searching  word
 */
function searchProduct(products, search){
       return products.filter( p => p.getName().includes(search) || p.getDescription().includes(search));
}

/**
 * Sorts array by sorting rule such ID, price, and name 
 * 
 * @param {[]}products array
 * @param {string} sortRule  ID, price, or name
 * @returns sorted array by one of sorting rule
 */
function sortProduct(products,sortRule){
     switch(sortRule.toLowerCase()){
        case "id": 
            return products.sort((a, b) => a.getID() - b.getID());  
        case "price":
            return products.sort((a, b) => a.getPrice() - b.getPrice());
        case "name":
            return products.sort((a, b) => a.getName().localeCompare(b.getName()));
        default:
            console.log("No such sorting rule !!!");
     }
}

/*tests in console*/

//create revivwes 
const review_1 = new Reviews ("Jon","Good staff",[9,7,7,7]);
const review_2 = new Reviews ("Tom","I like it ",[9,6,8,5]); 
const review_3 = new Reviews ("Jenny","It`s perfect to me", [10,9,8,10]);
const review_4 = new Reviews ("Anna","Good for running", [5,8,6,4]);
const review_5 = new Reviews ("Bob","Best choice ", [7,8,9,4]);

//reviwes array
const arrReviwes = [review_4, review_3, review_2,review_1];

//images array
const arrImages = ["../img_1.jpg","../img_2.jpg","../img_3.jpg","../img_4.jpg","../img_5.jpg"];

// products objects
const p1 = new Product("a-shirt", "Material is cotton, color white, made in modern style ", 99,"H&M",['S', 'M', 'XL'], "M", 100, [], []);
const p2 = new Product("jacet", "Material is cotton, color black, made in modern style ", 199,"H&M",['M', 'L', 'XL', 'XXL'],"M", 50, arrReviwes, arrImages);

//products array
const arrProducts = [p2,p1];

/* calls methods */

/*setters*/

// p1.setName("Other product");
// p1.setDescription("Some discripttion");
// p1.setPrice(299);
// p1.setBrand("Other brand");
// p1.setSizes(["xs","s","m"]);
// p1.setActiveSize("s");
// p1.setReviews(arrReviwes);
// p1.setImages(arrImages);

/*getters*/ 

// console.log(p1.getID());
// console.log(p1.getName());
// console.log(p1.getDescription());
// console.log(p1.getPrice());
// console.log(p1.getBrand());
// console.log(p1.getSizes());
// console.log(p1.getActiveSize());
// console.log(p1.getReviews());
// console.log(p1.getImages());

/*methods*/ 

//getReviewByID
// console.log(review_2);
// console.log(p2.getReviewById(1));

//getImage
// console.log(p2.getImage()); //default value is first image in array
// console.log(arrImages[0]);
// console.log(p2.getImage("../img_3.jpg"));

//addSize
// console.log(p1.getSizes());
// p1.addSize('xxl');
// console.log(p1.getSizes());

//deleteSize
// console.log(p1.getSizes());
// p1.deleteSize('m');
// console.log(p1.getSizes());

//addReview
// console.log(p1.getReviews());
// p1.addReview(new Reviews("Sam","Some text",[7,5,6,4]));
// console.log(p1.getReviews());

//deleteReview 
// p1.addReview(new Reviews("Din","Good jacet",[10,10,9,7]));
// console.log(p1.getReviews());
// p1.deleteReview(0)
// console.log(p1.getReviews());

//getAverageRating
// p1.addReview(new Reviews("Sam","Some text",[6,7,7,8]));
// p1.addReview(new Reviews("Din","Good jacet",[10,6,8,9]));
// console.log(p1.getAverageRating());

//searchProduct
// let searchColor = searchProduct(arrProducts,"white");
// // console.log(searchColor);
// let searchName = searchProduct(arrProducts,"jacet");
// console.log(searchName);

//sortProducts
// console.log(arrProducts); 
// console.log(sortProduct(arrProducts,"id"));
// console.log(sortProduct(arrProducts,"price"));
// console.log(sortProduct(arrProducts,"name"));