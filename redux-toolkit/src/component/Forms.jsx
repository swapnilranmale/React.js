import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
const schema = Yup.object().shape({
  firstname: Yup.string().required("first name is required"),
  email: Yup.string().email().required("please enter correct email"),
  pass: Yup.string().required("enter pass"),
  cpass: Yup.string().required("enter c pass"),
});

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "swapnil",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label>Firstname</label>
        <input type="text" {...register("firstname")}></input> <br />
        {errors.firstname?.message}
        <label>Email</label>
        <input type="text" {...register("email")}></input> <br />
        {errors.email?.message}
        <label>Password</label>
        <input type="text" {...register("pass")}></input> <br />
        {errors.pass?.message}
        <label>C-Password</label>
        <input type="text" {...register("cpass")}></input> <br />
        {errors.cpass?.message}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Forms;
