import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../searchbar/searchbar'; // Import the SearchBar component
import './allbooks.css';

const Library = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); // State to store selected book details
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchBooks = async (isbn) => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
        return response.data.items;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    };

    const loadBooks = async () => {
      const newArrivalsISBNs = [
        '9781787123427', // Example ISBNs
        '9780134685991',
        '9780132350884'
      ];
      const trendingISBNs = [
        '9781492075731', // Example ISBNs
        '9781593275990',
        '9781449373320'
      ];

      const newArrivalsData = await Promise.all(newArrivalsISBNs.map(fetchBooks));
      const trendingData = await Promise.all(trendingISBNs.map(fetchBooks));

      setNewArrivals(newArrivalsData.flat());
      setTrending(trendingData.flat());
    };

    loadBooks();
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const handleSearch = async (query) => {
    setIsSearching(true);
    const searchResults = await fetchBooks(query);
    setSearchResults(searchResults);
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isSearching ? (
        <div className="library-container">
          <div className="search-results">
            <h2>Search Results</h2>
            {searchResults.map((book) => (
              <div className="book" key={book.id} onClick={() => openModal(book)}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                <div className="book-details">
                  <h3>{book.volumeInfo.title}</h3>
                  <p><strong>{book.volumeInfo.authors?.join(', ')}</strong> · {book.volumeInfo.publishedDate}</p>
                  <p className="description">{book.volumeInfo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="library-container">
          <div className="new-arrivals">
            <h2>New Arrivals</h2>
            {newArrivals.map((book) => (
              <div className="book" key={book.id} onClick={() => openModal(book)}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                <div className="book-details">
                  <h3>{book.volumeInfo.title}</h3>
                  <p><strong>{book.volumeInfo.authors?.join(', ')}</strong> · {book.volumeInfo.publishedDate}</p>
                  <p className="description">{book.volumeInfo.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="trending">
            <h2>Trending</h2>
            {trending.map((book) => (
              <div className="book" key={book.id} onClick={() => openModal(book)}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                <div className="book-details">
                  <h3>{book.volumeInfo.title}</h3>
                  <p><strong>{book.volumeInfo.authors?.join(', ')}</strong> · {book.volumeInfo.publishedDate}</p>
                  <p className="description">{book.volumeInfo.description}</p>
                  <button><a href="https://rzp.io/l/WEsm2Yjfh">Borrow Now</a></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.volumeInfo.title} />
            <div className="book-details">
              <h3>{selectedBook.volumeInfo.title}</h3>
              <p><strong>{selectedBook.volumeInfo.authors?.join(', ')}</strong> · {selectedBook.volumeInfo.publishedDate}</p>
              <p className="description">{selectedBook.volumeInfo.description}</p>
            </div>
            <button className="borrow-button">Borrow</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
