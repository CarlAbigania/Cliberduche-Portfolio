import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    access_key: 'ae88c5f7-55e9-4244-93b8-ce9342a3d184',
    to_email: 'cliberduche@gmail.com',
    from_name: 'CLIBERDUCHE Contact'
  });

  // Auto-clear message after 4 seconds
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('✓ Message sent successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          access_key: formData.access_key,
          to_email: formData.to_email,
          from_name: formData.from_name
        });
      } else {
        setSubmitMessage('✗ Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('✗ Error submitting form. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="section-title text-center mb-20">
          <h2 className="text-primary mb-4">Contact Us</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">Reach us for backfill sourcing, site development, and civil works inquiries</p>
          <div className="section-title-underline"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-10">
            {[
              {
                icon: 'fa-map-marker-alt',
                title: 'Office Address',
                content: 'Lot 3739 National Highway, 3/F CBD Building\nBrgy. Pulo, Cabuyao City, Laguna, Philippines',
              },
              {
                icon: 'fa-phone',
                title: 'Contact Numbers',
                content: '+63 49 546-6107\n0967-302-6643',
              },
              {
                icon: 'fa-envelope',
                title: 'Email Address',
                content: 'cliberduche.corp@yahoo.com',
              },
              {
                icon: 'fa-map-marked-alt',
                title: 'Service Coverage',
                content: 'CALABARZON region and beyond',
              },
              {
                icon: 'fa-clock',
                title: 'Business Hours',
                content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 8:00 AM - 12:00 PM',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-lg shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 flex-shrink-0">
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-mont font-bold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray whitespace-pre-line text-base leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="lg:w-1/2 space-y-10">
            {/* Form */}
            <div className="premium-card p-10">
              <h3 className="text-2xl md:text-3xl font-mont font-bold text-primary mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto text-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </button>
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center font-mont font-bold ${
                    submitMessage.includes('✓') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="premium-card p-10">
              <h3 className="text-2xl md:text-3xl font-mont font-bold text-primary mb-6">Find Us</h3>
              <iframe
                src="https://maps.google.com/maps?q=Cliberduche%20Corporation%2C%203rd%20floor%2C%20CBD%20building%2C%20Lot%203739%20National%20Highway%2C%20Cabuyao%20City%2C%204025%20Laguna&output=embed"
                width="100%"
                height="350"
                className="rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cliberduche Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
