// EX 1
// Modify the getNextTarget function so that
// if there is a link it behaves as before, but
// if there is no link tag in the input string,
// it outputs [null, 0].


function getNextTarget(page){
    
    let indexStartUrl = page.indexOf('a href="');
    // console.log(indexStartUrl);
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
getNextTarget('<a href="http://www.xkcd.com">');

// console.log(getNextTarget("some string")) => [null, 0]
// console.log(getNextTarget('<div class=" float-left">')) => [null, 0]
// console.log(getNextTarget('<a href="http://www.xkcd.com">')) => ['http://www.xkcd.com', 28]

//EX 2
// Modify the printAllLinks function so that
// it prints all the links available in the page


let textPage = `
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Udacity</title>
</head>


<body>
<h1>ClickSchool</h1>


<p><b>Click School</b> is a private institution of
    <a href="http://www.wikipedia.org/wiki/Higher_education">higher education founded with the goal to provide university-level education that is "both high quality and low cost". It is the outgrowth of a free computer science class offered in 2022 through Stanford University.
<a href="http://www.wikipedia.org/wiki/Digital_Life_Design">Digital Life Design</a>
conference.</p>
<p><b>Click School</b> is a private institution of
    <a href="http://www.wikipedia.org/wiki/Higher_education">higher education founded with the goal to provide university-level education that is "both high quality and low cost". It is the outgrowth of a free computer science class offered in 2022 through Stanford University.
<a href="http://www.wikipedia.org/wiki/Digital_Life_Design">Digital Life Design</a>
conference.</p>
<p><b>Click School</b> is a private institution of
    <a href="http://www.wikipedia.org/wiki/Higher_education">higher education founded with the goal to provide university-level education that is "both high quality and low cost". It is the outgrowth of a free computer science class offered in 2022 through Stanford University.
<a href="http://www.wikipedia.org/wiki/Digital_Life_Design">Digital Life Design</a>
conference.</p>
</body>
</html>
`;
function printAllLinks(text){
    console.log('aici obtinem rezultatele EX: 2');
   let indexUrl = 0;
   while (indexUrl >= 0) {
        
        indexUrl = text.indexOf('a href="', indexUrl +1);
        
    if (indexUrl >= 0) {
        let firstQuotesIndex = text.indexOf('"', indexUrl);
        let secondQuotesIndex = text.indexOf('"', firstQuotesIndex + 1);
        let url = text.substring(firstQuotesIndex+1, secondQuotesIndex);
        let indexOfUrl = text.indexOf(url);
        console.log(url, indexOfUrl);
    } else {
        console.log([null, 0]);
    }
   }
}
printAllLinks(textPage);

// printAllLinks(page) 
// prints
// http://www.wikipedia.org/wiki/Higher_education
// http://www.wikipedia.org/wiki/Digital_Life_Design


// EX 3 GOLD STAR

function printMultiplicationTable(number) {
    let i = 1;
    while (i <= number) {
      let j = 1;
      while (j <= number) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
      }
      i++;
    }
  }
  printMultiplicationTable(2);
