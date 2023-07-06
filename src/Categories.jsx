const Categories = ({ categories, filterMenu }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((item) => (
          <button key={item} className="btn" onClick={() => filterMenu(item)}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
export default Categories;
