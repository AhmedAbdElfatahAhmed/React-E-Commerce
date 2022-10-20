import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./signUp.css"
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const citiesOptions = [
    { value: "1", label: "Alexandria" },
    { value: "2", label: "Cairo" },
    { value: "3", label: "Luxor" },
  ];
  // console.log("error", errors);
  return (
    <div className="container">
    <h2 className="text-center text-primary">Register Form</h2>
      <div className="row">
        <div className="offset-md-3 col-md-6 form-container rounded-5 py-4 px-5 my-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
           <div className="col-md-6">
           <Form.Group className="mb-3" controlId="formBasicFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                {...register("FName", {
                  required: true,
                  
                })}
                type="text"
                placeholder="Enter first name"
              />
              {errors?.FName?.type === "required" && (
                <Form.Text className="text-danger fw-bold">
                  Your first name is required
                </Form.Text>
              )}
              
            </Form.Group>
            </div>
            <div className="col-md-6">
           <Form.Group className="mb-3" controlId="formBasicLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register("LName", {
                  required: true,
                  
                })}
                type="text"
                placeholder="Enter last name"
              />
              {errors?.LName?.type === "required" && (
                <Form.Text className="text-danger fw-bold">
                  Your last name is required
                </Form.Text>
              )}
              
            </Form.Group>
            </div>
           </div>

           <div className="row mb-3">
           <div className="col-md-6">
           <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                {...register("userName", {
                  required: true,
                  maxLength: 15,
                })}
                type="text"
                placeholder="Enter user name"
              />
              {errors?.userName?.type === "required" && (
                <Form.Text className="text-danger fw-bold">
                 Your user name is required
                </Form.Text>
              )}
              {errors?.userName?.type === "maxLength" && (
                <Form.Text className="text-danger fw-bold">
                  max length of user name is 15 character
                </Form.Text>
              )}
            </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...register("email", {
                  required: true,
                  pattern: /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                })}
                type="email"
                placeholder="Enter email"
              />
              {errors?.email?.type === "required" && (
                <Form.Text className="text-danger fw-bold">
                  Email is required
                </Form.Text>
              )}
              {errors?.email?.type === "pattern" && (
                <Form.Text className="text-danger fw-bold">
                  Your Email is Not Vaild
                </Form.Text>
              )}
            </Form.Group>
           </div>
           </div>
           <div className="row mb-3">
           <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@%$#?!^&*-]).{8,}$/i,
                })}
                type="password"
                placeholder="Password"
              />
              {errors?.password?.type === "required" && (
                <Form.Text className="text-danger fw-bold">
                  Password is required
                </Form.Text>
              )}

              {errors?.password?.type === "pattern" && (
                <Form.Text className="text-danger fw-bold">
                  password length not less than 8 characters , contains at least
                  one lowercase , one uppercase , at least one digit and special
                  character.
                </Form.Text>
              )}
            </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                {...register("confirmPassword", {
                  validate: (val) => val === watch("password"),
                })}
                type="password"
                placeholder="ReEnter Password"
              />
              {errors?.confirmPassword?.type === "validate" && (
                <Form.Text className="text-danger fw-bold">
                  Passwords should match
                </Form.Text>
              )}
            </Form.Group>
            </div>
            </div>

            <div className="row mb-3">
            <div className="col-md-6">
            {/* check box from bootstrap 5 */}
            <div className="check-box">
              <p className=""> Choose your skills</p>
              <div className="d-flex">
              <div className="form-check w-50">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="html5"
                  id="HTML5"
                  {...register("skills")}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  HTML5
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="css3"
                  id="CSS3"
                  {...register("skills")}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  CSS3
                </label>
              </div>
              </div>
              <div className="d-flex">
              <div className="form-check w-50">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="javascript"
                  id="javascript"
                  {...register("skills")}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  JavaScript
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="react"
                  id="React"
                  {...register("skills")}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  React
                </label>
              </div>
              </div>
            </div>
            </div>

            <div className="col-md-6">
            {/* Select from react-select library */}
            <div className="city-options">
              <p> Select your city</p>
              <Controller
                name="select"
                control={control}
                render={({ field }) => (
                  <Select {...field} options={citiesOptions} />
                )}
              />
            </div>
            </div>
            </div>

            <Button className="btn btn-primary fs-5 rounded-5 w-100" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
