import Layout from '../components/layouts/Layout';
import Sethead from '../components/Sethead';
import styles from '../styles/home.module.css';

export default function about() {
  return (
    <Layout>
      <Sethead title="About us" />
      <div className={styles.main}>
        <h2>About us</h2>
        <p>
          This page was made by Sarah Kapalka using the
          <a href="https://makeup-api.herokuapp.com/" target="_blank" rel="noreferrer"> MakeUp API</a>
          . Software used was Visual studio Code and it was all done using NextJS and CSS.
          This project was made as a form of a practical after taking lessons on how to use NextJS.
        </p>
      </div>
    </Layout>
  );
}
