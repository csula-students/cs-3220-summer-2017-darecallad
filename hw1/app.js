// single state store
class Store {
    constructor (storage) {
        this.storage = storage; // assuming local storage will be passed in as storage
        // these are the key name you can use in Store
        this.CART_KEY = 'CART';
        this.QUEUE_KEY = 'QUEUE';
        this.FOODS_KEY = 'FOODS';
    }

    // you can get item by store.cartItems
    get cartItems () {
        return JSON.parse(this.storage.getItem(this.CART_KEY));
    }

    // to call setter, simply "assign" like store.cartItems = something
    set cartItems (cartItems) {
        this.storage.setItem(this.CART_KEY, JSON.stringify(cartItems));
    }

    get queue () {
        return JSON.parse(this.storage.getItem(this.QUEUE_KEY));
    }

    set queue (queue) {
        this.storage.setItem(this.QUEUE_KEY, JSON.stringify(queue));
    }

    get foods () {
        return JSON.parse(this.storage.getItem(this.FOODS_KEY));
    }

    set foods (foods) {
        this.storage.setItem(this.FOODS_KEY, JSON.stringify(foods));
    }
}
class Cart {
    // take dom element into JavaScript class to attachment events
    constructor(root, store) {
        this.root = root;
        this.store = store;
        this.items = this.store.cartItems;
        this.init();
    }

    init () {
        // Render a list of items under root element
        this.render();
        // TODO: attach remove cart items to rendered HTML
    }

    destroy () {
        // TODO: remove all the events attached from init
    }

    // remove an item from shopping cart
    removeItem (item) {

        // TODO: logic to remove an item from cart
        // call render method when the item is removed to update view
        this.render();
    }

    placeOrder () {
        // add item to statuses in store as status "in progress"
    }

    addItemtoCart() {
        let result = '';
       
        for(var i = 0; i < this.store.cartItems.length; i ++){
            result += `<tr><td>${this.store.cartItems[i].name }
            </td><td>${this.store.cartItems[i].price}</td>
            <td><button class = "deletebutton" data-id="deletebutton">Delete</button></td></tr>`;
           
            
        }
        

        return result;
    }

     
    // render a list of item under root element
    render () {
        console.log(this.store.cartItems);
         

        let tbody = this.root.querySelector('tbody');
        let thead = this.root.querySelector('thead');
        this.td = `${this.addItemtoCart()}`;
        
        // using innerHTML to render a list of table row item under tbody
        tbody.innerHTML = this.addItemtoCart();

        let deletebutton = this.root.querySelectorAll('.deletebutton');
        
        
        for(var i = 0; i < deletebutton.length; i ++){
            let deleteBtn = deletebutton[i];
            let deletelist = this.store.cartItems;
            let index = i;
            deleteBtn.addEventListener('click',( )=>{
                
                deletelist.splice(index,1);
                this.store.cartItems = deletelist;
                alert("delete item");
                this.render();
            });
        }
        
    }
}

class CheckoutButton {
    constructor(root, store) {
        this.root = root;
        this.store = store;
        this.onClick = () => this.addItemToCart();
        this.init();
    }

    init () {
        this.root.addEventListener('click', this.onClick);
    }

    destroy () {
    }

    addItemToCart () {
        // hint: you can use `dataset` to access data attributes
        // See passing data from HTML to JavaScript from course note
        let cartItems = this.store.cartItems || [];
        // TODO: replace with actual item
        console.log(this.root.dataset);
        cartItems.push({
            name: this.root.dataset.name,
            price: this.root.dataset.price
        });
        console.log(cartItems);
        this.store.cartItems = cartItems;
    }
}

class StatusTable {
    // take dom element into JavaScript class to attachment events
    constructor(root, store) {
        this.root = root;
        this.store = store;
        init();
    }

    init () {
        // attach click event listener to table header row on each column
        this.root.addEventListener('click',this.onClick);
        render();
    }

    destroy () {
        // remove all the events attached from init
        this.root.removeEventListener('click', this.onClick);
    }

    sort (columnName) {
        // after sorting the array of statuses, re render item to update view
        render();
    }

