import React, {useState} from "react";
import './style/container.css';

const Container_item = () => {
    return (
        <div class="container_item">
            <img src="/img/img1.png"/>
            <div class="container_item_title">
                <div id="ci_title">MV,몰디브</div>
                <div id="ci_bt">NEW</div>
            </div>
            <div class="ci_caption">
                6596km<br/>
                7월 9일 ~ 14일<br/>
            </div>
            <div class="ci_price">$2,720,946 /박</div>
        </div>
    )
}

export default Container_item;