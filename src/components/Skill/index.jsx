import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../../features/skillsSlice";

const Skill = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.skills);
  const [savedSkills, setSavedSkills] = useState(
    JSON.parse(localStorage.getItem("skills")) || []
  );

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  useEffect(() => {
    if (skills.length > 0) {
      setSavedSkills(skills);
      localStorage.setItem("skills", JSON.stringify(skills));
    }
  }, [skills]);

  return (
    <dl>
      {savedSkills.map((skill) => (
        <dd key={skill.id} className={`percentage range-${skill.range}`}>
          <span className="text">{skill.name}</span>
        </dd>
      ))}
    </dl>
  );
};

export default Skill;