    // render rows of items under table using root.innerHTML
    render () {

    }
}

// DOMContentLoaded event will allow us to run the following function when
// everything is ready. Think of the following code will only be executed by
// the end of document
document.addEventListener('DOMContentLoaded', () => {
    // use querySelector to find the table element (preferably by id selector)
    // let statusTable = document.querySelector('');
    // // use querySelector to find the cart element (preferably by id selector)
    let cart = document.querySelector('.cart-table');
    let checkoutButtons = document.querySelectorAll('.checkout-button');
    let addfoodbutton = document.querySelectorAll('.Add-food-button');
    let inventory = document.querySelector('.inventory-table');

    

    let store = new Store(window.localStorage);
    
    // if (table) {
    //     new StatusTable(table, store);
    // }
    if (cart) {
        new Cart(cart, store);
    }
    if (checkoutButtons && checkoutButtons.length) {
        for (var i = 0; i < checkoutButtons.length; i ++) {
            new CheckoutButton(checkoutButtons[i], store);
        }
    }
    if(inventory){
        new Menu(inventory,store);
    }
    if(addfoodbutton && addfoodbutton.length){
        for(var i =0; i < addfoodbutton.length; i++){
            new CreateFood(addfoodbutton[i], store);
        }
    }
    
});

// continue from Lab2 with Store, CheckoutButton, Cart components
class Inventory {
    constructor(root, store) {
        this.root = root;
        this.store = store;
        this.init();
    }

    init () {
        this.render();
        // TODO: attach event listeners like click to remove items after rendering
    }

    destroy () {
        // TODO: remove event listeners added from the init above
    }

    removeItem (itemName) {
        // TODO: function to remove item given item name from store
    }

    render () {
        // using innerHTML to render inventory listing
    }
}

class Menu {
    constructor(root, store) {
        this.root = root;
        this.store = store;
        this.init();
        this.food= this.store.foods;
    }

    init () {
        this.render();
    }

    render () {
        // TODO: render a list of food menu from store using innerHTML
        var foods = this.store.foods;
        for(var i=0; i< foods.length; i ++){
            console.log(foods[i]);
        }


        let tbody = this.root.querySelector('tbody');
        tbody.innerHTML = this.getHTMLForCart(foods);

        let deleteBtn = this.root.querySelectorAll('.deletebutton');
        let listfood = this.store.foods;
        for(var i=0; i <deletebutton.length; i++){
            let deleteBtn = deletebutton[i];
            let Index = i;
            deleteBtn.addEventListener('click',( )=>{
                listfood.splice(Index,1);
                this.store.foods = listfood;
                alert("delete item");
                this.render();

        
        //tbody.innerHTML = this.addItemtoCart();

        //let deletebutton = this.root.querySelectorAll('.deletebutton');
        
        
        //for(var i = 0; i < deletebutton.length; i ++){
          //  let deleteBtn = deletebutton[i];
           // let deletelist = this.store.cartItems;
           // let index = i;
           // deleteBtn.addEventListener('click',( )=>{
                
               // deletelist.splice(index,1);
                //this.store.cartItems = deletelist;
               // alert("delete item");
                //this.render();
            });
        }
    }

    getHTMLForCart(food){
        var resuelt ='';
        for(var i =0; i <food.length; i ++){
            result = result + "<tr><td>" + food[i].name
                            + "</td><td>" + food[i].price
                            + "</td><td> <button class = 'deletebutton'>Delete</button></td></tr>"  
        }
        return result;
    }
}

class CreateFood {
    constructor(root, store) {
        this.root = root; // root should be the container of the form itself
        this.store = store;
        this.init();
    }

    init () {
        // attach click event to create button
        this.root.addEventListener('click', this.onClick);
    }
    destory(){
        this.root.addEventListener('click',this.onClick);
    }

    createFood () {
        // will need to do querySelector to find out every single form element
        // to get their values before creating a new food
        // after creating a new food item, add it to store
    let foods = this.store.foods || [];
    console.log(this.root.dataset);
    foors.push({

        name:this.root.dataset.name,
        price:this.root.dataset.price
    });
    console.log(foods);
    this.store.foods = foods;

    }
}