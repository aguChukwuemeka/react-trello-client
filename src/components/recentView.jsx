import React from 'react';
import { BsClockHistory } from 'react-icons/bs';


// const pictureArray = [BGcard0, BGcard1, BGcard2, BGcard3, BGcard4, BGcard4, BGcard5, BGcard6, BGcard7];
// const randomIndex = Math.floor(Math.random() * pictureArray.length);
// const selectedPicture = pictureArray[randomIndex];


export default function RecentView({data}) {
    return (
        <div style={{marginBottom: '4em'}}>
            <h3><BsClockHistory className="mr-2" />Recently Viewed</h3>
            <div className="row">
                {
                    data.map((item,index) => {
                        return (
                            <div className="col-3"key={index}>
                                <div className="card card_radius cursor_pointer" style={{height: '09rem', backgroundColor: `${item.color}`}}>
                                    <h6 className="card-text text-white m-3">{item.name}</h6>            
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}