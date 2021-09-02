const searchBookByName = () => {
    const serachInput = document.getElementById('search-input');
    const seracahValue = serachInput.value;
    if (seracahValue !== '') {
        // clear data 
        serachInput.value = "";
        // load data
        const url = `https://openlibrary.org/search.json?q=${seracahValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data, seracahValue))
    }
    else {
        document.getElementById('result-amount').innerHTML = `
            <h3 class="result-amount-bar">Please write book name or author name then search</h3>
        `;
    }
}
const displaySearchResult = (books, seracahValue) => {
    console.log(books);

    // Show search amount or message  
    const searchDiv = document.getElementById('result-amount');
    searchDiv.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.classList.add('result-amount-bar');
    h3.innerText = `${books.numFound} Results found containg '${seracahValue}'
    ${books.docs.length} Result shown`;
    searchDiv.appendChild(h3);
    // show search Result 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.docs.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        // let publisher='';
        // book.publisher.forEach(pub =>{
        //     publisher=publisher+pub+' ';
        // });
        div.innerHTML = `
        <div class="card" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="Image Not Found">
                <div class="card-body">
                    <h3 class="card-title text-center text-success mb-3">${book.title}</h3>
                    <h6 class="card-text"><b class="text-primary">Author Name:</b> ${book.author_name}</h6>
                    <h6 class="card-text"><b class="text-warning">First Published:</b> ${book.first_publish_year} </h6>
                    <p class="card-text"><b class="text-info">Publishers: </b> ${book.publisher}</p>
                </div>
            </div>
    `;
        searchResult.appendChild(div);
    })
}
const getCover = (cover_i) => {
    const url = `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`;
    if (true) {
        console.log(typeof url);
    }
}