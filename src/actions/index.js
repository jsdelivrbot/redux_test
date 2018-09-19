export function selectBook(book) {
    // Action to return
    return {
        type: 'BOOK_SELECTED',
        payLoad: book
    }
}