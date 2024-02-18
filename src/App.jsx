import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form>
        <input type="text" placeholder="ป้อนชื่อรูปภาพที่ต้องการค้นหา"/>
        <button type="submit">ค้นหา</button>
      </form>
    </>
  );
}

export default App;
