import Header from '../components/Header';
import FAQItem from '../components/FAQItem';
import { faqData } from '../data/faqData';

export default function FAQ() {
  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our cybersecurity courses and learning platform
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          <div className="divide-y divide-gray-200">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@cyberafrica.edu"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Support
          </a>
        </div>
      </div>
      </div>
  );
}