const container = document.querySelector('#container');

const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.com/v2/name/germany");
request.send();

//to get the response
request.addEventListener('load', function(){
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data); 
    // console.log(data.capital); 
    const htmlData = `
    <div id="card">
    <article class="card">
        <div class="card-body">
            <img src="${data.flag}" alt="" class="card-body-img">
            <h1 class="card-body-title">
                ${data.name} <span></span>
            </h1>
            <p class="card-body-text">Capital : ${data.capital}</p>
        </div>
        <div class="card-footer">
            <div class="card-footer-social">
                <h3>${data.nativeName}</h3>
                <p>Native Language</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.population}</h3>
                <p>Population</p>
            </div>
            <div class="card-footer-social">
                <h3>${data.demonym}</h3>
                <p>Demonym</p>
            </div>
        </div>    
    </article>
</div>
    `;
    container.insertAdjacentHTML("afterbegin", htmlData);
    
    //afterbegin : It is a part of DOMString: representing the position relative to the element; must be one of the following - a. beforebegin, b. afterbegin c. beforeend and d. afterend
})