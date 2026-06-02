import React from 'react'

function Business() {
  return (
    <div className='Business-page' >
      <div className='Business-container'>
      <div className="Business-image-container">
          <img src="./public/Storeimg.jpeg" alt='Storeimg' ></img>
          <img id='Bplogo' src="./public/Logo.png" alt='Logo' ></img>

      </div>
        <h3>İş birliği için</h3>
        <p>İş birliği ve iletişim için bizimle aşağıdaki adreslerden bağlantı kurabilirsiniz</p>
        <span><a href='#' >İnstagram</a> adresi için tıkla</span>
        <span><a href='#' >Gmail</a> adresi için tıkla </span>
        <span><a href='#' >Şube</a> adresleri için tıkla</span>

      </div>
    </div>
  )
}

export default Business