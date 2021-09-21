import React, { Component } from 'react'

export default class ImageSection extends Component {
    render() {
        return (
        <>
            <section id="main-heading">
            <div id="main-heading-left">
                <div>
                    <h1>Chocolate Pizza</h1>
                    <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>

                </div>

            </div>
            <div id="main-heading-right">
               <img class="print" src="print-icon.png" alt = "print" />
            </div>
        </section>
        <section id="main-section" />

            <img src="choco-pizza.png" alt="chocolate pizza" />
        </>
        )
    }
}
