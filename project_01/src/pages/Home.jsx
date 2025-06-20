import React, { useState } from "react";
import * as Yup from "yup";
function Home() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  console.log(errors);

  //   const validateForm = () => {
  //     let newError = {};
  //     if (!formData.firstname) {
  //       newError.firstname = "required firstname";
  //     }
  //     if (!formData.lastname) {
  //       newError.lastname = "required lastname";
  //     }
  //     setErrors(newError);
  //     return Object.keys(newError).length === 0;
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let isValid = validateForm();
    // if (isValid) {
    //   console.log("form is valid");
    // } else {
    //   console.log("form is invalid");
    // }
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log(formData);
    } catch (error) {
      let newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name required"),
    lastname: Yup.string().required("required"),
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Firstname</label>
        <input
          name="firstname"
          value={formData.firstname}
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.firstname}</p>
      </div>
      <div>
        <label>Lastname</label>
        <input
          name="lastname"
          value={formData.lastname}
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.lastname}</p>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Home;
