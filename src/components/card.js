import React from 'react'
import './card.css'

function card({ kart, kartSec, donus, aktif }) {

    const kartTiklandi = () => {
        kartSec(kart)
        if (!aktif) {
            kartSec(kart)
        }

    }
    return (
        <div className='card' key={kart.id}>
            <div className={donus ? 'flipped' : ''}>
                <img className='front' src={kart.src} alt="kart ön yüz" />
                <img className='back' src="/img/back.jpg" alt="kart arka yüz" onClick={kartTiklandi} />
            </div>
        </div>
    )
}

export default card