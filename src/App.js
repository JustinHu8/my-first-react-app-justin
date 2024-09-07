import logo from './logo.svg';
import './App.css';
// import CourseCard from './components/CourseCard/CourseCard';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <div className="App">
      <CourseCard title="TypeScript Basic" description="This is awesome" lessons={10} />
      

      <CourseCard title="JavaScript Basic" description="This is bad" lessons={90} />
      <CourseCard title="Redux Basic" description="This is not easy" lessons={15} />
      <CourseCard title=".NET Basic" description="This is too much" lessons={30} />

      {/* <CourseCard 
        title="React for Beginners" 
        instructor="John Doe" 
        isEnrolled={false} 
        rating={4.5}
      />
      <CourseCard 
        title="Advanced JavaScript" 
        instructor="Jane Smith" 
        isEnrolled={true} 
      /> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
