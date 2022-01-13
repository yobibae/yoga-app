import './Cover.css';

function Cover() {
  const url = document.location.href
  return (
    <div className="cover px-4 py-5 text-center">
      <img className="d-block mx-auto yoga-logo" src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" />
      <h1 className="display-5 fw-bold">YOGĀsana</h1>
      <p className="lead mb-4">produced by yobi</p>
      <img className="author" src={`${process.env.PUBLIC_URL}/images/yobi.jpg`} />
      <ul className="list-unstyled cover-social-actions">
        <li>
          <a href={`mailto:?body=${url}&subject=YOGĀsana`}>
            <i className="bi bi-envelope"></i>
          </a>
        </li>
        <li>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${url}`}>
            <i className="bi bi-twitter"></i>
          </a>
        </li>
      </ul>
  </div>
  );
}

export default Cover;