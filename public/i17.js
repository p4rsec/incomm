/*'.addBill'.onclick=function(){
  var newBill = document.createElement('div');
   newBill.textContent = "<div class='col-lg-6 col-xl-6 portfolio-item image-container' id='lawn-maintenance'><div class='card h-100'><a href='#'><img class='utility-icon padding' src='https://image.flaticon.com/icons/svg/941/941801.svg' alt=''></a><div class='card-body'><h4 class='card-title'><a href='#''>Lawn Maintenance</a></h4><p class='card-text'>Your recurring payment of <span class='billTwoTotal'><b>$100.00</b></span> will be made on <span class='billTwoDueDate'><b>Tuesday, September 25, 2018.</b></span></p></div></div></div>";
   '.bills'.appendChild(newBill);
         }*/
        
let payNow = {
  title: 'Pay Now',
  total: '$2,100.00',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/211/211054.svg',
};

let carPayment= {
  title: 'Wells Fargo Dealer Services',
  total: '$450.00',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/171/171240.svg',
};

let phonePayment = {
  title: 'Verizon Wireless',
  total: '$125.25',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/1022/1022958.svg',
};

let lawnPayment = {
  title: 'Lawn Maintenance',
  total: '$100.00',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/941/941801.svg',
};

let housePayment = {
  title: 'Rent',
  total: '$1,200.00',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/1014/1014723.svg',
};

let cablePayment = {
  title: 'Xfinity Cable and Internet',
  total: '$125.00',
  date: 'Tuesday, September 25, 2018',
  image: 'https://image.flaticon.com/icons/svg/1002/1002288.svg',
};


let arr = [carPayment, phonePayment, lawnPayment, housePayment, cablePayment];
console.log(carPayment);

function template (object) {
  console.log(object);
  let templateString = 
  '<div class="col-lg-6 col-xl-6 portfolio-item image-container d-inline-block">'
  + '<div class="card h-100">'
  + '<a href="#">'
  + '<img class="utility-icon padding" src="'
  + object.image 
  +'"</a>'
  +'<div class="card-body">'
  +'<h4 class="card-title">'
  +'<a href="#">'
  +object.title
  +'</a>'
  +'</h4>'
  +'<p class="card-text">'
  +'Your recurring payment of ' 
  +'<span class="billTwoTotal">'
  +'<b>'
  +object.total
  +'</b>'
  +'</span>' 
  +' will be made on '
  +'<span class="billTwoDueDate">'
  +'<b>'
  +object.date
  +'</b>'
  +'</span>'
  +'</p>'
  +'</div>'
  +'</div>'
  +'</div>'
  return templateString;  
}

let stuff = arr.reduce((accumulator, currentObject) => accumulator += template(currentObject));
document.getElementById('container').innerHTML = stuff;


