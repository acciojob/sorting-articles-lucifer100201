const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let unorderedList = document.querySelector("#band");

function customSort(a, b) {
    const ignoreWord = ['a', 'an', 'the'];
    const getTitle = (band) => band.replace(/^(the |an |a )/i, '');
    const titleA = getTitle(a);
    const titleB = getTitle(b);

    return titleA.localeCompare(titleB);
}

bands.sort(customSort);

bands.forEach((element) => {
    let listItem = document.createElement('li');
    listItem.textContent = element;
    unorderedList.appendChild(listItem);
});
