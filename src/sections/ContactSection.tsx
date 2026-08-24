import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            Have a project, idea, or opportunity?<br/>
            I'm always open to discussing interesting software and AI projects.
          </p>
          
          <form className={styles.formPanel} action="https://formspree.io/f/xyyogrdn" method="POST">
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>NAME</label>
              <input type="text" placeholder="e.g. Tony Stark" name="name" className={styles.formInput} required />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>EMAIL</label>
              <input type="email" placeholder="tony@starkindustries.com" name="__replyto" className={styles.formInput} required />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>MESSAGE</label>
              <textarea name="message" rows={5} className={styles.formInput} placeholder="Enter your message..." required></textarea>
            </div>
            
            <button type="submit" className={styles.primaryBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
