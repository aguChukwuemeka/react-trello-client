import React from 'react';
import Atlassian from "../assets/atlassian-logo-gray-small.svg";

const links = [
    { name: 'Templates', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Apps', href: '/' },
    { name: 'Jobs', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Developers', href: '/' },
    { name: 'Help', href: '/' },
    { name: 'Legal', href: '/' },
    { name: 'Cookie Settings', href: '/' },
    {  name: 'Privacy', href: '/' }
];

export default function Footer() {    
    return(
        <div className="container">
            <div className="d-flex justify-content-center" >
                <div className="text-center">
                        <select className="custom-select my-3">
                            <option defaultValue>English</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            <ul className="nav justify-content-center">
                {
                    links.map((link, index) => {
                        return (
                            <li className="nav-item" key={index} >
                                <a className="nav-link" href={link.href}>{link.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="d-flex justify-content-center pb-5">
                <div className="text-center py-2">
                    <img src={Atlassian} className="card-img-top py-3" alt="..." style={{ maxWidth: '9em' }} />
                    <div> &nbsp;© Copyright 2020. All rights reserved. </div>
                </div>
            </div>
        </div>
    )
}