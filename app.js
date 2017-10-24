const fs = require('fs');

target = 50


fs.readdirSync('./').forEach(student => {
    if (student !== 'app.js' && student !== 'tempCodeRunnerFile.js' && student !== 'test.txt') {
        var isFolderOrderd = false
        fs.readdirSync(`./${student}`).forEach(ExerciseRunner => {
            if (ExerciseRunner === 'ExerciseRunner') {
                isFolderOrderd = true
                fs.readdirSync(`./${student}/ExerciseRunner`).forEach(exsFolder => {
                    if (exsFolder === 'ex') {
                        var exs = fs.readdirSync(`./${student}/ExerciseRunner/ex`)
                        var isTargetDone = exs.includes(`${target}.js`);
                        console.log(`${student} : ${isTargetDone}`);
                    }
                })
            } 
        })
        if(!isFolderOrderd) console.log(`${student} have to fix his fodler`)
    }
})


