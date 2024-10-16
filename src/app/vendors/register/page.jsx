"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/ui/Button";

const validationSchema = Yup.object().shape({
  country: Yup.string().required("Please select a country"),
});

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Nigeria",
    // Add more countries as needed
  ];

  const handleSubmit = (values) => {
    setLoading(true);
    // Simulate API call or processing
    setTimeout(() => {
      setLoading(false);
      router.push("/vendors/enteremail/");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center py-40 flex-col px-4">
      <div className="flex items-center justify-center flex-col">
        <div>
          <Link href="/">
            <img src="/images/Logo.png" alt="logo" className="mb-6" />
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="hero-title font-medium text-[16px]">
            Set up your shop by completing the following details
          </h1>
        </div>
        <Formik
          initialValues={{ country: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md">
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="hero-title font-medium text-[14px] block mb-2"
                >
                  Country
                </label>
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Button
                type="submit"
                css="bg-forest-green-500 w-full mt-4"
                loading={loading}
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
