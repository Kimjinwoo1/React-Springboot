import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const { id } = useParams()
    console.log(id)

    const [book, setBook] = useState({
        id: "",
        title: "",
        author: ""
    })

    useEffect(() => {
        fetch("http://localhost:8080/book/" + id)
            .then(res => res.json())
            .then(res => {
                setBook(res)
            })
    }, [id])

    return (
        <div>
            <h1>책 상세보기</h1>
            <button type="button" class="btn btn-warning">수정</button>
            <button type="button" class="btn btn-danger">삭제</button>
            <hr />
            <h3>{book.author}</h3>
            <h1>{book.title}</h1>
        </div>
    )
}

export default Detail