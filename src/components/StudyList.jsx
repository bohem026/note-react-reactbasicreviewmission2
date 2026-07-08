export default function StudyList({ items, selectedId, onSelect }) {
  return (
    <>
      <h2 className="fw-bold mb-2 fs-5">학습 목록</h2>
      <div className="w-100 d-flex flex-column align-items-center gap-2 my-2">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <div
              key={item.id}
              className={`card shadow-sm border rounded-3 p-4 text-center mx-auto ${
                isSelected ? 'border-primary bg-primary-subtle' : 'border-light-subtle'
              }`}
              onClick={() => onSelect(item.id)}
              style={{ width: '100%' }}
            >
              <div>
                <h3 className={`card-title fw-bold mb-3 fs-3 ${isSelected ? 'text-primary' : 'text-dark-emphasis'}`}>
                  <span>{item.id}. </span>
                  {item.title}
                </h3>
                <div>
                  {/* <p className="card-text fw-bold lh-base mb-2 text-secondary">{item.desc}</p>
                  <p className="card-text fw-bold small text-muted">분류: {item.category}</p>
                  {item.id === selectedId && <p className="fw-bold text-primary mb-3 small">선택된 항목입니다.</p>} */}

                  <p className={`card-text lh-base mb-2 ${isSelected ? 'text-primary' : 'text-secondary'}`}>
                    {item.desc}
                  </p>
                  <p className={`card-text small ${isSelected ? 'text-primary' : 'text-muted'}`}>
                    분류: {item.category}
                  </p>
                  {isSelected && <p className="fw-bold text-primary mb-3 small">선택된 항목입니다.</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
