import React from 'react'

function Adress() {
  return (
    <div className='Adress-Page'>
        <div className='Adress-container' >
            <div className='Adress-card'>
                <h3>Istanbul şubesi</h3>
                <p>Güneş Sokak No: 18, Çınar Mahallesi, Merkez İlçesi, İstanbul</p>
                <a href='#'>Google maps</a>
            </div>
             <div className='Adress-card'>
                <h3>Bursa şubesi</h3>
                <p>Nilüfer Caddesi No: 25, Yeşil Vadi Mahallesi, Merkez İlçesi, Bursa</p>
                <a href='#'>Google maps</a>
            </div> <div className='Adress-card'>
                <h3>Ankara şubesi</h3>
                <p>Papatya Caddesi No: 42, Bahar Mahallesi, Merkez İlçesi, Ankara</p>
                <a href='#'>Google maps</a>
            </div> <div className='Adress-card'>
                <h3>İzmir şubesi</h3>
                <p>Deniz Yolu Sokak No: 7, Martı Mahallesi, Sahil İlçesi, İzmir</p>
                <a href='#'>Google maps</a>
            </div>
        </div>
    </div>
  )
}

export default Adress