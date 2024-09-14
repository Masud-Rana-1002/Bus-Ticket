let allSeats = document.querySelectorAll('.seat-position')
let selectedSeat = document.querySelector('#selectedSeat')

function createElement(set){
    let div = document.createElement('div')
    selectedSeat.appendChild(div)
  
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.innerText = set
    p2.innerText = 'Economoy';
    p3.innerText = 550

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
   
    div.setAttribute('class','flex justify-between selecteSeat')
 
}

let leftSeats= document.querySelector("#total-seat")
function numberOfSeatLeft(){
    const currentSeat = document.getElementById('total-seat').innerText
    const updateValue = parseInt(currentSeat) - 1
    leftSeats.innerText= updateValue
}


function selected(idName){
    let id = document.getElementById(idName)
    id.classList.add('bg-green-600')
    id.style.color ="#fff"
    }

let selectedSeatArr = []
let totalPriceArr = []

for(let seat of allSeats){
    seat.addEventListener('click', (event) => {
        let seat = event.target.innerText
     
        selectedSeatArr.push(seat)
        if(selectedSeatArr.length > 3){
            alert("You cannot take more than three seats")
           }else{
            selected(seat)
            createElement(seat)
            numberOfSeatLeft()
            let selecteSeat = document.querySelector(".selecteSeat")
            let TicketPrice = selecteSeat.childNodes[2].innerText;
            let price = parseInt(TicketPrice)
            totalPriceArr.push(price)
            let totalPrice = 0
            for(let price of totalPriceArr){
                totalPrice += price
            }
            let totalPay = document.getElementById('totaoPay')
            totalPay.innerText = totalPrice
           }  
    })
}

