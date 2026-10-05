// ==========================================
// BOOK WEBSITE JAVASCRIPT
// ==========================================


// FAVORITES
let favoriteCount = 0;


// SEARCH BOOKS
function searchBooks() {

    const searchInput =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const books =
        document.querySelectorAll(".book-card");

    let visibleBooks = 0;

    books.forEach(function(book) {

        const title =
            book.dataset.title.toLowerCase();

        const author =
            book.dataset.author.toLowerCase();

        if (
            title.includes(searchInput) ||
            author.includes(searchInput)
        ) {

            book.style.display = "block";

            visibleBooks++;

        } else {

            book.style.display = "none";

        }

    });

    updateBookCount(visibleBooks);

    checkNoBooks(visibleBooks);
}


// FILTER BOOKS
function filterBooks(category) {

    const books =
        document.querySelectorAll(".book-card");

    let visibleBooks = 0;

    books.forEach(function(book) {

        if (
            category === "all" ||
            book.dataset.category === category
        ) {

            book.style.display = "block";

            visibleBooks++;

        } else {

            book.style.display = "none";

        }

    });

    updateBookCount(visibleBooks);

    checkNoBooks(visibleBooks);

    // Clear search box
    document.getElementById("searchInput").value = "";

}


// UPDATE BOOK COUNT
function updateBookCount(count) {

    document.getElementById("bookCount")
        .textContent =
        count + " books available";

}


// CHECK NO BOOKS
function checkNoBooks(count) {

    const message =
        document.getElementById("noBooks");

    if (count === 0) {

        message.style.display = "block";

    } else {

        message.style.display = "none";

    }

}


// SHOW BOOK DETAILS
function showDetails(title, author, description) {

    document.getElementById("modalTitle")
        .textContent = title;

    document.getElementById("modalAuthor")
        .textContent = author;

    document.getElementById("modalDescription")
        .textContent = description;

    document.getElementById("detailsModal")
        .style.display = "flex";

}


// CLOSE MODAL
function closeModal() {

    document.getElementById("detailsModal")
        .style.display = "none";

}


// CLOSE MODAL WHEN CLICKING OUTSIDE
window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("detailsModal");

    if (event.target === modal) {

        closeModal();

    }

});


// ADD TO FAVORITES
function addFavorite(button) {

    if (button.classList.contains("active")) {

        button.classList.remove("active");

        button.textContent = "♡";

        favoriteCount--;

    } else {

        button.classList.add("active");

        button.textContent = "♥";

        favoriteCount++;

    }

    document.getElementById("favoriteCount")
        .textContent = favoriteCount;

}


// SHOW FAVORITES
function showFavorites() {

    if (favoriteCount === 0) {

        alert("You haven't added any books to favorites yet.");

    } else {

        alert(
            "You have " +
            favoriteCount +
            " favorite book(s) ❤️"
        );

    }

}


// INITIAL BOOK COUNT
window.addEventListener("DOMContentLoaded", function() {

    const books =
        document.querySelectorAll(".book-card");

    updateBookCount(books.length);

});