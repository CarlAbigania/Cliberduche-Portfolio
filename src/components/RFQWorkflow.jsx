import React, { useState } from 'react';

const RFQWorkflow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
    access_key: 'ae88c5f7-55e9-4244-93b8-ce9342a3d184',
    to_email: 'cliberduche@gmail.com',
    from_name: 'CLIBERDUCHE RFQ'
  });

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
        setSubmitMessage('✓ RFQ submitted successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          description: '',
          timeline: '',
          budget: '',
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
    <section id="rfq" className="py-12 md:py-16 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary mb-4">
            Request for Quote (RFQ) Workflow
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Submit your project requirements and get a customized quote
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* RFQ Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark mb-4">
              Submit Your RFQ
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-dark font-mont font-bold mb-3">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                >
                  <option value="">Select Project Type</option>
                  <option value="land-development">Land Development</option>
                  <option value="civil-works">Civil Works</option>
                  <option value="backfill-supply">Backfill Supply</option>
                  <option value="equipment-leasing">Equipment Leasing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-dark font-mont font-bold mb-3">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="e.g., 3-6 months"
                  />
                </div>
                <div>
                  <label className="block text-dark font-mont font-bold mb-3">Budget Range</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="e.g., PHP 1M - 5M"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-3"></i>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit RFQ
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

          {/* Workflow Steps */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark mb-4">RFQ Process Workflow</h3>
            <div className="space-y-8">
              {[
                { num: 1, title: 'Submit RFQ', desc: 'Fill out the form with your project details' },
                { num: 2, title: 'Review & Analysis', desc: 'Our team reviews your requirements' },
                { num: 3, title: 'Custom Quote', desc: 'Receive a tailored proposal' },
                { num: 4, title: 'Project Execution', desc: 'Begin collaboration on your project' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-mont font-bold text-2xl shadow-lg shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h5 className="text-xl md:text-2xl font-mont font-bold text-dark mb-2">{step.title}</h5>
                    <p className="text-gray text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQWorkflow;