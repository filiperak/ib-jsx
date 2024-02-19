import './App.css';

function App() {
  const myStyle = {
    container: {
      backgroundColor:'lightblue',
      padding: '20px'
    },
    heading: {
      color:'green',
      fontSize:'24px'
    },
  };
  return (
    <div className="App">
      <h1 
        style={{color:'red',
          border:'1px solid blue',
          borderRadius:'10px',
          width:'fit-content'
        }}
      >
        Hallo World
      </h1>
      <div style={myStyle.container}>
        <p style={myStyle.heading}>Welcome to my app</p>
      </div>
    </div>
  );
}

export default App;
