'use client';

import styled from 'styled-components';
import { Button } from './button';

const PageNotFoundWrapper = styled.section`

    padding: 40px 0;
    font-family: 'Arvo', serif;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
    }

    .four_zero_four_bg {
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 500px;
        width: 40vw;
        background-position: center;
    }

    .four_zero_four_bg h1 {
        font-size: 80px;
    }

    .four_zero_four_bg h3 {
        font-size: 80px;
    }

    .link_404 {
        color: #fff !important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block;
    }
    .contant_box_404 {
        margin-top: -50px;
        
    }

    .button__class{ 
        margin-top: 20px;
    }
`;

function PageNotFound() {
    return (
        <PageNotFoundWrapper>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 '>
                        <div className='col-sm-10 col-sm-offset-1  text-center'>
                            <div className='four_zero_four_bg'>
                                <h1 className='text-center '>404</h1>
                            </div>

                            <div className='contant_box_404'>
                                <h3 className='h2'>Look like you're lost</h3>

                                <p>the page you are looking for not avaible!</p>

                                <a href='/'>
                                    <Button className = 'button__class'>Go to Home</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageNotFoundWrapper>
    );
}

export default PageNotFound;
