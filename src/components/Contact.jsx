import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (In real app, connect to backend)');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">Contact Us</h2>
          <p className="text-gray">Reach us for backfill sourcing, site development, and civil works inquiries</p>
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
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
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark mb-1">{item.title}</h4>
                  <p className="text-gray whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="lg:w-1/2 space-y-8">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-secondary text-primary font-semibold px-6 py-3 rounded shadow-md shadow-secondary/30 hover:-translate-y-0.5 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Find Us</h3>
              <iframe
                src="https://maps.google.com/maps?q=Cliberduche%20Corporation%2C%203rd%20floor%2C%20CBD%20building%2C%20Lot%203739%20National%20Highway%2C%20Cabuyao%20City%2C%204025%20Laguna&output=embed"
                width="100%"
                height="300"
                className="rounded-md shadow-inner"
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
