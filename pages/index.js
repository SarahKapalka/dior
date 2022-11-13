import Image from 'next/image';
import Sethead from '../components/Sethead';
import Layout from '../components/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <Sethead title="Dior" />
      <div className="main">
        <main>
          <div className="slogen">
            <h1>
              Dior
              <span className="highlight"> MakeUp</span>
              catalogue
            </h1>
            <p>
              window shop stress-free with us today and explore the glamorous variety Dior
              has to offer in the makeup industry.
            </p>
          </div>
          <div className="imgdiv">
            <Image src="/model.png" height={1378 / 2} width={1378 / 2} className="image" />
          </div>
        </main>
        <section>
          <div className="imgdiv">
            <Image src="/model2.png" height={1378 / 2.5} width={1378 / 2.5} className="image" />
          </div>
          <div className="slogen">
            <p>
              Visit the
              <button type="submit"><a href="https://www.dior.com/" target="_blank" rel="noreferrer">Official Website</a></button>
              of Dior to make real time purchases when something catches your eyes.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
