import React from "react";
import './style/filter_popup.css';

const Filter_popup = () => {
    return (
        <div class="filter">
            <div class="filter_item">
                <div class="fitem_title">가격범위</div>
                <div><br/></div>
                <div>평균 1박 요금은 $478,905입니다</div>
            </div>

            <div class="filter_item">
                <br/>
            </div>

            <div class="filter_item">
                <div class="fitem_title">숙소 유형</div>
            </div>

            <div class="filter_item">
                <br/>
            </div>

            <div class="filter_item">
                <div class="fitem_title">침실과 침대</div>
                <div><br/></div>
                <div>침실 수</div>
                <div><br/></div>
                <div class="bed">
                    <div class="bed_bt">
                        <button>상관없음</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                </div>
                <div><br/></div>
                <div>침대 수</div>
                <div><br/></div>
                <div class="bed">
                    <div class="bed_bt">
                        <button>상관없음</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter_popup;