import './Cover.css';

function Cover() {
  return (
    <div className="cover px-4 py-5 text-center">
      <img className="d-block mx-auto yoga-logo" src={`${process.env.PUBLIC_URL}/images/home.png`} alt="" />
      <h1 className="display-5 fw-bold">YOGĀsana</h1>
      <p className="lead mb-4">produced by yobi</p>
      <img className="author" src={`${process.env.PUBLIC_URL}/images/yobi.jpg`} />
      <ul className="list-unstyled cover-social-actions">
        <li><i className="bi bi-envelope"></i></li>
        <li><i className="bi bi-facebook"></i></li>
        <li><i className="bi bi-twitter"></i></li>
      </ul>
  </div>
  );
}

export default Cover;