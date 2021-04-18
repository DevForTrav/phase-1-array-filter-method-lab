let findMatching = (names, string) => {
     return names.filter(function(names) {return names.toLowerCase() === string.toLowerCase()})
}

let fuzzyMatch = (names, string) => {
    return names.filter(function(names) {
        if (names.substring(0, string.length) === string) {
            return names
        }
    })
}

let matchName = (names, string) =>   {
    return names.filter(function(names) {
        if(names.name === string) {
            return names.hometown
        }
    })
}