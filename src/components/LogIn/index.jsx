import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log("error", errors);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-6 form-container login rounded-5 py-5 px-5 my-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-12 mb-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control  className="py-2"
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
              <div className="col-md-12 mb-4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control className="py-2"
                    {...register("password", {
                      required: true,
                    })}
                    type="password"
                    placeholder="Password"
                  />
                  {errors?.password?.type === "required" && (
                    <Form.Text className="text-danger fw-bold">
                      Password is required
                    </Form.Text>
                  )}
                </Form.Group>
              </div>
            </div>

            <Button
              className="btn btn-primary fs-5 rounded-5 w-100"
              type="submit"
            >
              Log in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
