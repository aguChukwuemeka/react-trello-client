import React from 'react';
import Fender from "../assets/logo-fender.svg";
import Google from "../assets/logo-google.svg";
import Peloton from "../assets/logo-peloton.svg";
import Pinterest from "../assets/logo-pinterest.svg";
import Costco from '../assets/logo-costco.svg';
import Lush from "../assets/logo-lush.svg";
import Squarespace from "../assets/logo-squarespace.svg";

export default function Sponsor() {
    const images = [Google, Fender, Squarespace, Costco];
    const photos = [Lush, Pinterest, Peloton];
    return (
        <div className="container">
            <div className="text-white" style={{margin: '4em auto', background: 'linear-gradient(180deg, #42548e 0%, #6b668c 100% )', width: '100%', minHeight: '33rem', borderRadius: '12px' }}>
                <div className="col-10 offset-1">
                    <div className="text-center py-5">
                        <h2>Work smarter with Trello</h2>
                        <p>Companies of all shapes and sizes use Trello.</p>
                    </div>
                </div>
                <div className="row my-4">
                    {
                        images.map((image, index) => {
                            return (
                                    <div className="col-12 col-md-3 my-4 text-center" key={index}>
                                        <img src={image} className="card-img-top" alt="..." style={{maxWidth: '9em'}} />
                                    </div>
                                    )
                                })
                    }
                </div>
                <div className="row my-4">
                    {
                        photos.map((photo, index) => {
                            return (
                                    <div className="col-12 col-md-4 my-4 text-center" key={index}>
                                        <img src={ photo } className="card-img-top" alt="..." style={{maxWidth: '9em'}} />
                                    </div>
                                    )
                                })
                    }                
                </div>
                    <div className="row my-4">
                        <div className="col-12 text-center py-4">
                            <a href="/" className="btn btn-light">Find out how</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
