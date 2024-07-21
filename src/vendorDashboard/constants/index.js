import order from "./order.png";
import orders1 from "./orders1.png";
import home from './home.png'
import products from './products.png'
import add from './addProducts.png'
import user from  './user.png'
import logout from './logout.png'
import revenue from './revenue.png'
import firm from './firm.png'
import hamburger from './hamburger.png'
import man from './man.png'
import {collab,collab1,cook,cook1,cust,customers,discuss,food,food1,food2,food4,owner,owner1,kitchen,profit,profit1,smile,smile1, comp} from './images'

export { order, orders1, home, products, add, user, revenue, logout, firm, hamburger };

export const soldOut = [
  { index: "01", item: "Cheese Burger" },
  { index: "02", item: "Veg Pizza" },
  { index: "03", item: "Chicken Biryani" },
  { index: "04", item: "Cheese Burger" },
  { index: "05", item: "Cheese Burger" },
];

export const shift = [
  { img: "01", name: "Cindrella liar", time:"06:30 PM", role:"Cashier" },
  { img: "02", name: "Oliver", time:"06:30 PM", role:"Cashier" },
  { img: "03", name: "Hazel Wood", time:"06:30 PM", role:"Cashier" },
  { img: "04", name: "John Norman", time:"06:30 PM", role:"Cashier" },
  { img: "05", name: "Ceaser", time:"06:30 PM", role:"Cashier" },
  
];

export const cards = [
  { img: {order}, title: "Total Items", percent:"3.5%", orders:"29" },
  { img: {order}, title: "Total Orders", percent:"2.5%", orders:"63" },
  { img: {order}, title: "Processing Orders", percent:"", orders:"4" }
];

export const navLinks = [
  {title:"Home", href:"/"},
  {title:"ForCustomers", href:"/"},
  {title:"ForRestaurants", href:"/"},
  {title:"Contact", href:"/"}
]

export const partner = [
  { src: customers, title: "Reach More Customers", text:"By joining our platform, you can reach a larger audience and attract more customers who are looking for delicious food just like yours." },
  { src: profit, title: "Increase Your Revenue", text:"Our platform provides you with tools to manage promotions and discounts, helping you increase your sales and revenue." },
  { src: owner1, title: "Easy Order Management", text:"With our intuitive dashboard, you can easily manage your orders, track delivery statuses, and ensure customer satisfaction." }
]

export const steps =[
  {step:"Step 1",title:"Sign Up", text:"Create an account and provide your restaurant details."},
  {step:"Step 2",title:"Set Up Your Menu", text:"Add your dishes, prices, and descriptions to attract customers."},
  {step:"Step 3",title:"Start Receiving Orders", text:"Begin receiving orders and grow your business."},
]

export const testmonials = [
  { src: man, title: "Owner of John's Diner", text:'FoodOrdering Platform has significantly increased our customer base. The easy-to-use dashboard makes managing orders a breeze!' },
  { src: man, title: "Owner of Tasty Treats", text:'Since joining FoodOrdering Platform, we have seen a 30% increase in our sales. The promotional tools are fantastic.' },
  { src: man, title: "Owner of Mike's Cafe", text:'The support team is excellent, and the platform is very user-friendly. I highly recommend it to other restaurant owners.' }
]