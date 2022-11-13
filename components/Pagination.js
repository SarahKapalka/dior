export default function Pagination({
  totalPosts, postsPerPage, setCurrentPage, currentPage,
}) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div className="page_container">
      {pages.map((page, i) => (<button type="submit" key={i} className={currentPage === page ? 'activated' : ''} onClick={() => setCurrentPage(page)}>{page}</button>
      ))}
    </div>
  );
}
