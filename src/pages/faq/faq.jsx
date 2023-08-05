import React, { useState } from 'react';
import './faq.scss';
import { Collapse } from 'react-bootstrap';
import { BsPlus, BsDash } from 'react-icons/bs';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      question: 'What are your payment options?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      question: 'How long does shipping take?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      question: 'Can I return a product?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      question: 'How can I track my order?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredFAQs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm) ||
        faq.answer.toLowerCase().includes(searchTerm)
    );
    setFilteredFAQs(filteredFAQs);
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search FAQs"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredFAQs.length > 0 ? (
        filteredFAQs.map((faq, index) => (
            <div className="faq" key={index}>
            <div className="question" onClick={() => handleToggle(index)}>
              
              <h2>{faq.question}</h2>
              <span className="icon">{activeIndex === index ? <BsDash /> : <BsPlus />}</span>
            </div>
            <Collapse in={activeIndex === index}>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </Collapse>
          </div>
        ))
      ) : (
        <p>No FAQs found.</p>
      )}
    </div>
  );
};

export default FAQPage;
