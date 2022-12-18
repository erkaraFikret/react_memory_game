import { useEffect, useState } from 'react'
import './App.css';
import Card from './components/card'


const kartResimler = [
  { "src": "/img/cat.jpg", eslesme: false },
  { "src": "/img/cow.jpg", eslesme: false },
  { "src": "/img/dog.jpg", eslesme: false },
  { "src": "/img/horse.jpg", eslesme: false },
  { "src": "/img/lion.jpg", eslesme: false },
  { "src": "/img/monkey.jpg", eslesme: false },

]

function App() {
  const [kartlar, setKartlar] = useState([])
  const [secimBir, setSecimBir] = useState([])
  const [secimİki, setSecimİki] = useState([])
  const [secimSayisi, setSecimSayisi] = useState(0)
  const [aktif, setAktif] = useState(true)

  const karistir = () => {
    const karistirilmisKart = [...kartResimler, ...kartResimler]
      .sort(() => Math.random() - 0.5)
      .map((k) => ({ ...k, id: Math.random() }))
    setKartlar(karistirilmisKart)
    setSecimSayisi(0)

  }
  // console.log(kartlar)

  const kartSec = (kart) => {
    secimBir ? setSecimİki(kart) : setSecimBir(kart)
  }

  const secimSayisiResetle = () => {
    setSecimBir(null);
    setSecimİki(null);
    setSecimSayisi(oncekiSayi => oncekiSayi + 1);
    setAktif(false)

  }


  useEffect(() => {

    if (secimBir && secimİki) {
      setAktif(true)
      if (secimBir.src === secimİki.src) {
        setKartlar(oncekiKart => {
          return oncekiKart.map(kart => {
            if (kart.src == secimBir.src) {
              return { ...kart, eslesme: true }
            } else {
              return kart
            }
          })
        })
        secimSayisiResetle();
      } else {
        
        secimSayisiResetle();
      }
      console.log(kartlar)
    }

  }, [secimBir, secimİki])

  useEffect(() => {
    karistir()
  }, [])


  return (
    <div className="App">
      <h1>React Hafıza OYUNU</h1>
      
      <div className="card-grid">
        {
          kartlar.map(kart => (
            <Card kart={kart} kartSec={kartSec} donus={kart===secimBir || kart === secimİki || kart.eslesme} aktif={aktif}/>
          ))
        }
      </div>
      <p>Seçim Sayısı: {secimSayisi}</p>
    </div>
  );
}

export default App;
