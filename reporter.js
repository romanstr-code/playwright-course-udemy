class MyReporter{
    onBegin(config, suite){
        console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test){
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test, results){
        console.log(`Finished Test ${test.title}: ${results.status}`);
    }

    onEnd(result){
        console.log(`Finished the run: ${result.status}`);
    }
}

module.exports = MyReporter;