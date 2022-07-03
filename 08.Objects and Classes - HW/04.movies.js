function createMovies(input){
    let movies = [];

    for(let commandLine of input){
        if(commandLine.indexOf('addMovie') == 0){
            let commands = commandLine.split('addMovie ');
            let movie = {name: commands[1]};
            movies.push(movie);
        }
        else if(commandLine.indexOf('directedBy') > 0){
            let commands = commandLine.split(' directedBy ');
            movies = movies.map(x => {
                if(x != undefined && x.name == commands[0]){
                    x.director = commands[1];
                }

                return x;
            });
        }
        else if(commandLine.indexOf('onDate') > 0){
            let commands = commandLine.split(' onDate ');
            movies = movies.map(x => {
                if(x != undefined && x.name == commands[0]){
                    x.date = commands[1];
                }

                return x;
            });
        }
    }

    let moviesToPrint = movies.filter(x => x.name != undefined && x.director != undefined && x.date != undefined);
    for(let movie of moviesToPrint){
        console.log(JSON.stringify(movie));
    }
}

createMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
/*
{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
*/
console.log('-------------------');

createMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);
/*
{"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
*/