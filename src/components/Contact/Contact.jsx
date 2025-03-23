import React from 'react'


const Contact = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center py-4 my-4'>
                        <h1>Have somee questions?</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-5 d-flex justify-content-center'>
                        <img src='' alt='Contact us' height={'300px'} width={'300px'}/>
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor=''>Full Name</label>
                                <input type='text' className='form-control' placeholder='John Doe' id='exampleForm'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor=''>Email Address</label>
                                <input type='email' className='form-control' placeholder='Email' id='exampleForm'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor=''>Message</label>
                                <textarea className='form-control' placeholder='Message' id='exampleForm'/>
                            </div>
                            <button type='submit' className='btn btn-outline-primary'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}