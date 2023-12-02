const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        let readMessage = 'read'
        if (!this.read) {
            readMessage = "not read yet"
        }

        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`
    };
}

function addBooktoLibrary() {

}

const book1 = new Book("book1title", "Jonathan", 1000, true)

console.log(book1.info())