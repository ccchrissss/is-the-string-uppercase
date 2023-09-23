String.prototype.isUpperCase = function() {
  return this === this.toUpperCase()
}

'HeLLO'.prototype.isUpperCase()


// console.log('HeLLO'.prototype.isUpperCase())

// parameter: String    // not techincally a parameter but it is the object upon which the method is called
// return: boolean
// e.g. 'HeLLO'.prototype.isUpperCase()
// results in false

// return a strict comparison of the string and the string with .toUpperCase method called upon it