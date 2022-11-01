import Clock from './clockModule';
import Page from './Page';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
let x=["Akash","Akash2","Akash3"]
function App() {
  return (
    <div>
       <div>
        {x.length > 0 &&
          <h2>
            You have {x.length} people.
          </h2>
        }
      </div> 
      <div>
        {x.map(function(emp_name){return (<Welcome name={emp_name}/>);})
        }
      </div>
      <div>
        {
          <Clock />
        }
        {
          <Page />
        }
        {
          <NameForm />
        }
        {
          <FlavorForm />
        }
      </div>
    </div>
  );
}

// const root = R~eactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
