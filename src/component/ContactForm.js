import React from "react";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const title = data.title;
    const company = data.company;

    console.log(data);
  };
  return (
    <div className="flex mx-auto items-center justify-center">
      <div>
        <div className="text-center text-4xl font-bold mt-8 mb-10 ">
          <h1>
            <span className="bg-accent p-4 rounded-full">Contact</span>{" "}
          </h1>
        </div>
        <div className="lg:flex justify-center items-center mx-auto my-auto">
          <div className=" card border border-black p-16 bg-yellow-300 w-96">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    First Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  placeholder="Type First Name"
                  className="input border-none rounded-none input-info w-full max-w-xs"
                />
                {errors.firstName && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  placeholder="Type Last Name"
                  className="input border-none rounded-none input-info w-full max-w-xs"
                />
                {errors.lastName && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Title <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: "This field is required" })}
                  placeholder="Type Your Title"
                  className="input border-none rounded-none input-info w-full max-w-xs"
                />
                {errors.title && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.title?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Company <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  {...register("company", {
                    required: "This field is required",
                  })}
                  placeholder="Type Your Company Name"
                  className="input border-none rounded-none input-info w-full max-w-xs"
                />
                {errors.company && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.company?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Phone <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  {...register("phone", { required: "This field is required" })}
                  placeholder="Type Your Phone Number"
                  className="input border-none rounded-none input-info w-full max-w-xs"
                />
                {errors.phone && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.phone?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Business Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "This field is required" })}
                  placeholder="Type Your Business Email"
                  className="input border-none rounded input-info w-full max-w-xs"
                />
                {errors.email && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">
                    Country <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  {...register("country", {
                    required: "This field is required",
                  })}
                  className="select border border-black rounded w-full max-w-xs"
                >
                  <option value="" disabled selected>
                    Select a country
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="India">India</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Uganda">Uganda</option>
                </select>
                {errors.country && (
                  <p className="bg-red-100 py-2 text-red-500 font-semibold mt-4 text-center">
                    {errors.country?.message}
                  </p>
                )}
              </div>

              <input
                className="btn btn-secondary w-full rounded-full mt-4 font-bold"
                type="submit"
                value="Get Started"
              />
            </form>
          </div>
          <div className="p-8">
            <div className="mb-8" bis_skin_checked="1">
              <h1 className="text-2xl font-bold">Headquarters</h1>
              <p className="text-primary">
                <a href="tel:801-717-9361">801-717-9361</a>
              </p>
              <p>2100 W Pleasant Grove Blvd, Suite 300</p>
              <p>Pleasant Grove, UT 84062</p>
              <p className="text-primary">
                <a href="mailto:info@observepoint.com">info@observepoint.com</a>
              </p>
            </div>
            <div className="mb-8" bis_skin_checked="1">
              <h1 className="text-2xl font-bold">US Customer Support:</h1>
              <p className="text-primary">
                <a href="tel:844-677-8776">844-677-8776</a>
              </p>
              <p className="text-primary">
                <a href="mailto:info@observepoint.com">
                  support@observepoint.com
                </a>
              </p>
            </div>
            <div class="fl-rich-text" bis_skin_checked="1">
              <h1 className="text-2xl font-bold">EMEA Office</h1>
              <p className="text-primary">
                <a href="tel:+44 203 741 8033">+44 203 741 8033</a>
              </p>
              <p>Regus, 16 Upper Woburn Place</p>
              <p>Offices 201-203</p>
              <p>Bloomsbury, London WC1H 0BS</p>
            </div>
            <div class="fl-rich-text" bis_skin_checked="1">
              <h1 className="text-2xl font-bold">EMEA Customer Support:</h1>
              <p className="text-primary">
                <a href="tel:+44 0203 741 8033">+44 0203 741 8033</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
