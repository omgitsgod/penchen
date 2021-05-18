import React, { useState } from 'react';

function Contact({ data }) {
  const { email, contactmessage } = data;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...FormData, [name]: value});
  }
  const validate = (formData) => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = 'Name required';
    }
    if (!formData.email) {
      formErrors.email = 'Email required';
    }
    if (!formData.message) {
      formErrors.message = 'Message is required';
    }
    return formErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmitted(true);
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-form', ...formData }),
      })
        .then(() => alert('Success!'))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: '', email: '', message: '' }))
        .catch((error) => alert(error));
    }
  }, [errors, formData, isSubmitted]);
  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className='ten columns'>
          <p className='lead'>{contactmessage}</p>
        </div>
      </div>
      <div className='row'>
        <div className='eight columns'>
          <form
            method='post'
            id='contact'
            name='contact'
            onSubmit={handleSubmit}
          >
            <fieldset>
              <input type='hidden' name='form-name' value='contact' />
              <div>
                <label htmlFor='name'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  size='35'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor='email'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  size='35'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor='message'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  cols='50'
                  rows='15'
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p>{errors.message}</p>}
              </div>
              <div>
                <button type='submit' className='submit'>
                  Submit
                </button>
                <span id='image-loader'>
                  <img alt='' src='images/loader.gif' />
                </span>
              </div>
            </fieldset>
          </form>
          <div id='message-warning'> Error boy</div>
          <div id='message-success'>
            <i className='fa fa-check'></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
