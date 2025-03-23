import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {

    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className='col-lg-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptate tempora hic id corporis maiores praesentium accusantium quia aut quas!
                        </p>
                        <Link to='/contact' className='btn btn-outline-primary px-3'>Contact Us</Link>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <img src='' alt='About Us' height={'400px'} width={'400px'}/>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default About