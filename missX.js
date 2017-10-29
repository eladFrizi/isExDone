const fs = require('fs');

var exNo = process.argv[2];
console.log('Checking Ex', exNo);
// process.exit()


fs.readdirSync('./').forEach(studentName => {
    if (isStudentName(studentName)) {
        // console.log('> ', studentName );
        var isFolderValid = false
        fs.readdirSync(`./${studentName}`).forEach(runnerFolder => {
            if (runnerFolder === 'ExerciseRunner') {
                
                fs.readdirSync(`./${studentName}/ExerciseRunner`).forEach(exsFolder => {
                    if (exsFolder === 'ex') {
                        isFolderValid = true
                        var exs = fs.readdirSync(`./${studentName}/ExerciseRunner/ex`)
                        var isTargetDone = exs.includes(`${exNo}.js`);
                        if (!isTargetDone) console.log(`${studentName} : ${isTargetDone}`);
                    }
                })
            } 
        })
        if (!isFolderValid) console.log(`${studentName} have to fix his fodler`)
    }
})


function isStudentName(str) {
    //student !== 'app.js' && student !== 'tempCodeRunnerFile.js' && student !== 'test.txt'
    return str.includes(' ')
}