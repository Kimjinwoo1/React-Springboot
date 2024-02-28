import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: "",
        author: "",
    })

    useEffect(() => {
        fetch("http://localhost:8080/book/" + id)
            .then(res => res.json())
            .then(res => {
                setBook(res)
            })
    }, [id])


    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const submitBook = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/book/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(book)
            });

            if (res.status === 200) {
                const data = await res.json();
                navigate('/book/' + id)
            } else {
                alert('책 수정에 실패하였습니다.')
            }
        } catch (error) {
            alert("책 수정에 실패하였습니다.")
        }
    }

    return (
        <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title" value={book.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author" value={book.author} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UpdateForm