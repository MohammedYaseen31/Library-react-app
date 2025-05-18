import React, { useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Books = () => {
    let [books, setBooks] = useState([])
    let booknavigate= useNavigate()
    let cartNavigate=useNavigate()
    let location=useLocation()
    let bool= location.pathname.startsWith(`/adminportal`)

    // using this to fetch the api and taking out the data of the function using useState hook
    let fetchapi = async () => {
        let booksapi = await fetch(`http://localhost:4000/books`)
        let responsedata = await booksapi.json()
        setBooks(responsedata)
    }
    fetchapi()
    // console.log(books);


    // using this to navigate to the desired book using the useNaviagte hook and the book id
    let readBook=(id)=>{
        // alert(id)
        bool
        ?
        booknavigate(`/adminportal/readbooks/${id}`)
        :
        booknavigate(`/userportal/readbooks/${id}`)
    }
    let deleteBook=(id,title)=>{
        let deleteBool=window.confirm(`do you want to delete ${title} book?`)
        if(deleteBool)
        {
            fetch(`http://localhost:4000/books/${id}`, {method : 'DELETE'})
            alert(`${title} is deleted`)
        }
        else{
            alert(`${title} is not deleted`)
        }
    }

    let handleCart=(id,title,pageCount,thumbnailUrl,authors)=>{
        let addCart={
            title:title,
            pageCount:pageCount,
            thumbnailUrl:thumbnailUrl,
            authors:authors
        }
        fetch(`http://localhost:4000/cart` , {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body : JSON.stringify(addCart)
        })
        cartNavigate(`/userportal/cartitems`)
    }
   

    return (
        <>
            <div className="books">
                <div className="header">
                    <h1>Books</h1>
                </div>
                <div className="container">
                    {
                        books.map((elem) => {
                            let { id,title, thumbnailUrl, authors,pageCount } = elem

                            return (
                                <>
                                    <div className="card">
                                        <div className="image">
                                            <img src={thumbnailUrl} alt="" />
                                        </div>
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="authors">
                                            {authors}
                                        </div>
                                        <div className="btns">
                                            <button className="read" onClick={()=>readBook(id)}>
                                                Read Book
                                            </button>
                                            {
                                                bool
                                                ?
                                                <button className="delete" onClick={()=>deleteBook(id,title)}>
                                                Delete Book
                                            </button>
                                            :
                                            <button className="cart" onClick={()=>handleCart(id,title,pageCount,thumbnailUrl,authors)}>
                                                Add to cart
                                            </button>
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Books
