import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"


function App() {
  return (
    <>
    <Header />
    {data.map(el=>{
      return <Entry key={el.id}
       img={el.img.src}
       alt={el.img.alt}
       title={el.title}
       country={el.country}
       googleMapsLink = {el.googleMapsLink}
       dates = {el.dates}
       text = {el.dates}     
              
       />
    })}

    </>
  )
}

export default App
