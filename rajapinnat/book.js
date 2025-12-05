// book.js

const book = {

    // Array taulukon tietoihin
    bookArray: [
        { id_book: 1,  name: "Everything You Ever Wanted to Know", author: "Upton",    isbn: "082305649x" },
        { id_book: 2,  name: "Photography",                      author: "Vilppu",    isbn: "205711499" },
        { id_book: 3,  name: "Drawing Manual Vilppu",            author: "Zelanshi",  isbn: "1892053039" },
        { id_book: 4,  name: "TBA",                              author: "Zelanshi",  isbn: "0534613932" },
        { id_book: 5,  name: "Shaping Space",                    author: "Speight",   isbn: "0534613934" },
        { id_book: 6,  name: "Art Since 1940",                   author: "Speight",   isbn: "0131839780" },
        { id_book: 7,  name: "Make it in Clay",                  author: "Stokstad",  isbn: "0076417011" },
        { id_book: 8,  name: "Art History Vol II & ala carte lab", author: "Stokstad", isbn: "205795617" },
        { id_book: 9,  name: "Accounting Concepts",              author: "Albrecht",  isbn: "1111287856" },
        { id_book: 10, name: "Intermediate Accounting",          author: "Stice",     isbn: "0538479736" },
        { id_book: 11, name: "Management Info Systems",          author: "Marakas",   isbn: "9780073376813" },
        { id_book: 12, name: "Management",                       author: "Williams",  isbn: "9780757524028" },
        { id_book: 13, name: "Leadership Wisdom of Jesus",       author: "Manz",      isbn: "9781609940041" },
        { id_book: 14, name: "Business Law Today",               author: "Miller",    isbn: "9780324786156" },
        { id_book: 15, name: "Management Info Systems",          author: "Marakas",   isbn: "9780073376813" }
    ],

    // Tulostaa kaikki kirjat
    getAllBooks: function() {
        console.log("All books:");
        console.log(this.bookArray);
    },

    // Tulostaa yhden kirjan id:n perusteella
    getOneBook: function(x) {
        const book = this.bookArray.find(b => b.id_book === x);
        if (book) {
            console.log("Book with id", x, ":", book);
        } else {
            console.log("Book not found with id:", x);
        }
    },

    // Lisää kirjan taulukkoon
    addBook: function(id_book, name, author, isbn) {
        const newBook = { id_book, name, author, isbn };
        this.bookArray.push(newBook);
        console.log("Book added:", newBook);
    }

};


// === TESTIT ===

// 1. Tulosta kaikki kirjat
book.getAllBooks();

// 2. Tulosta yksi kirja
book.getOneBook(3);

// 3. Lisää uusi kirja
book.addBook(16, "Testi Kirja", "Testi Tekija", "9999999999");

// 4. Tulosta kaikki kirjat uudelleen
book.getAllBooks();
