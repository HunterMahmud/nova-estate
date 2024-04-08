import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import contextProvider from "./contextProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {emailPasswordRegister}= contextProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitRegister = (data) => {
    const {email, password, photoURL, name} = data;
    emailPasswordRegister(email, password)
    .then(res=> {
      updateProfile(res.user, {
        displayName: name, photoURL: photoURL
      }).then(() => {
       console.log(res.user);

      }).catch((error) => {
        console.log('and error occured');
      });
    })
    .catch(err=>console.log(err))
  };
  // console.log(errors);
  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-12 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register Now!</h1>
        <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Name
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            {errors?.name?.message && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Photo URL
            </label>
            <input
              {...register("photoURL", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i,
                  message: "URL must be valid and must include http or https",
                },
              })}
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            {errors?.photoURL?.message && (
              <span className="text-red-500">{errors.photoURL.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Email
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            {errors?.email?.message && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
                validate: {
                  oneLower: (value) => {
                    if (/^(?=.*[a-z])/.test(value)) {
                      return true;
                    }
                    return "Password must include a lowercase character.";
                  },
                  oneUpper: (value) => {
                    if (/^(?=.*[A-Z])/.test(value)) {
                      return true;
                    }
                    return "Password must include a uppercase character.";
                  },
                },

                maxLength: {
                  value: 10,
                  message: "Password must be at most 12 characters.",
                },
              })}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-500 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
            {errors?.password?.message && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Register
          </button>
        </form>
        <p className="text-sm text-center sm:px-6 text-gray-400">
          Have an account?
          <Link to="/login" className="underline text-gray-100 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
