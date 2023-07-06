/* eslint-disable react/prop-types */

const MenuItem = ({ food }) => {
  const { id, title, category, price, img, desc } = food;

  return (
    <>
      <article key={id} className="menu-item">
        <img className="img" src={img} alt={title} />
        <div className="item-info">
          <header>
            <h5>{title}</h5>
            <h5 className="item-price">{price}</h5>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    </>
  );
};
export default MenuItem;
