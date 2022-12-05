import React from "react";
import '../css/common.css'

function Main (props) {
  return (
    <main className="main_page">
      <div className="box">
        <div className="inner">
          <h1 className="portfolio">PortFolio</h1>
          <div className="left_tp">
            <p>Web Publisher</p>
            <p>Kim Dayoung</p>
          </div>
          <div className="left_bt">
            <p></p>
            <p></p>
          </div>
          <div className="right_tp">
            <p className="now_year">{props.year}</p>
          </div>
          <div className="right_bt">
            <p>kdy93102@naver.com</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main