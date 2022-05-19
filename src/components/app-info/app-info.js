

import './app-info.css';

const AppInfo = ({countEmp, countLikedEmp}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании R24.by</h1>
      <h2>Общее число сотрудников: {countEmp}</h2>
      <h2>Премию получат: {countLikedEmp}</h2>
    </div>
  )
}

export default AppInfo;