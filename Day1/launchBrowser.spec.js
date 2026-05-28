var browserName = 'chrome';
var testName = 'smoke';
function launchBrowser(browserName){
    if (browserName === 'chrome') {
        console.log('Launching Chrome browser');
    }else if (browserName === 'firefox') {
        console.log('Launching Firefox browser');
    }else if (browserName === 'edge') {
        console.log('Launching Edge browser');
    }else if (browserName === 'safari') {
        console.log('Launching Safari browser');
    }
}

function testType(testName){
    switch(testName){
        case 'smoke':
            return 'Executing smoke test';
        case 'regression':
            return 'Executing regression test';
    }
}

launchBrowser(browserName);
launchBrowser("firefox");
launchBrowser('edge');
launchBrowser('safari');   
console.log(testType(testName));
console.log(testType('regression'));