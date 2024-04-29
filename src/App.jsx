import { useState } from 'react'
import ReactPainter from 'react-painter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactPainter  
        width={1555}
        height={600}
        render={({canvas,triggerSave,setColor,setLineWidth,setLineCap,setLineJoin,imageDownloadUrl})=> (
          <div className='main-container' >
            <div className='toolbox'>
              <div className='flex'>
                  <h1>Sketch Book</h1>
              </div>
              <div className='flex'>
                <lable htmlFor=" ">Brush color</lable>
                <input type='color' onChange={(e) => setColor(e.target.value)  }  />
              </div>
              <div className='flex'>
                <lable htmlFor=" ">Brush Size</lable>
                <input type='range' min={"1"} max={"50"} onChange={(e)=> setLineWidth(e.target.value)}  />
              </div>
              <div className='flex'>
                <lable htmlFor=" ">Line Join</lable>
                <select name="" id="" onChange={(e) => setLineJoin(e.target.value)}  >
                  <option value="round" >Round</option>
                  <option value="bevel" >Bevel</option>
                  <option value="miter" >Miter</option>
                </select>
              </div>
              <div className='flex'>

                  <label htmlFor='' >Line Cap</label>
                  <select name="" id="" onChange={(e) => setLineCap(e.target.value)}>
                      <option value="round" >Round</option>
                      <option value="butt" >Butt</option>
                      <option value="square" >Square</option>
                  </select>
              </div>
              {
                imageDownloadUrl ? <a href={imageDownloadUrl}>Download</a>: <button onClick={triggerSave}>Save</button>
              }


            </div>
              <div>
                <div className='awosemcontainer'>{canvas}</div>
              </div>
          </div>
        )}
      />
    </>
  )
}

export default App
