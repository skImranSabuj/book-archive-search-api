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

    const found = document.createElement('h3');
    found.classList.add('result-amount-bar');
    found.innerText = `${books.numFound} Results found containg '${seracahValue}'`;

    const shown = document.createElement('h3');
    shown.classList.add('result-amount-bar');
    shown.innerText = `${books.docs.length} Results shown`;

    searchDiv.appendChild(found);
    searchDiv.appendChild(shown);
    // show search Result 
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.docs.forEach(book => {
        //Handleing undefined values
        if (book.author_name === undefined) book.author_name = ['Unknown Author'];
        if (book.first_publish_year === undefined) book.first_publish_year = 'Unknown';
        if (book.publisher === undefined) book.publisher = ['No Publisher found'];
        let imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
        if (book.cover_i === undefined) {
            imgUrl = `images/cover-null.jpg`;
        }
        // loading innerHtmal for search result
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card shadow-lg border-lelt border-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                <img src=${imgUrl} class="card-img-top p-3" alt="Image Not Found">
                <div class="card-body">
                    <h5 class="card-title mb-3 bg-light p-2 rounded"><b class="text-success">Book Name: </b> ${book.title.slice(0, 100)}</h5>
                    <div class="details bg-light p-2 rounded">
                        <h6 class="card-text"><b class="text-success">Author Name: </b>${book.author_name[0]}</h6>
                        <h6 class="card-text"><b class="text-success">First Published:</b> ${book.first_publish_year} </h6>
                        <p class="card-text"><b class="text-success">Publishers: </b> ${book.publisher[0]}</p>
                    </div>
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
const readmore = (bookUrl) => {

}