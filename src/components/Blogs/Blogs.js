import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='question-title'> Question / Answer </h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What Is Context Api ?</Accordion.Header>
                    <Accordion.Body className='accord-body'>
                        The Context API is a React structure that lets you share unique information and helps you solve prop-drilling at all levels of your app. Context API is mostly used when some data needs to be accessible by a lot of different parts at different levels of the tree. Because it makes it more difficult to reuse parts, use it sparingly. To keep some props from going through a lot of levels, component composition is often the best option. Context is often more complicated than component composition.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What Is Semantic Tag?</Accordion.Header>
                    <Accordion.Body className='accord-body'>
                        Semantic HTML tags give more information about what is inside those tags than just how they look on a page. The browser knows right away that the text inside the "code" tag is some kind of programming language. To make our text look better, we can use semantic tags. According to the W3C: A semantic Web allows data to be shared and reused across applications, enterprises, and communities.
                        <br />
                        <strong> Most Common tags: </strong>   blockquote , p , ul , h1, h2, h3, h4, h5, and h6
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;