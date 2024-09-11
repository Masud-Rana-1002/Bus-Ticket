let set = document.getElementsByClassName('seat-postion')
let deatLeft = document.getElementById('total-seat')
 let lan = deatLeft.innerText = set.length
let yuorSeat = document.getElementById('selacttetSet')
for(let seats of set){
    seats.addEventListener('click', function(event){
        
        let arr=[]
        arr.push(seats.innerText)
        console.log(arr)
        
        let p =  document.createElement('p');
            p.innerText = seats.innerText
            let typeSeat = document.createElement('p');
            typeSeat.innerText ='Economoy "'
            let price = "550" ;
            yuorSeat.appendChild(p)
            yuorSeat.appendChild(typeSeat)
           
            
        

    })
    
    
}
