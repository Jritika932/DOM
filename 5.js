// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
let button=document.getElementsByTagName('button')[0];
button.addEventListener('click',function(){
    let card=document.getElementsByClassName('card')[0];
    card.style.flexDirection='column';
})
