console.log('Welcome to News Website console');

// Creating an AJAX XHR request 
let xhr = new XMLHttpRequest();

// Instiliazing API variebles
let country = 'in';
let apikey = '7442b35d87d04e2bae55976a6dd97c66';

// We are making a get request to fetch the news in Json format from the given url 
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);

// onload means what to do after the request in being processed or Completed
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let news = "";

        articles.forEach(function (element, index) {

            news += `<div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-heading${index}">
                            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" id='newsDisplay' data-bs-target="#flush-collapse${index}" aria-expanded="true" aria-controls="flush-collapse${index}" style= 'color: black'>
                            <b style='color: #c23e21'>Headline ${index + 1} :     </b> ${element['title']}
                            </button>
                        </h2>
                        <div id="flush-collapse${index}" class="accordion-collapse collapse " aria-labelledby="flush-heading${index}" data-bs-parent="#newsdiv">
                            <img src='${element['urlToImage']}' class="rounded mx-auto d-block my-3"  style = 'width:500px; height:250px;'>
                            <div style= 'color: grey' class="accordion-body">${element.content}. <a href='${element['url']}' target='_blank'>Read more</a></div>
                            <hr>
                            </div>
                        </div>
                    </div> `

        });
        let newsdiv = document.getElementById('newsdiv');
        newsdiv.innerHTML = news;

    } else {
        console.log('Some Error occurred');
    }
}

// We have to send the request to get the response and the result of our above code 
xhr.send();
