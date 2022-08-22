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
        return;
    }
    // btn disable
    element.parentNode.children[5].setAttribute('disabled',true);
    const totalSelectedPlayers= document.getElementById('selectedPlayerNo');
    totalSelectedPlayers.innerText= selectedPlayers.length;

    displaySelectedPlayers(selectedPlayers);
}


//prothom hishab
function getInputValueById(inputFieldId){
    // GET any inputfield value
    const inputField= document.getElementById(inputFieldId);
    const inputFieldString= inputField.value;
    const inputFieldValue= parseFloat(inputFieldString);
    inputField.value= '';
    return inputFieldValue;
}

function getElementValueTextById(elementId){
    // GET any innerText value from html
    const element= document.getElementById(elementId);
    const elementValueTextString= element.innerText;
    const elementValueText= parseFloat(elementValueTextString);
    return elementValueText;
}

function prothomHishab(a,b){
    return ans= a*b;
}

function finalHishab(a,b,c){
    return ans= a+b+c;
}

document.getElementById('calulate-btn').addEventListener('click',function(){
    // get player cost
    const perPlayerAmount= getInputValueById('per-player-input');
    if(isNaN(perPlayerAmount) || perPlayerAmount < 0)
    {
        alert('Calculation Error!!!\nPlease enter valid digit cost$ of Players.');
        return;
    }
    // total hishab
    if(selectedPlayers.length>5){
        return;
    }
    //pass parameters to function prothomHishab()
    const playerExpensesTotalAmount= prothomHishab(perPlayerAmount, selectedPlayers.length);
    
    // setting the total cost where it belongs (html er id, value)
    setElementValueTextById('playerExpensesAmount',playerExpensesTotalAmount);
    return playerExpensesTotalAmount;
})