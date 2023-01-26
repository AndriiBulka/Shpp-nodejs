/**
 * Abstract constructor function for products,
 * you can`t create new instance of this object
 * 
 * @param {string} ID unique value of product
 * @param {string} name of product
 * @param {string} description of product
 * @param {number} price of product
 * @param {string} brand of product
 * @param {number} quantity of product in stock
 * @param {Date} date of creating  product
 * @param {[]} reviews array of product
 * @param {[]} images array of  of product
 */
function AbstractProduct(name, description, price, brand, quantity, reviews, images){
    if( new.target === AbstractProduct){
        throw new Error("When creating AbstractProduct object, you can`t create instance of AbstractProduct")
    }
    AbstractProduct.prototype.id++; //auto increment
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.quantity = quantity;
    this.date =  new Date().toISOString();
    this.reviews = reviews;
    this.images = images;
};

//add properties and methods to AbstracProduct.prototype
 Object.assign(AbstractProduct.prototype,{ 
    //properties
    id:"0",

    //getters   
    getID() { return this.ID },
    getName() { return this.name } ,
    getDescription() { return this.description},
    getPrice() { return this.price},
    getBrand() { return this.brand},
    getQuantity() { return this.quantity},
    getDate() { return this.date},
    getReviews() { return this.reviews},
    getImages() { return this.images},

    //setters
    setName(name) { this.name = name},
    setDescription(description) { this.description = description},
    setPrice(price) { this.price = price},
    setBrand(brand) { this.brand = brand},
    setQuantity(quantity) { this.quantity = quantity},
    setDate(date) { this.date = date},
    setReviews(reviews) { this.reviews = reviews},
    setImages(images) { this.images = images},

    //methods
    getReviewById(ID) { return this.reviews.find(r => r.getID() === ID )} ,
    
    getImage(path) { return path !== undefined ? this.images.find(img => img === path) : this.images[0]},
     
    addReview(review) { this.reviews.push(review)},
 
    deleteReview(ID) { return this.reviews = this.reviews.filter(r => r.getID === ID)},
 
    getAverageRating() { 
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
         const res = total/count;
         return  res.toFixed(1);
     },
    getFullInformation() { return Object.keys(this).map( prop => console.log((`${prop}: ${this[prop]}`)))},

    getPriceForQuantity(countProducts){ return `$${(this.price * countProducts).toFixed(2)}`},

    getterSetter(prop, value) {
        if (prop in this){
             if(value) this[prop] = value
             else return this[prop];
        }else{
            console.log("No Such properties!!");
        }
     },

 }); 
//---------------End AbstractProduct constructor---------------

/**
 * Consturctor-function create new Revives instance
 *  with follows properties
 * 
 * @param {string} ID uniqu value of review
 * @param {string} author of review
 * @param {Date} date of creating reviews
 * @param {string} comment for review
 * @param {Map<string,number>} raiting of 'service', 'price', 'value', 'quality'                              
 */
function Reviews(author,comment, rating){
    
    this.ID = Reviews.prototype.id++; //auto increment
    this.author = author;
    this.date =  new Date().toISOString();
    this.comment = comment;
    this.rating = new Map ([
        ["servise",rating[0]],
        ["price",rating[1]],
        ["value",rating[2]],
        ["quality",rating[3]]
    ]);
};

//add properties and methods to Reviews.prototype
Object.assign(Reviews.prototype,{
    //properties
    id:"1",
    //getters
    getID() { return this.ID },
    getAuthor() { return this.author },
    getComment() { return this.comment },
    getRaiting() { return this.rating },

    //setters
    setAuthor(author) { this.author = author }, 
    setDate(date) { this.date = date} ,
    setComment(comment) { this.comment = comment },
    setRating(rating) { this.rating = rating },
});
/*---------------End Reviwes constructor---------------*/

/**
 * Consturctor-function create new Clothes instance
 * with follows properties and inherits ...rest properties from  AbstractProducts
 * @param {number} sizes
 * @param {activeSize} activeSize
 * @param {stirg} material 
 * @param {string} color 
 * @param  {...any} rest param from AbstractProduct
 */
function Clothes(sizes, activeSize, material, color, ...rest){

    AbstractProduct.apply(this,rest)
    this.ID = Clothes.prototype.id++;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.material = material;
    this.color = color;
}

// Clothes.prototype = Object.create(AbstractProduct.prototype);
Object.setPrototypeOf(Clothes.prototype,AbstractProduct.prototype)

Object.assign(Clothes.prototype,{
sizeChecker: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
id:"1",
//geters
getSizes() { return this.sizes},
getActiveSize() { return this.activeSize},
getMatarial() { return this.material },
getColor() { return this.color },

//setters
setSizes(sizes){ this.sizes = sizes.map(s => s.toUpperCase())},
setActiveSize (activeSize) { this.activeSize = activeSize.toUpperCase()},
setMaterial (material) { this.material = material },
setColor (color) { this.color = color },

//methods
addSize(size) {
    size = size.toUpperCase();    
    if (Clothes.prototype.sizeChecker.includes(size) && !(this.sizes.includes(size))){
            this.sizes.push(size);
        }
},

deleteSize(size) {
    size = size.toUpperCase();  
    if (Clothes.prototype.sizeChecker.includes(size) && (this.sizes.includes(size))){
              this.sizes = this.sizes.filter(s => s !== size)
        }
},
});
//---------------End Clothes constructor---------------

/**
 * Consturctor-function create new Clothes instance
 * with follows properties and inherits ...rest properties from  AbstractProducts
 * 
 * @param {number} power 
 * @param {number} warranty 
 * @param  {...any} rest 
 */
