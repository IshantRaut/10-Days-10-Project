const searchTermElem = document.querySelector("#searchTerm");
const searchResultElem = document.querySelector("#searchResult");

searchTermElem.focus();

searchTermElem.addEventListener("input", function (event) {
  search(event.target.value);
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    //setupe new timer
    timeoutId = setInterval(() => {
      fn.apply(null, args);
    }, delay);
  };
};

const search = debounce(async (searchTerm) => {
  //If search term is remove
  //reset the search result
  if (!searchTerm) {
    searchResultElem.innerHTML = "";
    return;
  }
  try {
    // make an API request
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
    const response = await fetch(url);
    const searchResults = await response.json();

    //render search
    const searchResultHtml = generateSearchResultHTML(
      searchResults.query.search,
      searchTerm
    );

    //add the search result to searchResultElem
    searchResultElem.innerHTML = searchResultHtml;
  } catch (error) {
    console.log(error);
  }
});
const stripHtml = (html) => {
    let div = document.createElement('div');
    div.innerHTML=html;
    return div.textContent;
};

const highlight = (str, keyword, className = "highlight") =>{
    const hl = `<span class="${className}">${keyword}</span>`;
    return str.replace(new RegExp(keyword, 'gi'), hl);
};
const generateSearchResultHTML = (results, searchTerm) => {
    return results
        .map(result => {
            const title = highlight(stripHtml(result.title), searchTerm);
            const snippet = highlight(stripHtml(result.snippet), searchTerm);

            return `<article>
                <a href="https://en.wikipedia.org/?curid=${result.pageid}">
                    <h2>${title}</h2>
                </a>
                <div class="summary">${snippet}...</div>
            </article>`;
        })
        .join('');
}
