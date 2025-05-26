import { useMemo, useState } from "react";

export default function ContectUs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    message: "",
  });

  const sendData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  // validation ---------------------------------------->
  // //name validation --------------->
  const validateName = (user) => user.name.match(/[a-z]{3,}/i);
  const isInvalidName = useMemo(() => {
    return validateName(user) ? true : false;
  }, [user.name]);

  // //email validation --------------->
  const validateEmail = (user) =>
    user.email.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
  const isInvalidEmail = useMemo(() => {
    return validateEmail(user) ? true : false;
  }, [user.email]);

  // //phone validation --------------->
  const validatePhone = (user) => user.phone.match(/[0-9]{10,}/);
  const isInvalidPhone = useMemo(() => {
    return validatePhone(user) ? true : false;
  }, [user.phone]);

  // //profile validation --------------->
  const validateProfile = (user) => user.profile.match(/[a-z]{3,}/i);
  const isInvalidProfile = useMemo(() => {
    return validateProfile(user) ? true : false;
  }, [user.profile]);

  // submit handler ---------------------->
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isInvalidName && isInvalidEmail && isInvalidPhone && isInvalidProfile) {
      console.log(user);
      alert("Details Submitted Succesfully, We will get back soon");
      setUser({
        name: "",
        email: "",
        phone: "",
        profile: "",
        message: "",
      });
    } else {
      alert("Please Enter Valid Details");
    }
  };

  return (
    <>
      <div className="max-w-7xl m-auto p-2 dark:bg-[#121212]">
        <div className="border border-black rounded-xl px-4 py-20 flex justify-center items-start gap-4 dark:border-white">
          <div className="lg:w-2/4 sm:w-3/4 w-[80vw] rounded-xl p-10 shadow-[inset_0_4px_20px_rgba(0,100,255,0.5)] dark:shadow-[inset_0_4px_20px_rgba(255,253,0,0.5)] font-josefin">
            <form
              className="flex flex-col"
              action=""
              name="contact"
              onSubmit={handleSubmit}
            >
              <input
                className="border-b-2 border-gray-500 outline-none py-2 dark:bg-[#121212] dark:text-white"
                type="text"
                placeholder="Name"
                name="name"
                onChange={sendData}
                value={user.name}
              />
              <input
                className="border-b-2 border-gray-500 outline-none py-2 dark:bg-[#121212] dark:text-white"
                type="email"
                placeholder="Email"
                name="email"
                onChange={sendData}
                value={user.email}
              />
              <input
                className="border-b-2 border-gray-500 outline-none py-2 dark:bg-[#121212] dark:text-white"
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={sendData}
                value={user.phone}
              />
              <input
                className="border-b-2 border-gray-500 outline-none py-2 dark:bg-[#121212] dark:text-white"
                type="text"
                placeholder="Profile"
                name="profile"
                onChange={sendData}
                value={user.profile}
              />
              <textarea
                className="border-b-2 border-gray-500 outline-none py-2 dark:bg-[#121212] dark:text-white"
                id=""
                placeholder="Enter any massage"
                name="message"
                onChange={sendData}
                value={user.message}
              ></textarea>
              <button
                className="rounded-full px-2 py-1 mt-8 duration-700 ease-in-out bg-blue-600 hover:bg-blue-500 text-white active:scale-105 active:duration-0"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
