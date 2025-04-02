
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="text-highlight">Touch</span></h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-300 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-200 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 text-highlight">📧</div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p>lindiwemphuthi44@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 text-highlight">📱</div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p>+27 64 155 2603</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 text-highlight">📍</div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p>Johannesburg, South Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl text-gray-400 hover:text-highlight transition-colors">
                    <span title="GitHub">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="#" className="text-2xl text-gray-400 hover:text-highlight transition-colors">
                    <span title="LinkedIn">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </span>
                  </a>
                  <a href="#" className="text-2xl text-gray-400 hover:text-highlight transition-colors">
                    <span title="Twitter">
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-200 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-dark-100 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-highlight"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-dark-100 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-highlight"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-dark-100 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-highlight"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-highlight hover:bg-highlight-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
