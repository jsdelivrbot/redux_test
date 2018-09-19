import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map( book => <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>)
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Wtv is returned will show up as this.props inside of BookList
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as this.props in this Container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook }, dispatch)
}

// Promote BookList to Container from Component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);