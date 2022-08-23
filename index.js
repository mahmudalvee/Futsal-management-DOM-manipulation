// console.log('welcome fren');
const selectedPlayers= [];
function displaySelectedPlayers(playerList)
{
    // console.log("Player selected: ",playerList);
    // 2-catch table
    const tablenames= document.getElementById('players');
    tablenames.innerHTML='';
    
    // 1-traverse
    for(let i=0; i<selectedPlayers.length; i++){
        // console.log(selectedPlayers[i]);
        const playerName= selectedPlayers[i];
        
        const tr= document.createElement("tr");
        tr.innerHTML= `
        <th scope="row">${i+1}</th>
        <td>${playerName}</td>
        `
        tablenames.appendChild(tr);
    }
}

function addPlayers(element)
{
    // console.log(element.parentNode.children[0].innerText);
    const getName= element.parentNode.children[0].innerText;
    // console.log(getName);
    selectedPlayers.push(getName);
    // console.log(selectedPlayers);
    if(selectedPlayers.length>5){
        alert('Ooops!!!\nYou can not select more than 5 players.');
        selectedPlayers.length= 5;
        return;
    }
    // btn disable
    element.parentNode.children[5].setAttribute('disabled',true);
    const totalSelectedPlayers= document.getElementById('selectedPlayerNo');
    totalSelectedPlayers.innerText= selectedPlayers.length;

    displaySelectedPlayers(selectedPlayers);
}



function getInputValueById(inputFieldId){
    // GET any inputfield value
    const inputField= document.getElementById(inputFieldId);
    const inputFieldString= inputField.value;
    const inputFieldValue= parseFloat(inputFieldString);
    return inputFieldValue;
}


function setElementValueTextById(elementId, newValue){
    // SET any innerText value on html
    const element= document.getElementById(elementId);
    element.innerText= newValue;
}

//prothom hishab
let prothomHishabValue= 0;
document.getElementById('calulate-btn').addEventListener('click',function(){
    // get player cost
    const perPlayerAmount= getInputValueById('per-player-input');
    if(selectedPlayers.length <= 0)
    {
        alert('Calculation Error!!!\nPlease select Player(s) first.');
        return;
    }
    if(isNaN(perPlayerAmount) || perPlayerAmount <= 0)
    {
        alert('Calculation Error!!!\nPlease enter valid digit cost$ of Players.');
        return;
    }
    // total hishab
    if(selectedPlayers.length<=5){
        const playerExpensesTotalAmount= perPlayerAmount * selectedPlayers.length;
    
        // setting the total cost where it belongs (html er id, value)
        setElementValueTextById('playerExpensesAmount',playerExpensesTotalAmount);
        prothomHishabValue= playerExpensesTotalAmount;
    }
    else{
        return;
    }
})

//next hishab
document.getElementById('calulateTotal-btn').addEventListener('click',function(){
    const managerCost= getInputValueById('manager-cost');
    const coachCost= getInputValueById('coach-cost');

    if(selectedPlayers.length <= 0)
    {
        alert('Calculation Error!!!\nPlease select Player(s) first.');
        return;
    }
    if((isNaN(managerCost) || managerCost <= 0) || (isNaN(coachCost) || coachCost <= 0))
    {
        alert('Calculation Error!!!\nPlease enter valid digit cost$ for Manager & Coach.');
        return;
    }
    
    //final hishab
    // prothom hishab er value nite hobe through prothomHishabValue(number)
    
    const totalAmount= prothomHishabValue + managerCost + coachCost;
    setElementValueTextById('total-amount',totalAmount);
    
})