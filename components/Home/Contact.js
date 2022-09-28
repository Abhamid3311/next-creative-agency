import React from 'react';

const Contact = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;
        console.log(email, name, message)

        e.target.reset();
    };

    return (
        <div>
            <div className="hero bg-secondary text-primary">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Let us handle your project, professionally.</h1>

                        <p className="py-6 w-96">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>


                    <div className="card w-full max-w-md">
                        <form className="card-body" onSubmit={handleFormSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    id='name'
                                    type="text"
                                    placeholder="Your Name / Company's Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    id='message'
                                    type="text"
                                    placeholder="Your Message"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button
                                    type='submit'
                                    className="btn btn-primary btn-outline">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;