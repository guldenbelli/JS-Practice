class Book {
  constructor(title, author, color, pages, dateAcquired) {
    this.title = title;
    this.author = author;
    this.color = color;
    this.pages = pages;
    this.dateAcquired = dateAcquired;
  }
  bookAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Book;
