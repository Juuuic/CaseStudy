import React from "react";
import './style/list.css';
import Modal from "./Modal";
import Filter_popup from "./Filter_popup";

const List = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div class="list">
            <div class="l_item">섬</div>
            <div class="l_item">국립공원</div>
            <div class="l_item">통나무집</div>
            <div class="l_item">해변 근처</div>
            <div class="l_item">초소형 주택</div>
            <div class="l_item">디자인</div>
            <div class="l_item">캠핑장</div>
            <div class="l_item">북극</div>
            <div class="l_item">멋진 수영장</div>
            <div class="l_item">동굴</div>
            <div class="l_item">서핑</div>
            <div class="l_item">A자형 주택</div>
            <div class="l_item">최고의 전망</div>
            <React.Fragment>
                <button onClick={openModal}>필터</button>
                <Modal open={modalOpen} close={closeModal} header="필터">
                    <Filter_popup/>
                </Modal>
            </React.Fragment>
        </div>
    )
}

export default List;