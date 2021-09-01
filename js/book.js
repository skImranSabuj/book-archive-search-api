const searchBookByName = () => {
    const serachInput = document.getElementById('search-input');
    const seracahValue = serachInput.value;
    if (seracahValue != '') {
        // clear data 
        serachInput.value = "";
        const url = `http://openlibrary.org/search.json?q=${seracahValue}`;
        // load data
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs,seracahValue))
    }
}
// .then(data => displaySearchResult(data.meals))
//search result section
const displaySearchResult = (books,seracahValue) => {
    console.log(books);
    const searchResult = document.getElementById('search-result');
    const searchDiv = document.getElementById('result-amount');
    const h3 = document.createElement('h3');
    h3.classList.add('text-center');
    h3.innerText = `${books.length} Results found containg '${seracahValue}'`;
    searchDiv.appendChild(h3);
    // searchResult.innerHTML='';
    searchResult.textContent = '';
    books.forEach(book => {
        // console.log(meals)
        const div = document.createElement('div');

        div.classList.add('col');
        let publisher='';
        book.publisher.forEach(pub =>{
            publisher=publisher+pub+' ';
        });
        div.innerHTML = `
            <div onclick="loadMealDetails(${book.idMeal})" class="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <h3 class="card-title">${book.title}</h3>
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    
                    <h5 class="card-text">First published: ${book.first_publish_year}</h5>
                    <h6 class="card-text">Author Name: ${book.author_name}</h6>
                    <h6 class="card-text">Publishers: ${book.publisher}</h6>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}