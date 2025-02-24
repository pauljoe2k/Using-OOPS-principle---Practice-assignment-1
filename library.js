// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `You borrowed "${this.title}"`;
        } else {
            return `"${this.title}" is currently unavailable.`;
        }
    }

    returnBook() {
        this.isAvailable = true;
        return `You returned "${this.title}"`;
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            return book.borrowBook();
        } else {
            return `"${book.title}" is not available for borrowing.`;
        }
    }

    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            return book.returnBook();
        } else {
            return `${this.name} does not have "${book.title}".`;
        }
    }
}

// Create book instances
const book1 = new Book("Percy Jackson", "Rick Riordan", "111222");
const book2 = new Book("A Good Girl's Guide to Murder", "Holly Jackson", "333444");

// Create user instance
const user1 = new User("Alice", 1);

// Testing the system
console.log(user1.borrow(book1)); // Alice borrows Percy Jackson
console.log(user1.borrow(book2)); // Alice borrows A Good Girl's Guide to Murder
console.log(user1.borrow(book1)); // Percy Jackson is already borrowed

console.log(user1.return(book1)); // Alice returns Percy Jackson
console.log(user1.borrow(book1)); // Alice borrows Percy Jackson again
console.log(user1.return(book2)); // Alice returns A Good Girl's Guide to Murder