function Electronics( power, warranty,...rest){

    AbstractProduct.apply(this, rest)
    this.ID = Electronics.prototype.id++;
    this.power = power;
    this.warranty = warranty;
}

// Electronics.prototype = Object.create(AbstractProduct.prototype);
Object.setPrototypeOf(Electronics.prototype,AbstractProduct.prototype)

//add properties to Electronics.prototype
Object.assign(Electronics.prototype,{
    id:"1",
    //getters
    getPower() { return this.power},
    getWarranty() { return this.warranty},

    //setters
    setPower(power) { this.power = power},
    setWarranty(warranty) { this.warranty = warranty},
});
//---------------End Electronics constructor---------------
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
/*----------------tests in console---------------*/

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
const c1 = new Clothes(['S', 'M', 'XL'], "M","Cotton","white","a-shirt", "Material is cotton, color white, made in modern style ", 99,"H&M",100, [], []);
const c2 = new Clothes(['M', 'L', 'XL', 'XXL'],"L","blue","jins","jacet", "Material is jins, color blue, made in modern style ", 199,"H&M", 50, arrReviwes, arrImages);
const e1 = new Electronics(220,100,"TV","Smart-tv,16m colors",999,"LG",6,[],[]);
const e2 = new Electronics(220,100,"Refrigerator","Smart - refrigerator,no-frost",799,"LG",9,arrReviwes,arrImages);
//products array
const arrClothes = [c2,c1];
const arrElectronics= [e2,e1];

/* calls methods */

// const AbstracProduct = new AbstractProduct();
/*setters*/

// c1.setName("Other product");
// c1.setDescription("Some discripttion");
// c1.setPrice(299);
// c1.setBrand("Other brand");
// c1.setSizes(["xs","s","m"]);
// c1.setActiveSize("s");
// c1.setReviews(arrReviwes);
// c1.setImages(arrImages);

// e1.setName("Other product");
// e1.setDescription("Some discripttion");
// e1.setPower(230);
// e1.setWarranty(0);
// e1.setPrice(299);
// e1.setBrand("Other brand");
// e1.setReviews(arrReviwes);
// e1.setImages(arrImages);


// /*getters*/ 

// console.log(c1.getID());
// console.log(c1.getName());
// console.log(c1.getDescription());
// console.log(c1.getPrice());
// console.log(c1.getBrand());
// console.log(c1.getSizes());
// console.log(c1.getActiveSize());
// console.log(c1.getReviews());
// console.log(c1.getImages());

// console.log(e1.getID());
// console.log(e1.getName());
// console.log(e1.getDescription());
// console.log(e1.getPrice());
// console.log(e1.getBrand());
// console.log(e1.getPower());
// console.log(e1.getWarranty());
// console.log(e1.getReviews());
// console.log(e1.getImages());

/*methods*/ 

// getReviewByID
// console.log(review_2);
// console.log(c2.getReviewById(1));
// console.log(e2.getReviewById(2));

// getImage
// console.log(c2.getImage()); //default value is first image in array
// console.log(arrImages[0]);
// console.log(c2.getImage("../img_3.jpg"));

// console.log(e2.getImage()); //default value is first image in array
// console.log(arrImages[0]);
// console.log(e2.getImage("../img_2.jpg"));

// addSize
// console.log(c1.getSizes());
// c1.addSize('xxl');
// console.log(c1.getSizes());

//deleteSize
// console.log(c1.getSizes());
// c1.deleteSize('m');
// console.log(c1.getSizes());

//addReview
// console.log(c1.getReviews());
// c1.addReview(new Reviews("Sam","Some text",[7,5,6,4]));
// console.log(c1.getReviews());

// console.log(e1.getReviews());
// e1.addReview(new Reviews("Din","Some text and more text ",[7,5,6,4]));
// console.log(e1.getReviews());

//deleteReview 
// c1.addReview(new Reviews("Sam","Some text",[7,5,6,4]));
// console.log(c1.getReviews());
// c1.deleteReview(0)
// console.log(c1.getReviews());

// e1.addReview(new Reviews("Din","Some text and more text ",[7,5,6,4]));
// console.log(e1.getReviews());
// e1.deleteReview(0)
// console.log(e1.getReviews());

//getAverageRating
// c1.addReview(new Reviews("Sam","Some text",[6,7,7,8]));
// c1.addReview(new Reviews("Din","Good jacet",[10,6,8,9]));
// console.log(c1.getAverageRating());

// e1.addReview(new Reviews("Sam","Some text",[6,4,2,3]));
// e1.addReview(new Reviews("Din","Good jacet",[4,10,5,4]));
// console.log(e1.getAverageRating());

//searchProduct
// let searchColor = searchProduct(arrClothes,"white");
// console.log(searchColor);
// let searchName = searchProduct(arrClothes,"jacet");
// console.log(searchName);

// let searchTV = searchProduct(arrElectronics,"TV");
// console.log(searchTV);
// let searchRefrigerator = searchProduct(arrElectronics,"Refri");
// console.log(searchRefrigerator);


//sortProducts
// console.log(arrClothes); 
// console.log(sortProduct(arrClothes,"id"));
// console.log(sortProduct(arrClothes,"price"));
// console.log(sortProduct(arrClothes,"name"));

// console.log(arrElectronics);
// console.log(sortProduct(arrElectronics,"id"));
// console.log(sortProduct(arrElectronics,"price"));
// console.log(sortProduct(arrElectronics,"name"));

//getFullInformation
// c1.getFullInformation();
// e2.getFullInformation();

// getPriceForQuantity
console.log(e1.getPriceForQuantity(4));
console.log(c1.getPriceForQuantity(3));