import React, { useMemo, useState } from "react";

// import nextui component ------>
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";

export default function ContectUs(props) {
  // state mangement of email & phone no. ------------------>
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [profileValue, setProfileValue] = useState("");
  const [textValue, setTextValue] = useState("");

  // validation of email ------------>
  const validateEmail = (emailValue) =>
    emailValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  // validation of phone no. --------------->
  const validatePhone = (phoneValue) => phoneValue.match(/^\d{10}$/);

  // email validation return using hook--->
  const isInvalidEmail = useMemo(() => {
    if (emailValue === "") return false;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  // email validation return using hook--->
  const isInvalidPhone = useMemo(() => {
    if (phoneValue === "") return false;
    return validatePhone(phoneValue) ? false : true;
  }, [phoneValue]);

  // form submission --------->
  const postData = (event)=>{
    event.preventDefault();
    alert(`
      Thank You ${nameValue}
      `)
      setNameValue("");
      setEmailValue("");
      setPhoneValue("");
      setProfileValue("");
      setTextValue("");
  }
  
  return (
    <>
      <section className={`p-3 ${props.darkMode ? "dark bg-[#18181b]" : ""}`}>
        <Card
          className="max-w-screen-2xl min-h-[80vh] m-auto dark:border-1 dark:border-[#3D4852]"
          shadow="lg"
        >
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin text-2xl font-bold">My Educations</p>
            </div>
          </CardHeader>

          <Divider className="dark:bg-[#3D4852]" />

          <CardBody className="w-full">
            <Card className="md:w-3/5 w-11/12 m-auto dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">

              <CardBody className="md:px-16 px-4">
                <div className="w-full flex flex-col">
                  <form action="" onSubmit={postData} name="contact" data-netlify="true">
                    <Input
                      required
                      type="text"
                      value={nameValue}
                      variant="underlined"
                      label="Name"
                      name="name"
                      onValueChange={setNameValue}
                    />

                    <Input
                      required
                      value={emailValue}
                      type="email"
                      label="Email"
                      variant="underlined"
                      isInvalid={isInvalidEmail}
                      color={isInvalidEmail ? "danger" : ""}
                      errorMessage="Please enter a valid email"
                      onValueChange={setEmailValue}
                    />

                    <Input
                      required
                      value={phoneValue}
                      type="text"
                      label="Phone No"
                      variant="underlined"
                      isInvalid={isInvalidPhone}
                      color={isInvalidPhone ? "danger" : ""}
                      errorMessage="Please enter a valid phone no"
                      onValueChange={setPhoneValue}
                    />

                    <Input
                      type="text"
                      value={profileValue}
                      variant="underlined"
                      label="Profile"
                      name="profile"
                      onValueChange={setProfileValue}
                    />

                    <Textarea
                      variant="underlined"
                      value={textValue}
                      labelPlacement="inside"
                      placeholder="Write any message"
                      label="Comment"
                      name="message"
                      onValueChange={setTextValue}
                    />

                    <Button
                      className="w-14 float-right mt-4 hidden md:block"
                      color="primary"
                      variant="ghost"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button
                      className="w-14 block md:hidden float-right mt-4"
                      color="primary"
                      variant="solid"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </CardBody>

            </Card>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
