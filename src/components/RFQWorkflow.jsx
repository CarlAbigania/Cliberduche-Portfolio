import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MdAutorenew, MdSms, MdAssignment, MdSearch, MdReceiptLong, MdHandshake } from 'react-icons/md';

const RFQWorkflow = () => {
  // Refs for animations
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const descRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const workflowRef = useScrollAnimation({ threshold: 0.2 });
  const step1Ref = useScrollAnimation({ threshold: 0.2 });
  const step2Ref = useScrollAnimation({ threshold: 0.2 });
  const step3Ref = useScrollAnimation({ threshold: 0.2 });
  const step4Ref = useScrollAnimation({ threshold: 0.2 });

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

  // Auto-clear message after 4 seconds
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  // Icon mapping for workflow steps
  const iconMap = {
    'fa-clipboard': MdAssignment,
    'fa-magnifying-glass': MdSearch,
    'fa-file-invoice-dollar': MdReceiptLong,
    'fa-handshake': MdHandshake,
  };

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
    <section id="rfq" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title text-center mb-12">
          <h2 className="text-primary dark:text-blue-400 mb-4 scroll-fade-up" ref={titleRef}>
            Request for Quote (RFQ) Workflow
          </h2>
          <p className="text-gray dark:text-gray-400 text-lg max-w-2xl mx-auto scroll-fade-up" ref={descRef}>
            Submit your project requirements and get a customized quote
          </p>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* RFQ Form */}
          <div className="premium-card p-10 scroll-fade-left" ref={formRef}>
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-primary dark:text-blue-400 mb-8">
              Submit Your RFQ
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-dark dark:text-white font-mont font-bold mb-3">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
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
                <label className="block text-dark dark:text-white font-mont font-bold mb-3">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="e.g., 3-6 months"
                  />
                </div>
                <div>
                  <label className="block text-dark dark:text-white font-mont font-bold mb-3">Budget Range</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-4 focus:ring-primary/10 transition-all duration-300"
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
                    <MdAutorenew className="inline mr-3 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <MdSms className="inline mr-2" />
                    Submit RFQ
                  </>
                )}
              </button>
              {submitMessage && (
                <div className={`p-4 rounded-lg text-center font-mont font-bold animate-fadeIn ${
                  submitMessage.includes('✓') 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Workflow Steps */}
          <div className="scroll-fade-right" ref={workflowRef}>
            <h3 className="text-2xl md:text-3xl font-mont font-bold text-dark dark:text-white mb-4">RFQ Process Workflow</h3>
            <div className="space-y-8">
              {[
                { num: 1, title: 'Submit RFQ', desc: 'Fill out the form with your project details', icon: 'fa-clipboard' },
                { num: 2, title: 'Review & Analysis', desc: 'Our team reviews your requirements', icon: 'fa-magnifying-glass' },
                { num: 3, title: 'Custom Quote', desc: 'Receive a tailored proposal', icon: 'fa-file-invoice-dollar' },
                { num: 4, title: 'Project Execution', desc: 'Begin collaboration on your project', icon: 'fa-handshake' },
              ].map((step, index) => {
                const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];
                return (
                <div key={step.num} ref={stepRefs[index]} className="flex items-start gap-6 group scroll-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-mont font-bold text-2xl shadow-lg shadow-primary/30 dark:shadow-primary/50 group-hover:shadow-lg group-hover:shadow-primary/50 dark:group-hover:shadow-primary/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h5 className="text-xl md:text-2xl font-mont font-bold text-dark dark:text-white mb-2 group-hover:text-secondary transition-colors">{step.title}</h5>
                    <p className="text-gray dark:text-gray-400 text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQWorkflow;