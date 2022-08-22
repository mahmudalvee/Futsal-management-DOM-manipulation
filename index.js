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


