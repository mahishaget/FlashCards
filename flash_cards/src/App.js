
import {useState} from 'react';
import './index.css';
function App() {
  return (
    <div className="App">
    <FlashCards />
    </div>
  );
}

export default App;
const questions=[
  {
    id:3457,
    question:"What language is React based on?",
    answer:"Javascript",
  },
  {
    id:7336,
    question:"What are the building blocks of react apps?",
    answer:"Components",
  },
  {
    id:8832,
    question:"What  is the name of the syntax we use to describr a UI in React apps?",
    answer:"JSX",
  },
  {id:1297,
  question:"How to pass data from parent to child components?",
  answer:"Props",
  },
  {id:9103,
    question:"How to give components memory?",
    answer:"State",
    },
    {id:2002,
      question:"What do we call an input element that is completely synchronized with state?",
      answer:"constrolled component",
      },
  
]
function FlashCards(){
  const[selectedId,setSelectedId]=useState(null);
  return(
  <div className="flashcards">
  {
    questions.map((question)=>(
    
    <div key={question.id} className={question.id===selectedId? "selected" : "card"} onClick={()=>setSelectedId(question.id)}>
      <p>{question.id===selectedId ? question.answer : question.question}</p>
    </div>))
  }
  </div>);
}