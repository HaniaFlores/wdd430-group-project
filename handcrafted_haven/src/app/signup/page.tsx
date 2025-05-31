// src/app/signup/page.tsx
import styles from './signup.module.css';

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" required className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" required className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" required className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Sign Up</button>
        <p className={styles.loginLink}>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
}