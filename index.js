// let count=10;
// console.log(count)
// let myage=20
// let doghumanratio = 7    
// mydogage= myage*doghumanratio
// console.log('my age in human years = ' + myage)
// console.log('my age in dogyears = '+mydogage)
//******************************************* */
 
let count=0
let saveEl= document.getElementById("save-el")
let countEl= document.getElementById('count-el')
function increment(){
    count++
    countEl.textContent=count
} 

function save()
{
    let countmsg = count + ' - '
    saveEl.textContent+=countmsg
    countEl.textContent=0
   count=0
}

