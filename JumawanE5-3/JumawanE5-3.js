function replace(){

    let storyText = document.getElementById('story').value;
    let findText = document.getElementById('findThis').value;
    let replaceText = document.getElementById('replaceWith').value;
    
    findText = findText.toLowerCase();
    storyText = storyText.replace(findText,replaceText);
    findText = findText.toUpperCase();
    storyText = storyText.replace(findText,replaceText);

    document.getElementById('story').value = storyText;

    console.log(findText, replaceText, storyText); 

}
function clearTxt(){

    document.getElementById('findThis').value = "";
    document.getElementById('replaceWith').value = "";

}
function undoTxt(){

    let storyText = document.getElementById('story').value = "It was a dark and stormy night...";

}
function txtCount(){

    let text = document.getElementById('story').value;
    let txtLength = text.length;

    alert("There are " + txtLength + " characters");

}
function srcTxt(){
    
    let storyText = document.getElementById('story').value;
    let findText = document.getElementById('findThis').value;
    let searchVar = storyText.search(findText);

    if (searchVar !== -1){
        alert('Your word is in position: '+ searchVar);
    } else {
        alert('Text not found.');
    }
}
function BIG(){

    let storyText = document.getElementById('story').value;

    findText = storyText.toUpperCase();
    storyText = storyText.replace(storyText,findText);

    document.getElementById('story').value = storyText;

}
function smoll(){

    let storyText = document.getElementById('story').value;

    findText = storyText.toLowerCase();
    storyText = storyText.replace(storyText,findText);

    document.getElementById('story').value = storyText;

}
function includeTxt() {
    let storyText = document.getElementById('story').value;
    let findText = document.getElementById('findThis').value;
    let includeVar = storyText.includes(findText);
    alert(includeVar);
}
function lightMode(){
    document.body.style.backgroundImage = "url('white-theme.gif')";
    document.body.style.backgroundSize = "cover";
}
function darkMode(){
    document.body.style.backgroundImage = "url('dark-grey.gif')";
    document.body.style.backgroundSize = "cover";
}
function winterTheme(){
    document.body.style.backgroundImage = "url('1575167_aleha84_snowfall.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
}
function autumnTheme(){
    document.body.style.backgroundImage = "url('autumn-theme.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
}
function summerTheme(){
    document.body.style.backgroundImage = "url('summer-theme.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "black";
}

