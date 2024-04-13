import React from "react";
import { Helmet } from "react-helmet-async";
import contextProvider from "./../components/contextProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import auth from "./../Firebase/firebase.config";
import { toast } from "react-toastify";
import { useEffect } from "react";

const UpdateProfile = () => {
  const { user } = contextProvider();
  const { photoURL, displayName, email } = user;
  let updateMail = email;
  if (!email) {
    updateMail = "Email not found";
  }

  const defaultValues = {
    displayName,
    photoURL,
    email: updateMail,
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...defaultValues });
    }
  }, [isSubmitSuccessful]);

  const onSubmitEdit = (updateInfo) => {
    const { displayName, photoURL } = updateInfo;
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success("Profile Updated Successfully");
        reset(
          { displayName: displayName, photoURL: photoURL },
          { keepValues: false, keepDirty: true, keepDefaultValues: false }
        );
      })
      .catch(() => {
        toast.error("Can't Update. Error occured.");
      });
  };

  // console.log(user);
  return (
    <div className="mx-2">
      <Helmet>
        <title>Update Profile | Nova Estate</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="bg-main rounded-md lg:col-span-1 flex flex-col items-center justify-center  my-10  p-8 text-gray-100">
          <img
            src={photoURL}
            alt={displayName}
            className="object-center w-40 h-40 mb-6 rounded-full"
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">
                {displayName || "Name Not Set"}
              </h2>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="text-gray-400">
                  {email || "Email not found"}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <section className="p-6 my-10 lg:col-span-3 rounded-md bg-main text-gray-50">
            <form
              onSubmit={handleSubmit(onSubmitEdit)}
              className="container flex flex-col mx-auto "
            >
              <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Personal Inormation</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="name" className="text-sm">
                      Name
                    </label>
                    <input
                      {...register("displayName")}
                      id="name"
                      type="text"
                      required={true}
                      placeholder="Name"
                      className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-100  border-gray-700"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      disabled={true}
                      placeholder="Email"
                      className="w-full p-2 disabled:cursor-not-allowed  rounded-md focus:ring focus:ring-opacity-75 text-gray-500  border-gray-700"
                    />
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="address" className="text-sm">
                      Photo URL
                    </label>
                    <input
                      {...register("photoURL")}
                      id="address"
                      type="text"
                      required={true}
                      placeholder="Photo URL"
                      className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-gray-100  border-gray-700"
                    />
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-end py-4">
                <button
                  disabled={!isDirty}
                  
                  className="p-2 rounded-md text-gray-100 bg-violet-500 disabled:bg-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
