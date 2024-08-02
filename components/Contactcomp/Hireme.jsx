import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Image from 'next/image';
import Confetti from 'react-confetti';
import dynamic from 'next/dynamic';

const CelebrationAnimation = dynamic(() => import('@/components/CelebrationAnimation'), { ssr: false });

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Submitting form data:', formData); 

    try {
      const response = await axios.post('/api/Post/email', formData);
      
      console.log('Response status:', response.status);

      if (response.status === 200) {
        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
        setShowConfetti(true);
        setShowAnimation(true);
        setTimeout(() => {
          setShowConfetti(false);
          setShowAnimation(false);
        }, 5000); // Show confetti and animation for 5 seconds
      } else {
        setStatus('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white sm:p-8 xsm:p-4 rounded-lg shadow-lg border border-blue-500 flex flex-col sm:flex-row justify-center items-center lg:w-[60rem] sm:gap-10 xsm:gap-4 xsm:w-[20rem] sm:w-[40rem]  ">
        <div className="lg:w-1/2 xsm:w-full">
          <h2 className="sm:text-4xl font-bold text-center mb-6 xsm:text-3xl">Hire Me</h2>
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg text-black xsm:h-[2.8rem] dark:invert"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg text-black xsm:h-[2.8rem] dark:invert"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full  p-3 border border-gray-300 rounded-lg text-black xsm:h-[4rem] dark:invert"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
          </motion.form>
        </div>
        <div className="xsm:hidden sm:flex sm:w-[30rem]">
          <Image 
            src="/images/png.png" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg sm:w-[20rem] lg:w-auto"
            alt="Hire Me"
          />
        </div>
        {showConfetti && <Confetti />}
      </div>
    </div>
  );
};

export default HireMe;
