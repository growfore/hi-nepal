export default function CTASection() {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='section-heading section-heading-white'>
                            <h5 className='dash-style'>HOLIDAY PACKAGE OFFER</h5>
                            <h2>HOLIDAY SPECIAL 10% OFF!</h2>
                            <h4>
                                Sign up now to recieve hot special offers and information
                                about the best tour packages, updates and discounts !!
                            </h4>
                            <div className='newsletter-form'>
                                <form>
                                    <input
                                        type='email'
                                        name='s'
                                        placeholder='Your Email Address'
                                    />
                                    <input
                                        type='submit'
                                        name='signup'
                                        disabled
                                        defaultValue='SIGN UP NOW!'
                                    />
                                </form>
                            </div>
                            <p>*We never share your email address with third parties.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}