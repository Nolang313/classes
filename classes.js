class Media {
  constructor(param, title) {
    this._param = param
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    if (this._isCheckedOut == false) {
      this._isCheckedOut = true;
    } else if (this._isCheckedOut == true) {
      this._isCheckedOut = false;
    } else {
      console.log('error, wrong input')
    }
  }
  getAverageRating() {
    let sum = 0
    let length  = this._ratings.length
    for (let i in this._ratings) {
      sum = sum + this._ratings[i];
    }
    return sum/length
  }
  addRating(rate) {
    this._ratings.push(rate)
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status
  }
}

class Book extends Media {
  constructor(author, pages, title) {
    super(title)
    this._pages = pages
    this._author = author
  }
  get pages() {
    return this._pages
  }
  get author() {
    return this._author
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }
  get director() {
    return this._director
    return this._runTime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'Ashort history of nearly everything', 544)

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(5)
historyOfEverything.addRating(9)
historyOfEverything.addRating(4)

console.log(historyOfEverything.getAverageRating())
