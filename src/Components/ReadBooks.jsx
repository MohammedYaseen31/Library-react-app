import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import './../assets/styles/readbooks.css'

const ReadBooks = () => {
    let param = useParams()
    // console.log(param);
    let bookid = param.id
    let [singleBook, setSingleBook] = useState({})
    let fetchBook = async () => {
        let resApi = await fetch(`http://localhost:4000/books/${bookid}`)
        let book = await resApi.json()
        setSingleBook(book)
    }
    fetchBook()
    // console.log(singleBook);
    let [sbool, sSetBool] = useState(true)

    let shortClick = () => {
        sSetBool(!sbool)
    }


    let { id, title, isbn, pageCount, thumbnailUrl, longDescription, status, authors, categories, shortDescription } = singleBook

    return (
        <>
            <div className="readbooks">

                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="container">
                    <div className="leftside">
                        <img src={thumbnailUrl} alt="" />
                    </div>
                    <div className="rightside">
                        <ul>
                            <li>ISBN : {isbn}</li>
                            <li>Page Count : {pageCount}</li>
                            <li>Status : {status}</li>
                            <li>Authors : {authors}</li>
                            <li>Categories : {categories}</li>
                            <li>Description : {shortDescription}</li>
                            <li><p>{sbool? "":longDescription}</p> <button onClick={shortClick}>{sbool?'Read More':'Read Less'}</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadBooks
