import './App.css';
import reactData from './data/data.json';
import StudyInfo from './components/StudyInfo';

function App() {
  // console.log(reactData);

  const firstData = reactData[0];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <div className="text-center mb-4">
        <h1 className="fw-bold">React Basic Review Mission 2</h1>
        <div className="text-secondary">전체 학습 항목 수: {reactData.length}개</div>
      </div>

      <StudyInfo title={firstData.title} desc={firstData.desc} category={firstData.category} />
    </div>
  );
}

export default App;
