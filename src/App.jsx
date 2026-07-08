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
  const [keyword, setKeyword] = useState('');

  function handleCategory(name) {
    setCategory(name);
    setSelectedId(null);
    setKeyword('');
  }

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const filteredData = reactData
    .filter((item) => (category === 'all' ? true : item.category === category)) // 1차 필터
    .filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase())); // 2차 필터

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="text-center mb-3">
        <h1 className="fw-bold">React Basic Review Mission 2</h1>
        <div className="text-secondary">전체 학습 항목 수: {reactData.length}개</div>
      </div>

      <StudyInfo title={firstData.title} desc={firstData.desc} category={firstData.category} />

      <hr />
      <div className="w-100" style={{ maxWidth: '100%' }}>
        <h2 className="fw-bold text-center w-100 mb-3 fs-5">카테고리 필터</h2>

        <div className="btn-group shadow-sm" style={{ minWidth: '400px' }} role="group">
          <button
            type="button"
            className={`w-25 btn ${category === 'all' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleCategory('all')}
          >
            전체
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'concept' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleCategory('concept')}
          >
            concept
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'library' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleCategory('library')}
          >
            library
          </button>
          <button
            type="button"
            className={`w-25 btn ${category === 'hook' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => handleCategory('hook')}
          >
            hook
          </button>
        </div>
      </div>

      <hr />
      <div className="w-100" style={{ maxWidth: '100%' }}>
        <h2 className="fw-bold fs-5 mb-3 text-center">검색</h2>
        <input
          type="text"
          className="form-control shadow-sm p-2"
          placeholder="제목 검색"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setSelectedId(null);
          }}
        />
      </div>

      <hr />
      <StudyList items={filteredData} selectedId={selectedId} onSelect={handleSelect} />
    </div>
  );
}

export default App;
