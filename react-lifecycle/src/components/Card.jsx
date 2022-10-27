export default function Card({ name, img, level }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-3">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <small className="text-muted">{level}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
