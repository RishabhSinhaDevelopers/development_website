import Navbar from '../components/navbar/Navbar';
import Footer from '../containers/footer/Footer';
import React, {useState, useEffect} from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import '../App.css';
import '../containers/features/features.css';
import RingLoader from "react-spinners/RingLoader";


function Work() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  
  

  return (
    <div>
    {
    loading ?
        <div className='Appy'>
          <RingLoader color={'#FFFFFF'} loading={loading} size={140} />
        </div>
      :
            <div>
              <Navbar />
              
              <div className="App">
              <header className="App-header">
                
                { pageNumber > 1 && 
                <button onClick={changePageBack}>Previous Page</button>
                }
                {
                  pageNumber < numPages &&
                  <button onClick={changePageNext}>Next Page</button>
                }
              </header>
              <center>
                <div className='guppy'>
                  <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(
                      new Array(numPages),
                      (el,index) => (
                        <Page 
                          key={`page_${index+1}`}
                          pageNumber={index+1}
                        />
                      )
                    )}
                  </Document>
                </div>
              </center>
            </div>
            <Footer />
            </div>
  }</div>);
}

export default Work;