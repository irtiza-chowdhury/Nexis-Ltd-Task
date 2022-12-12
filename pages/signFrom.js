import {
    Box,
    Button,
  } from "@mui/material";
  import { Field, Form, Formik } from "formik";
  import { TextField } from "formik-material-ui";
  import React, { useState } from "react";
  import * as Yup from "yup";
  import { useRouter } from "next/router";
  import Link from "next/link";
  
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
  
  export default function Signform() {
    const router = useRouter();
    return (
      <div >
        <div>
          <div>
            <FormikStepper
              initialValues={{
                first_name: "",
                last_Name: "",
                email: "",
                phone_number: "",
                password: "",
              }}
              onSubmit={async (values) => {
                let headers = new Headers({
                  "Content-Type": "application/json",
                  "Accept-Version": "v1",
                });
  
    
                const requestParam = {
                  method: "POST",
                  mode: "cors",
                  headers: headers,
                  cache: "no-cache",
                  redirect: "follow",
                  referrer: "no-referrer",
                  credentials: "include",
                  body: JSON.stringify({ ...values }),
                };
                try {
                  const response = await fetch(
                    `https://test.nexisltd.com/signup`,
                    requestParam
                  );
                
                  if (response.status === 200) {
              
                    router.push("/");
                  } else {
                    console.log("Some error occured");
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <FormikStep>
                <Box className="mx-auto flex justify-center w-full px-[20px] mobile:w-[320px] mobile:px-0 sm:w-[320px] md:w-[280px] lg:w-[320px] pb-[40px]">
                  <Field
                    className="w-full pl-[15px]"
                    name="first_name"
                    required
                    placeholder="Write your first name"
                  />
                </Box>
                <Box
                  paddingBottom={2}
                  className="mx-auto flex justify-center w-full px-[20px] mobile:w-[320px] mobile:px-0 sm:w-[320px] md:w-[280px] lg:w-[320px]"
                >
                  <Field
                    className="w-full pl-[15px]"
                    name="last_Name"
                    required
                    placeholder="Write your last name"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                className="space-y-[40px]"
              >
                <Box className="flex space-x-[10px] mx-auto justify-center w-full px-[20px] mobile:w-[320px] mobile:px-0 sm:w-[320px] md:w-[280px] lg:w-[320px] pb-[40px]">
                  <Field className="w-2/12 text-center" value="+880" />
                  <Field
                    className="w-10/12 pl-[15px]"
                    name="phone_number"
                    type="number"
                    required
                    placeholder="1XXXXXXXXX"
                  />
                </Box>
                <Box className="flex space-x-[10px] mx-auto justify-center w-full px-[20px] mobile:w-[320px] mobile:px-0 sm:w-[320px] md:w-[280px] lg:w-[320px] pb-[40px]">
                  <Field
                    className="w-full pl-[15px]"
                    name="email"
                    type="email"
                    required
                    placeholder="enter your email address"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                validationSchema={Yup.object({
                  password: Yup.string()
                    .required("No password provided.")
                    .min(8, "Password is too short - should be 8 chars minimum."),
                })}
              >
                <Box className="flex space-x-[10px] mx-auto justify-center w-full px-[20px] mobile:w-[320px] mobile:px-0 sm:w-[320px] md:w-[280px] lg:w-[320px] pb-[40px]">
                  <Field
                    className="w-full pl-[15px]"
                    name="password"
                    type="password"
                    minlength={8}
                    required
                    placeholder="enter your password"
                  />
                </Box>
              </FormikStep>
            </FormikStepper>
          </div>
        </div>
      </div>
    );
  }
  
  export function FormikStep({ children }) {
    return <>{children}</>;
  }
  
  export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);
  
    function isLastStep() {
      return step === childrenArray.length - 1;
    }
  
    return (
      <>
        <Formik
          {...props}
          validationSchema={currentChild.props.validationSchema}
          onSubmit={async (values, helpers) => {
            if (isLastStep()) {
              await props.onSubmit(values, helpers);
              setCompleted(true);
            } else {
              setStep((s) => s + 1);
              helpers.setTouched({});
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off">
              {currentChild}
  
              <div
                className="flex justify-center items-baseline space-x-[20px] pt-[70px]"
                spacing={2}
              >
                {step > 0 ? (
                  <div>
                    <Button
                      className="text-gray bg-white hover:text-black hover:bg-white inter secondary-button back-button"
                      disabled={isSubmitting}
                      variant="contained"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      Back
                    </Button>
                  </div>
                ) : null}
                <div>
                  <button
                    className="primary-button inter shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-blue "
                    disabled={isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    {isSubmitting
                      ? "Submitting"
                      : isLastStep()
                      ? "Submit"
                      : "Next Step →"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {step < 1 && (
          <div>
            <div className="flex justify-center align-baseline pt-[60px] pb-[30px] md:pb-0 text-sm font-medium text-gray">
              Already have an account?
              <Link
                className="uppercase text-md pl-[10px] text-blue underline font-semibold"
                href="./"
              >
                login here
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
  