export default function StudyInfo({ title, desc, category }) {
  return (
    <>
      <h2 className="mb-3 fs-5">첫 번째 데이터 출력</h2>
      <div
        className="card shadow-sm border border-light-subtle rounded-3 p-4 text-center mx-auto"
        style={{ width: '100%' }}
      >
        <div className="study-info-card">
          <h3 className="card-title fw-bold text-dark-emphasis mb-3 fs-3">{title}</h3>
          <p className="card-text fw-bold text-secondary lh-base mb-2">{desc}</p>
          <p className="card-text fw-bold small text-muted">분류: {category}</p>
        </div>
      </div>
    </>
  );
}
