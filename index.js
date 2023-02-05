const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.eu/rest/v2/name/nepal");
request.send();

//to get the response
request.addEventListener('load', function(){
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data); 
    const htmlData = `
    
    `;
    container.insertAdjacentHTML("afterbegin".htmlData);
    
    //afterbegin : It is a part of DOMString: representing the position relative to the element; must be one of the following - a. beforebegin, b. afterbegin c. beforeend and d. afterend
})