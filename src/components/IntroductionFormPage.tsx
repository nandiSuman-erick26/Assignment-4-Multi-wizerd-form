// import React from 'react'
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import type { PersonalIntroductionData } from "../typescript/interface/multipartFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../hooks/context/FormContext.create";
import { toast } from "sonner";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  CircleArrowRight,
  Github,
  Mail,
  ReceiptText,
  User,
} from "lucide-react";

const introSchema = yup.object({
  first_name: yup
    .string()
    .required("This feild can not be empty!")
    .min(3, "Minimum 3 characters!"),
  // middle_name: yup.string(),
  last_name: yup
    .string()
    .required("This feild can not be empty!")
    .min(3, "Minimum 3 characters!"),
  father_name: yup
    .string()
    .required("This feild can not be empty!")
    .min(5, "Minimum 5 characters!"),
  mother_name: yup
    .string()
    .required("This feild can not be empty!")
    .min(5, "Minimum 5 characters!"),
  age: yup.string().required("This feild can not be empty!"),
  gender: yup.string().required("This feild can not be empty!"),
  // d_o_b: yup.string(),
  phone_number: yup
    .string()
    .required("This feild can not be empty!")
    .min(10, "Phone number must be 10 characters!"),
  // alternative_number: yup.string(),
  email: yup
    .string()
    .email("Provide a valid email-id!")
    .required("This feild can not be empty!"),
  // github_profile: yup.string(),
  // linkedIn_profile: yup.string()
});
const IntroductionFormPage = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }
  const { formState, firstStepSubmission } = context;
  console.log("firstStepSubmission data checking from the provider", formState);
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalIntroductionData>({
    resolver: yupResolver(introSchema),
    defaultValues: {
      first_name: formState?.formData?.introData?.first_name || "",
      middle_name: formState?.formData?.introData?.middle_name || "",
      last_name: formState?.formData?.introData?.last_name || "",
      father_name: formState?.formData?.introData?.father_name || "",
      mother_name: formState?.formData?.introData?.mother_name || "",
      age: formState?.formData?.introData?.age || "",
      gender: formState?.formData?.introData?.gender || "",
      d_o_b: formState?.formData?.introData?.d_o_b || "",
      phone_number: formState?.formData?.introData?.phone_number || "",
      alternative_number:
        formState?.formData?.introData?.alternative_number || "",
      email: formState?.formData?.introData?.email || "",
      github_profile: formState?.formData?.introData?.github_profile || "",
      linkedIn_profile: formState?.formData?.introData?.linkedIn_profile || "",
    },
  });

  const onSubmit: SubmitHandler<PersonalIntroductionData> = (
    data: PersonalIntroductionData
  ) => {
    console.log("data-first-step-personal-info:-", data);
    firstStepSubmission(data);
    if (formState?.error) {
      toast.error(formState?.error || "Something went wrong!");
      reset();
    }
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          bgcolor: "#ffffff54",
          display: "flex",
          justifyContent: { xs: "center", md: "", lg: "" },
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          gap: 2,
          padding: { xs: 0, md: 1, lg: 1 },
          borderRadius: 3,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              fontSize: 18,
              bgcolor: "#00eeff59",
              fontWeight: 600,
              color: "#004a50ff",
            }}
          >
            {formState?.current_step + 1}
          </Avatar>
          <Typography
            sx={{ textTransform: "uppercase", fontWeight: 600, fontSize: 18 }}
          >
            personal information
          </Typography>
        </Box>
        <Box sx={{ width: "95%" }}>
          {/* {basic detais} */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>
                <User size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                basic details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                width: "95%",
                padding: 1,
                gap: 1,
              }}
            >
              {" "}
              <TextField
                label="First name *"
                fullWidth
                size="small"
                {...register("first_name")}
                error={!!errors?.first_name}
                helperText={errors?.first_name?.message}
              />
              <TextField
                label="Middle name"
                size="small"
                fullWidth
                // {...register("middle_name")}
                // error={!!errors?.middle_name}
                // helperText={errors?.middle_name?.message}
              />
              <TextField
                label="Last name *"
                size="small"
                fullWidth
                {...register("last_name")}
                error={!!errors?.last_name}
                helperText={errors?.last_name?.message}
              />
            </Box>
          </Box>
          {/* {contact detais} */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>
                <Mail size={22} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                contact details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "95%",
                padding: 1,
                gap: 1,
              }}
            >
              <TextField
                label="Email-id *"
                size="small"
                fullWidth
                {...register("email")}
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: { xs: "column", sm: "row" },
                  width: "100%",
                  gap: 2,
                }}
              >
                <TextField
                  label="Phone Number *"
                  size="small"
                  type="number"
                  fullWidth
                  {...register("phone_number")}
                  error={!!errors?.phone_number}
                  helperText={errors?.phone_number?.message}
                />
                <TextField
                  label="Alternate Number"
                  size="small"
                  fullWidth
                  type="number"
                  // {...register("alternative_number")}
                  // error={!!errors?.alternative_number}
                  // helperText={errors?.alternative_number?.message}
                />
              </Box>
            </Box>
          </Box>
          {/* {additional detais} */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>
                <ReceiptText size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                additional details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                width: "100%",
                alignItems: { xs: "flex-start", md: "center" },
                gap: { xs: 2, md: 0 },
              }}
            >
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <FormControl error={!!errors?.gender}>
                    <Typography>Select your Gender: *</Typography>
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                    {errors?.gender && (
                      <FormHelperText>{errors.gender.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />

              <TextField
                label="Age *"
                size="small"
                type="number"
                {...register("age")}
                error={!!errors?.age}
                helperText={errors?.age?.message}
                sx={{ width: { xs: "100%", md: "auto" } }}
              />
              <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Date of birth" sx={{ width: "100%" }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: 1,
                gap: 1,
              }}
            >
              <TextField
                label="Father's name *"
                size="small"
                {...register("father_name")}
                error={!!errors?.father_name}
                helperText={errors?.father_name?.message}
              />
              <TextField
                label="Mother's name *"
                size="small"
                {...register("mother_name")}
                error={!!errors?.mother_name}
                helperText={errors?.mother_name?.message}
              />
            </Box>
          </Box>
          {/* {social detais} */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>
                <Github size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                social details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 1,
              }}
            >
              <TextField
                label="Github Profile"
                size="small"
                fullWidth
                // {...register("github_profile")}
                // error={!!errors?.github_profile}
                // helperText={errors?.github_profile?.message}
              />
              <TextField
                label="LinkedIn Profile"
                size="small"
                fullWidth
                // {...register("linkedIn_profile")}
                // error={!!errors?.linkedIn_profile}
                // helperText={errors?.linkedIn_profile?.message}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            // mt: 2,
            position: { xs: "relative", md: "relative" },
            // bottom: { xs: 10, md: "30", lg:"none" },
            // right: { xs: 0},
            // top:{xs:"none",md:0, lg:0},
            zIndex: 1000,
            pointerEvents: "none",
            "& > button": { pointerEvents: "auto" },
          }}
        >
          <Button
            type="submit"
            sx={{
              bgcolor: { xs: "transparent", md: "transparent" }, // Solid button on transparent background
              border: "none",
              "&:hover": {
                bgcolor: { xs: "#f0f0f0", md: "transparent" },
                "& svg": {
                  stroke: "#0026ffff",
                  transform: "translateX(3px)",
                  transition: "0.2s",
                },
              },
            }}
            // disabled={!isValid}
          >
            <CircleArrowRight size={32} stroke="#000" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default IntroductionFormPage;
