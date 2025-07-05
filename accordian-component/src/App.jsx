import Accordian from './components/Accordian'


function App() {
  const accordionItems = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  return (
    <>
      <div className='w-screen h-screen bg-amber-100 flex justify-center items-center '>
          <Accordian accordianList={accordionItems}/>
      </div>
    </>
  )
}

export default App
