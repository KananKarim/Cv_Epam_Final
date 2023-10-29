import React, { useEffect } from "react";
import dateLine from "../../assets/dateLine.svg";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getEducations } from "../../features/educationSkills";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const EducationBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);
  const data = useSelector((state) => state.educations.educations);
  const loading = useSelector((state) => state.educations.loading);
  const error = useSelector((state) => state.educations.error);
  return (
    <>
      {loading ? (
        <AiOutlineLoading3Quarters className="education-icon loading" />
      ) : error ? (
        <p className="education-error">Something went wrong with the server</p>
      ) : (
        data &&
        data.map((item) => (
          <article key={item.date} className="education-body">
            <div className="education-body_date">
              <time dateTime={item.date}>{item.date}</time>
              <img src={dateLine} />
            </div>
            <div className="education-body_desc">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))
      )}
    </>
  );
};

export default EducationBody;
