import { useState } from 'react';
import Pagination from './Pagination';

export default function Board({ filter, data, selectFilter }) {
  const filterby = (Data, Filter) => {
    if (Filter === 'filter_by_none') return Data;
    return data.filter((x) => x.product_type === filter);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lasti = currentPage * postPerPage;
  const firsti = lasti - postPerPage;
  const products = filterby(data, filter).slice(firsti, lasti);
  selectFilter.current.addEventListener('change', () => setCurrentPage(1));

  return (
    <>
      <div className="container">
        {products.map((x, index) => (
          <div key={index} className="card">
            <a href={x.product_link} target="_blank" className="atag" rel="noreferrer">
              <div className="image">
                <img src={x.image_link} alt={x.name} />
              </div>
              <div className="name">{x.name}</div>
              <div>
                $
                {x.price}
              </div>
              <p className={x.product_type}>{x.product_type.replace('_', ' ')}</p>
            </a>
          </div>
        ))}
      </div>
      <Pagination
        totalPosts={filterby(data, filter).length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
