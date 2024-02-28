import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {

    const { id } = useParams()

    const dubleNavigate = useNavigate()

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

    const deleteBtn = () => {
        fetch("http://localhost:8080/book/" + id, {
            method: "DELETE"
        })
            .then(res => res.text())
            .then(res => {
                if (res === "ok") {
                    dubleNavigate("/")
                } else {
                    alert('삭제를 실패했습니다')
                }
            })
    }

    const updateBtn = () => {
        dubleNavigate('/updateForm/' + id)
    }

    return (
        <div>
            <h1>책 상세보기</h1>
            <button type="button" class="btn btn-warning" onClick={updateBtn}>수정</button>
            <button type="button" class="btn btn-danger" onClick={deleteBtn}>삭제</button>
            <hr />
            <h3>{book.author}</h3>
            <h1>{book.title}</h1>
        </div>
    )
}

export default Detail