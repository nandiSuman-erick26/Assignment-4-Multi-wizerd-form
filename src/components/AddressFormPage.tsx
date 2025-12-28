// import React from 'react'
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { AddressData } from "../typescript/interface/multipartFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../hooks/context/FormContext.create";
import {
  ArrowLeftCircle,
  CircleArrowRight,
  House,
  Map,
  MapPinHouse,
} from "lucide-react";
import { toast } from "sonner";

const addressSchema = yup.object({
  address_line_1: yup.string().required("This feild can not be empty!"),
  // address_line_2: yup.string(),
  country: yup.string().required("This feild can not be empty!"),
  city: yup.string().required("This feild can not be empty!"),
  state: yup.string().required("This feild can not be empty!"),
  landmark: yup.string().required("This feild can not be empty!"),
  zip_code: yup
    .string()
    .required("This feild can not be empty!")
    .min(6, "Pin code must be 6 digits"),
});
const AddressFormPage = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }
  const { formState, secondStepSubmission, handleStepBack } = context;
  console.log(
    "secondStepSubmission data checking from the provider",
    formState
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddressData>({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      address_line_1: formState?.formData?.addressData?.address_line_1 || "",
      address_line_2: formState?.formData?.addressData?.address_line_2 || "",
      country: formState?.formData?.addressData?.country || "",
      city: formState?.formData?.addressData?.city || "",
      state: formState?.formData?.addressData?.state || "",
      landmark: formState?.formData?.addressData?.landmark || "",
      zip_code: formState?.formData?.addressData?.zip_code || "",
    },
  });

  const onsubmit: SubmitHandler<AddressData> = (data: AddressData) => {
    console.log("data-From-address-part", data);
    secondStepSubmission(data);
    if (formState?.error) {
      toast.error(formState?.error || "Something went wrong!");
      reset();
    }
  };
  return (
    <Box
      sx={{
        bgcolor: "#ffffff54",
        width: "100%",
        display: "flex",
        padding: { xs: 0, md: 2, lg: 2 },
        flexDirection: "column",
        gap: { xs: 1, md: 2, lg: 3 },
        borderRadius: 3,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {heading} */}
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
            bgcolor: "#d155f0a2",
            fontWeight: 600,
            color: "#620275ff",
          }}
        >
          {formState?.current_step + 1}
        </Avatar>
        <Typography
          sx={{ textTransform: "uppercase", fontWeight: 600, fontSize: 18 }}
        >
          address information
        </Typography>
      </Box>
      {/* {Form} */}
      <Box sx={{ width: "100%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onsubmit)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: 5,
          }}
        >
          {/* {house location} */}
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
                <House size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                house location details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <TextField
              label="Street/Area/House Name/Flat Number *"
              fullWidth
              size="small"
              {...register("address_line_1")}
              error={!!errors?.address_line_1}
              helperText={errors?.address_line_1?.message}
            />
            <TextField
              label="Street/Area/House Name/Flat Number"
              fullWidth
              size="small"
              // {...register("address_line_2")}
              // error={!!errors?.address_line_2}
              // helperText={errors?.address_line_2?.message}
            />
            <TextField
              label="Nearest Landmark *"
              fullWidth
              size="small"
              {...register("landmark")}
              error={!!errors?.landmark}
              helperText={errors?.landmark?.message}
            />
          </Box>
          {/* {state & pincode} */}
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
                <MapPinHouse size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                state and pincode details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <TextField
              label="Your State *"
              fullWidth
              size="small"
              {...register("state")}
              error={!!errors?.state}
              helperText={errors?.state?.message}
            />
            <TextField
              label="Pincode/Zip-code *"
              fullWidth
              size="small"
              type="number"
              {...register("zip_code")}
              error={!!errors?.zip_code}
              helperText={errors?.zip_code?.message}
            />
          </Box>
          {/* {city & country} */}
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
                <Map size={24} />
              </span>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {" "}
                country and city details
              </Typography>
            </Box>
            <Box sx={{ width: "100%", border: "1px solid #5353532f" }}></Box>
            <TextField
              label="Your Country *"
              fullWidth
              size="small"
              {...register("country")}
              error={!!errors?.country}
              helperText={errors?.country?.message}
            />
            <TextField
              label="Your City *"
              fullWidth
              size="small"
              {...register("city")}
              error={!!errors?.city}
              helperText={errors?.city?.message}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              // px: { xs: 1, md: 2 },
              // py: { xs: 2, md: 0 },
              position: { xs: "fixed", md: "relative" },
              bottom: { xs: 0, md: "auto" },
              left: 0,
              zIndex: 1000,
              pointerEvents: "none",
              bgcolor: "transparent", // Removed background
              backdropFilter: "none",
              borderTop: "none",
              boxShadow: "none",
            }}
          >
            <Button
              onClick={handleStepBack}
              sx={{
                // height: 50,
                // width: 50,
                // minWidth: 50,
                // borderRadius: "50%",
                bgcolor: { xs: "transparent", md: "transparent" }, // Button itself has background
                // boxShadow: { xs: "0 4px 10px rgba(0,0,0,0.15)", md: "none" },
                pointerEvents: "auto",
                "&:hover": {
                  bgcolor: { xs: "#f5f5f5", md: "transparent" },
                  "& svg": {
                    transform: "translateX(-3px)",
                    transition: "0.2s",
                  },
                },
              }}
            >
              <ArrowLeftCircle size={32} stroke="#000" />
            </Button>
            <Button
              type="submit"
              sx={{
                // height: 50,
                // width: 50,

                // borderRadius: "50%",
                bgcolor: { xs: "transparent", md: "transparent" },
                // boxShadow: { xs: "0 4px 10px rgba(0,0,0,0.15)", md: "none" },
                pointerEvents: "auto",
                "&:hover": {
                  bgcolor: { xs: "transparent", md: "transparent" },
                  "& svg": {
                    stroke: "#0eb461ff",
                    transform: "translateX(3px)",
                    transition: "0.2s",
                  },
                },
              }}
              // disabled={!isValid}
            >
              <CircleArrowRight size={32} stroke="#004872ff" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressFormPage;
