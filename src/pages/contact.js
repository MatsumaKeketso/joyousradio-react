import React, { useState } from "react";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import {
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SectionHeader from "../components/sectionHeader";
import { Formik, useFormik } from "formik";
import { Call, Email, Web } from "@mui/icons-material";
import * as Yup from "yup";
import { RadioService } from "../services/radio";

function Contact() {
  const [messageSent, setMessageSent] = useState("");
  const ContactSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    subject: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Please enter your message"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      RadioService.sendMessage(values)
        .then((res) => {
          setMessageSent("Thank you for contacting us.");
        })
        .catch((err) => {
          console.log(err);
        });
      formik.resetForm();
    },
  });
  return (
    <Layout>
      <PageHeader
        imageURl={
          "https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
        pageName={"Contact Us"}
      />
      <Stack>
        <Container>
          <Stack textAlign={"center"} spacing={2} pb={10}>
            <SectionHeader title={"Contact Us"} />
            <Typography variant="h4">We'd like to hear from you</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                <Stack textAlign={"start"}>
                  <TextField
                    id="fullName"
                    name="fullName"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    label="Full Name"
                    fullWidth
                  />
                  {formik.errors.fullName && formik.touched.fullName ? (
                    <Stack px={2}>
                      <Typography variant="caption" color={"red"}>
                        {formik.errors.fullName}
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>
                <Stack textAlign={"start"}>
                  <TextField
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    label="Email"
                    fullWidth
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Stack px={2}>
                      <Typography variant="caption" color={"red"}>
                        {formik.errors.email}
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>

                <Stack textAlign={"start"}>
                  <TextField
                    id="subject"
                    name="subject"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    label="Subject"
                    fullWidth
                  />
                  {formik.errors.subject && formik.touched.subject ? (
                    <Stack px={2}>
                      <Typography variant="caption" color={"red"}>
                        {formik.errors.subject}
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>

                <Stack textAlign={"start"}>
                  <TextField
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    label="Message"
                    multiline
                    fullWidth
                  />
                  {formik.errors.message && formik.touched.message ? (
                    <Stack px={2}>
                      <Typography variant="caption" color={"red"}>
                        {formik.errors.message}
                      </Typography>
                    </Stack>
                  ) : null}
                </Stack>

                <Button
                  //   disabled={formik.isValid}
                  type="submit"
                  variant="contained"
                >
                  Send Message
                </Button>
                {messageSent && (
                  <Stack p={2}>
                    <Typography color={"green"} variant="h5">
                      {messageSent}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </form>
          </Stack>
          <Stack spacing={1} pb={10}>
            <Stack
              direction={"row"}
              spacing={2}
              p={2}
              bgcolor={"ButtonHighlight"}
            >
              <IconButton disabled>
                <Call />
              </IconButton>
              <Stack>
                <Typography variant="h6">Contact Number</Typography>
                <Typography>087 943 8100</Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              p={2}
              bgcolor={"ButtonHighlight"}
            >
              <IconButton disabled>
                <Call />
              </IconButton>
              <Stack>
                <Typography variant="h6">Fax</Typography>
                <Typography>086 502 3213</Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              p={2}
              bgcolor={"ButtonHighlight"}
            >
              <IconButton disabled>
                <Email />
              </IconButton>
              <Stack>
                <Typography variant="h6">Email Address</Typography>
                <Typography>admin@joyousradio.co.za</Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              p={2}
              bgcolor={"ButtonHighlight"}
            >
              <IconButton disabled>
                <Web />
              </IconButton>
              <Stack>
                <Typography variant="h6">Website</Typography>
                <Typography>www.joyousradio.co.za</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
}

export default Contact;
