// EX 1
// Modify the getNextTarget function so that
// if there is a link it behaves as before, but
// if there is no link tag in the input string,
// it outputs [null, 0].


function getNextTarget(page){
    let indexStartUrl = page.indexOf('a href="');
    console.log(indexStartUrl);
    if (indexStartUrl >= 0) {
        let firstQuotesIndex = page.indexOf('"', indexStartUrl);
        let secondQuotesIndex = page.indexOf('"', firstQuotesIndex + 1);
        let url = page.substring(firstQuotesIndex+1, secondQuotesIndex);
        let indexOfUrl = page.indexOf(url);
        console.log(url, indexOfUrl);
    } else {
        console.log([null, 0]);
    }
}
getNextTarget('page');

// console.log(getNextTarget("some string")) => [null, 0]
// console.log(getNextTarget('<div class=" float-left">')) => [null, 0]
// console.log(getNextTarget('<a href="http://www.xkcd.com">')) => ['http://www.xkcd.com', 28]

