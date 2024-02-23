


function randomColor (){
    // const colorCode = document.getElementById('color').innerText;
    const randomNumber = Math.floor(Math.random() * 16777215);
    const colorCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;

    const color = document.getElementById('color').innerText = colorCode;
    
    
}

document.getElementById('btn').addEventListener('click', function(){
    randomColor()
   
})

randomColor()