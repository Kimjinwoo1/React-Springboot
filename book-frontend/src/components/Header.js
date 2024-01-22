import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container >
                    {/* <Navbar.Brand href="#home">홈</Navbar.Brand> */}
                    <Nav className='me-auto'>
                        <Link to="/" className='navar-brand mr-auto'>홈</Link>
                        <Link to="/joinForm" className='navar-link ms-2'>회원가입</Link>
                        <Link to="/loginForm" className='navar-link ms-2'>로그인</Link>
                        <Link to="/saveForm" className='navar-link ms-2'>글쓰기</Link>
                    </Nav>
                </Container>
                <Form className='d-flex me-auto'>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-info'>Search</Button>
                </Form>
            </Navbar>
            < br />
        </>
    )
}

export default Header