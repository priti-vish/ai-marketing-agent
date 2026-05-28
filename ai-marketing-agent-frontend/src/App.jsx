import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('')

  const [image, setImage] = useState(null)
  const [output, setOutput] = useState({})
  const [loading, setLoading] = useState(false);


  const showText = () => {
    setLoading(true);

    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text
      })
    })
      .then(response => response.json())
      .then(
        data => {
          setOutput(data)
          setLoading(false);
        }
      )
      .catch(err => {
        console.error(err);
        setLoading(false)

      })


  }



  return (
    <>
      <div className='min-h-screen bg-slate-900 text-white p-10'>



        <div className='max-w-5xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg'>

          <h1 className="text-4xl font-bold" >AI Marketing Agent</h1>
          <h2 className='text-slate-400'>Generate AI-powered marketing strategies instantly</h2>

          <div className='flex gap-3 mt-6'>
            <input className='flex-1 bg-slate-700 p-4 rounded-xl outline-none border border-slate-600 focus:border-blue-500' type="text" placeholder='Type to search....'
              name='prompt'
              value={text}
              onChange={
                (e) => { setText(e.target.value) }
              } />
            <button
              disabled={loading || !text}
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all font-semibold"
              onClick={showText}
            >
              {loading ? "Generating..." : "Submit"}</button>
          </div>


          <div className='mt-6'>
            <input className='mt-2 text-sm text-slate-400' type="file" onChange={(e) => {
              setImage(e.target.files[0])
            }} />
          </div>

          <div className="mt-8">
            <h3 className="text-slate-400 mb-2">AI Response</h3>
            <pre className="bg-slate-900 p-6 rounded-2xl border border-slate-700 whitespace-pre-wrap">
              {output?.aiResponse}
            </pre>
          </div>
          <div>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="image uploaded preview"
                className="mt-4 max-h-60 rounded-xl border border-slate-700"
              />
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default App
