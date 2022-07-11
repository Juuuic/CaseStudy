import React from "react";
import './style/title.css';
import Dropdown from "./Dropdown";

const Title = () => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div class="head">
          <div class="head_item">
            <div class="logo">
                <img id="logo_img" src="/img/logo.png"/>
                <span id="logo">airbnb</span>
            </div>
          </div>

          <div class="head_item">
            <div id="searchbox">
              <button class="bt">어디든지</button>
              <button class="bt">언제든 일주일</button>
              <button class="bt">게스트 추가</button>
            </div>
          </div>

          <div class="head_item">
            <div id="dropdown_menu">
              <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {
                  dropdownVisibility
                  ? '메뉴'
                  : '메뉴'
                }
              </button>
                <Dropdown visibility={dropdownVisibility}>
                  <ul>
                    <li>회원가입</li>
                    <li>로그인</li>
                    <li>숙소 호스트되기</li>
                  </ul>
                </Dropdown>
            </div>
          </div>

        </div>
    )
}

export default Title;