import React, { useState } from "react";
import { useRef } from "react";
import "./Form.css"

const Form = () => {
  const data = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: ""
  };

  const errorMsgs = {
    nama: "",
    email: "",
    noHandphone: ""
  };

  const [baseData, setBaseData] = useState(data);
  const [errorMsg, setErrorMsg] = useState(errorMsgs);
  const inputFile = useRef(null);
  
  const changeHandler = (e) => {
    setBaseData({ ...baseData, [e.target.name]: e.target.value });
    const nameRegex = /^[A-Za-z ]*$/;
    const emailRegex = /^\w+([\].-]?\w+)*@\w+([\].-]?\w+)*(\.\w{2,3})+$/;
    const handphoneRegex = /^[\d-]{9,14}$/;
    
    if (e.target.name === "nama") {
      if (nameRegex.test(e.target.value)) {
        setErrorMsg({ ...errorMsg, nama: ""});
      } else {
        setErrorMsg({ ...errorMsg, nama: "Nama Lengkap Harus Berupa Huruf"});
      }
    }
    
    if (e.target.name === "email") {
      if (emailRegex.test(e.target.value)) {
        setErrorMsg({ ...errorMsg, email: ""});
      } else {
        setErrorMsg({ ...errorMsg, email: "Email Tidak Sesuai"});
      }
    }
    
    if (e.target.name === "noHandphone") {
      if (handphoneRegex.test(e.target.value)) {
        setErrorMsg({ ...errorMsg, noHandphone: ""});
      } else {
        setErrorMsg({ ...errorMsg, noHandphone: "No Handphone Tidak Sesuai"});
      }
    }
  };
  
  const submitHandler = () => {
    if (errorMsg.nama !== "" ||
      errorMsg.email !== "" ||
      errorMsg.noHandphone !== "" ||
      baseData.nama === "" ||
      baseData.email === "" ||
      baseData.noHandphone === "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data Pendaftar ${baseData.nama} Berhasil Diterima`);
    }
    resetHandler();
  };
  
  const resetHandler = (e) => {
    e.preventDefault();
    setBaseData(baseData);
    setErrorMsg("");
  };
  

  return (
    <form>
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>
      <div className="inputText">
        <label>Nama Lengkap:</label>
        <input
          type="text"
          name="nama"
          value={baseData.nama}
          onChange={changeHandler}
          required
          />
        <p>{errorMsg.nama}</p>

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={baseData.email}
          onChange={changeHandler}
          required
        />
        <p>{errorMsg.email}</p>

        <label>No Handphone:</label>
        <input
          type="text"
          name="noHandphone"
          value={baseData.noHandphone}
          onChange={changeHandler}
          required
        />
        <p>{errorMsg.noHandphone}</p>
      </div>
      <div className="inputRadio">
        <label>Latar Belakang Pendidikan:</label>
        <div className="radioSelection">
          <input
            type="radio"
            name="pendidikan"
            value={baseData.pendidikan}
            onChange={changeHandler}
            required
          />
          IT

          <input
            type="radio"
            name="pendidikan"
            value={baseData.pendidikan}
            onChange={changeHandler}
            required
          />
          Non IT
        </div>
      </div>
      <div className="dropdown">
        <label>Kelas Coding Yang Dipilih:</label>
        <select
          name="kelas"
          value={baseData.kelas}
          onChange={changeHandler}
          required
        >
          <option value="">Pilih Salah Satu Program</option>
          <option value="backend">Coding Backend with Golang</option>
          <option value="frontend">Coding Frontend with ReactJS</option>
          <option value="fullstack">Fullstack Developer</option>
        </select>
      </div>
      <div className="inputFile">
        <label>Foto Surat Kesungguhan :</label>
        <input
          type="file"
          name="file"
          ref={inputFile}
          required
        />
      </div>
      <div className="inputTextarea">
        <label>Harapan Untuk Coding Bootcamp:</label>
        <textarea type="textarea"/>
      </div>
      <div className="button">
        <button
          className="buttonSubmit"
          onClick={() => {
            submitHandler();
          }}
        >
          Submit
        </button>
        <button
          className="buttonReset"
          onClick={() => {
            resetHandler();
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;