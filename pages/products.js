import { useEffect, useState, useRef } from 'react';
import Board from '../components/Board';
import Sethead from '../components/Sethead';
import styles from '../styles/home.module.css';
import Layout from '../components/layouts/Layout';

export default function Products() {
  const [filter, setFilter] = useState('filter_by_none');
  const selectFilter = useRef(null);

  const types = [
    'blush', 'bronzer', 'eyebrow', 'eyeliner', 'eyeshadow',
    'foundation', 'lip_liner', 'lipstick', 'mascara', 'nail_polish',
  ];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const req = () => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };
  useEffect(() => {
    req();
  }, []);

  const renderTypes = (Types) => types.map((Type) => <option value={Type} key={Types.indexOf(Type)}>{Type.replace('_', ' ')}</option>);

  return (
    <Layout>
      <Sethead title="Dior Products" />
      <div className={styles.main}>
        <h2>Products</h2>
        <hr />
        <select ref={selectFilter} defaultValue="filter_by_none" onChange={(e) => setFilter(e.target.value)} disabled={loading}>
          <option value="filter_by_none">Filter by &#40;none&#41;</option>
          {renderTypes(types)}
        </select>
        {loading === true
          ? <div className={styles.loader} />
          : <Board filter={filter} data={data} selectFilter={selectFilter} />}
      </div>
    </Layout>
  );
}

/*
export async function getStaticProps() {
  const req = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
  const data = await req.json();

  return {
    props: { data },
  };
}
*/
