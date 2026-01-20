import React, { useState } from 'react';

const RFQWorkflow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: ''
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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('RFQ submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      description: '',
      timeline: '',
      budget: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="rfq" className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-mont font-semibold text-primary mb-3">
            Request for Quote (RFQ) Workflow
          </h2>
          <p className="text-gray text-base">
            Submit your project requirements and get a customized quote
          </p>
          {/* Underline */}
          <span className="block w-20 h-1 bg-secondary mx-auto mt-4 rounded"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* RFQ Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-6">
              Submit Your RFQ
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-dark font-medium mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="block text-dark font-medium mb-2">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark font-medium mb-2">Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 3-6 months"
                  />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Budget Range</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., PHP 1M - 5M"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Submitting...
                  </>
                ) : (
                  'Submit RFQ'
                )}
              </button>
            </form>
          </div>

          {/* Capability Statement Download */}
          <div>
            <h3 className="text-2xl md:text-3xl font-mont font-semibold text-dark mb-6">
              Download Capability Statement
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <i className="fas fa-file-pdf text-4xl text-red-500 mb-4"></i>
                <h4 className="text-xl font-semibold text-dark mb-2">Company Capability Statement</h4>
                <p className="text-gray">
                  Download our detailed capability statement to learn more about our services,
                  experience, and qualifications.
                </p>
              </div>
              <a
                href="/Company Profile 2026.pdf"
                download="Cliberduche_Capability_Statement.pdf"
                className="block w-full bg-secondary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary-dark transition-colors font-medium text-center"
              >
                <i className="fas fa-download mr-2"></i>
                Download PDF
              </a>
            </div>

            {/* Workflow Steps */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-dark mb-4">RFQ Process Workflow</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-dark">Submit RFQ</h5>
                    <p className="text-gray text-sm">Fill out the form with your project details</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-dark">Review & Analysis</h5>
                    <p className="text-gray text-sm">Our team reviews your requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-dark">Custom Quote</h5>
                    <p className="text-gray text-sm">Receive a tailored proposal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h5 className="font-semibold text-dark">Project Execution</h5>
                    <p className="text-gray text-sm">Begin collaboration on your project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQWorkflow;