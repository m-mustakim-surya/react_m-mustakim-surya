import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FetchAbout } from "../store/SliceAbout";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAbout());
  }, [dispatch]);

  const data = useSelector((state) => state.about);
  // console.log(data);

  return (
    <div>
      <Navbar />
      <div className="p-5 text-center bg-dark">
        <h1 className="fw-bold text-light">About</h1>
        <div className="m-5 d-flex flex-wrap justify-content-center">
          {data.data?.map((value) => (
            <div className="bg-dark mt-5 w-25">
              <img src={value.avatar} className="avatar" alt="avatar"/>
              <div className="mt-2">
                <h4 className="text-light">{value.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
