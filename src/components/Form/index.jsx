import React, { useEffect } from "react";
import "./style.scss";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addSkill } from "../../features/skillsSlice";

const validationSchema = Yup.object({
  skillName: Yup.string()
    .min(2, "Skill name must be at least 2 characters")
    .required("Skill name is required"),
  skillRange: Yup.number()
    .min(1, "Skill range must be between 1 and 100")
    .max(100, "Skill range must be between 1 and 100")
    .required("Skill range is required"),
});

const MyForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ skillName: "", skillRange: "" }}
      validationSchema={validationSchema}
      onSubmit={({ skillName, skillRange }) => {
        dispatch(
          addSkill({ id: Date.now(), name: skillName, range: skillRange })
        );
      }}
    >
      <FormikForm className="form">
        <div className="form-element">
          <label htmlFor="skillName">Skill name:</label>
          <Field name="skillName" type="text" placeholder="Enter skill name" />
        </div>
        <ErrorMessage
          name="skillName"
          className="form-error1"
          component="div"
        />
        <div className="form-element">
          <label htmlFor="skillRange">Skill range:</label>
          <Field
            name="skillRange"
            type="number"
            placeholder="Enter skill range"
          />
        </div>
        <ErrorMessage
          name="skillRange"
          className="form-error2"
          component="div"
        />
        <button type="submit">Add skill</button>
      </FormikForm>
    </Formik>
  );
};

export default MyForm;
