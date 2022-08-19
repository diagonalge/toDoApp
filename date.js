// jshint esversion:6

exports.getDate = function(){

let today = new Date();
    
    let optons = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    return today.toLocaleDateString('en-US', optons);

    
}

exports.getDay = function(){

let today = new Date();
    
    let optons = {
        weekday: 'long',
    }

    return today.toLocaleDateString('en-US', optons);
}
