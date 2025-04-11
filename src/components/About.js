import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ lineHeight: 1.8 }}
          >
            <p style={{ marginBottom: '1rem' }}>
              I'm a Computer Science and Engineering student at Vellore Institute of Technology, passionate about solving complex problems through machine learning and computer vision technologies.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              With experience as a Machine Learning Intern at IIT Bombay, I've worked on image segmentation models, data preprocessing, and computer vision applications for precision agriculture.
            </p>
            <p>
              My interest lies in developing AI solutions that make a real impact, particularly in healthcare and medical imaging, where I've created models for medical image classification and enhancement.
            </p>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Education</h3>
  
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    {/* First Education Item (Your existing entry) */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ 
        background: 'rgba(157, 78, 221, 0.05)', 
        borderLeft: '3px solid var(--color-primary)',
        padding: '1.5rem',
        borderRadius: '4px'
      }}
    >
      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Bachelor of Technology in Computer Science and Engineering</h4>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Vellore Institute of Technology</p>
      <p style={{ color: 'var(--color-primary)' }}>2021 - 2025</p>
      <p style={{ marginTop: '0.5rem' }}>CGPA: 8.25 / 10</p>
    </motion.div>
    
    {/* Second Education Item (New) */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      style={{ 
        background: 'rgba(157, 78, 221, 0.05)', 
        borderLeft: '3px solid var(--color-primary)',
        padding: '1.5rem',
        borderRadius: '4px'
      }}
    >
      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>12th / HSC - CBSE</h4>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Vidya Bharati Chinmaya Vidyalaya</p>
      <p style={{ color: 'var(--color-primary)' }}>2019 - 2021</p>
      <p style={{ marginTop: '0.5rem' }}>Mathematics with Computer Science</p>
    </motion.div>
    
    {/* Third Education Item (New) */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      style={{ 
        background: 'rgba(157, 78, 221, 0.05)', 
        borderLeft: '3px solid var(--color-primary)',
        padding: '1.5rem',
        borderRadius: '4px'
      }}
    >
      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>10th / SSC - ICSE</h4>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Little Flower School</p>
      <p style={{ color: 'var(--color-primary)' }}>2008 - 2019</p>
      <p style={{ marginTop: '0.5rem' }}>Science, Mathematics and Computer Science</p>
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
