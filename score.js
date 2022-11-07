let box = document.getElementById('box')   
let player1Score = document.getElementById('p1Display') 
let player2Score = document.getElementById('p2Display')
let p1Button = document.getElementById('p1Button') 
let p2Button = document.getElementById('p2Button')  
let count = 0
let gref = 0              
         function player1() {
            let totalscore = Number(box.value)
            if (totalscore == count) {
                p1Button.disable = true
                p2Button.disable = true
                player1Score.style.color = 'green'
                player2Score.style.color = 'red'
                return   
            }
            else {
                count++
                player1Score.innerHTML=count
            }
         }
           
        function player2() {
            let totalscore = Number(box.value)
            if (totalscore == gref){
                p2Button.disable = true
                p1Button.disable = true
                player2Score.style.color = 'green'
                player1Score.style.color = 'red'
                return
            }
            else{
             gref++
             player2Score.innerHTML=gref
            }
        }

         function boom() {
            count=0
            gref = 0
            player1Score.innerHTML=count
            player2Score.innerHTML=gref
            player1Score.style.color = 'black'
            player2Score.style.color = 'black'
         }

