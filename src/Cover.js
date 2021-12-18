import './Cover.css';

function Cover() {
  return (
    <div className="cover px-4 py-5 text-center">
      <img className="d-block mx-auto yoga-logo" src="/images/home.png" alt="" />
      <h1 className="display-5 fw-bold">YOGĀsana</h1>
      <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">produced by yobi</p>
      <img className="author" src="/images/yobi.jpg" />
    </div>
  </div>
  );
}

export default Cover;