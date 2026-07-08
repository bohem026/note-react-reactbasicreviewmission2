import { useState } from 'react';
import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';
import StudyList from './components/StudyList';

function App() {
  // console.log(reactData);
  const firstData = reactData[0];
  const [selectedId, setSelectedId] = useState(-1);
  const [category, setCategory] = useState('all');

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const filteredData = category === 'all' ? reactData : reactData.filter((item) => item.category === category);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="text-center mb-4">
        <h1 className="fw-bold">React Basic Review Mission 2</h1>
        <div className="text-secondary">전체 학습 항목 수: {reactData.length}개</div>
      </div>

      <StudyInfo title={firstData.title} desc={firstData.desc} category={firstData.category} />

      <hr />
      <div className="mb-4 w-100" style={{ maxWidth: '100%' }}>
        <h2 className="fw-bold text-center w-100 mb-3 fs-5">카테고리 필터</h2>

        <div className="btn-group shadow-sm" style={{ minWidth: '400px' }} role="group">
          <button
            type="button"
            className={`w-25 btn ${category === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setCategory('all');
              setSelectedId(null);
            }}
          >
            전체
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'concept' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setCategory('concept');
              setSelectedId(null);
            }}
          >
            concept
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'library' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setCategory('library');
              setSelectedId(null);
            }}
          >
            library
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'hook' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => {
              setCategory('hook');
              setSelectedId(null);
            }}
          >
            hook
          </button>
        </div>
      </div>

      <hr />
      <StudyList items={filteredData} selectedId={selectedId} onSelect={handleSelect} />
    </div>
  );
}

export default App;
