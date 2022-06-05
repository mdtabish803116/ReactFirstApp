
import './App.css';
import Card from './components/Card'


const data = [
        {
             id : 1,
             heading : "Mobile Operating System",
             list : [
                  {id : 101 , title : "Android"},
                  {id : 102 , title : "IOS"},
                  {id : 103 , title : "Blackberry"},
                  {id : 104 , title : "Windows"}
             ]
        }, 
        {  
            id : 2,
            heading : "Mobile Manufacturers",
            list : [
                 {id : 201 , title : "samsung"},
                 {id : 202 , title : "HTC"},
                 {id : 203 , title : "Micromax"},
                 {id : 204 , title : "Apple"}
            ]

        }
     ]

function App() {
   
  return (
    <div className = "App"> 
      {data.map((item) =>( 
        < Card {...item}/>
      ))}
         
   </div>
  );
};

export default App;
   