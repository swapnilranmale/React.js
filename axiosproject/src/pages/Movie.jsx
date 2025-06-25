import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Title is required"),
});

function Movie() {
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/posts";

  const getMovieData = async () => {
    try {
      const res = await axios.get(api);
      console.log(res.data, "Data");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      title: "",
    },
  });
  useEffect(() => {
    getMovieData();
  }, []);
  //   useEffect(() => {
  //     console.log("State updated:", data);
  //   }, [data]);
  const deleteData = (id) => {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        console.log("Deleted:", id);
        setData((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting:", err);
      });
  };
  const editData = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    if (selectedItem) {
      console.log("Editing:", selectedItem);
      setValue("name", Math.random());
      setValue("title", selectedItem.title || "");
      setValue("id", id);
    }
    setIsEdit(true); // Switch to edit mode
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit((formData) => {
          if (isEdit) {
            axios
              .put(`${api}/${formData?.id}`, formData)
              .then((res) => {
                setData((prev) =>
                  prev.map((item) =>
                    item.id === formData.id ? { ...item, ...formData } : item
                  )
                );
                setIsEdit(false);
                setEditId(null);
                reset();
              })
              .catch((error) => {
                console.error("Update error:", error);
              });
          } else {
            axios
              .post(api, formData)
              .then((res) => {
                console.log("Data submitted successfully:", res.data);
                setData((prev) => [res.data, ...prev]);
                reset();
              })
              .catch((error) => {
                console.error("Submission error:", error);
              });
          }
        })}
      >
        <label>Name</label>
        <input type="text" {...register("name")}></input> <br />
        {errors.name?.message}
        <label>Title</label>
        <input type="text" {...register("title")}></input> <br />
        {errors.title?.message}
        <button type="submit">Add</button>
      </form>
      <h1>
        {data
          .filter((item) => item.id % 1 === 0)
          .map((item) => (
            <div key={item.id}>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <span>{item.title}</span>
              <button onClick={() => editData(item.id)}>Edit</button>
              <button onClick={() => deleteData(item.id)}>Delete</button>
            </div>
          ))}
      </h1>
    </div>
  );
}

export default Movie;
