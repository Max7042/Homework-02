var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */
heading.innerHTML = newHeading;

for (let i = 0; i < totalItems; i++) {
    if (listItems[i].textContent.toLowerCase() === 'fresh figs' ||
        listItems[i].textContent.toLowerCase() === 'honey' ||
        listItems[i].textContent.toLowerCase() === 'kale') {
        listItems[i].className = 'cool'
    }
}
