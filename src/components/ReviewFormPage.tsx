// import React from 'react'

import { useContext } from "react";
import { FormContext } from "../hooks/context/FormContext.create";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowLeftCircle,
  CheckCircle,
  CircleCheck,
  MapPinCheckInside,
  UserCircleIcon,
} from "lucide-react";

const ReviewFormPage = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Must be wrapped with FormProvider");
  }

  const { formState, finalSubmission, handleStepBack, displayTick } = context;
  console.log("final stage", formState);

  const handleChecked = () => {
    displayTick();
  };
  return (
    <Box>
      <Stack
        spacing={1}
        sx={{ bgcolor: "#ffffff54", padding: 4, borderRadius: 3 }}
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
              bgcolor: "#ff66003b",
              fontWeight: 600,
              color: "#ff5e00ff",
            }}
          >
            {formState?.current_step + 1}
          </Avatar>
          <Typography
            sx={{ textTransform: "uppercase", fontWeight: 600, fontSize: 18 }}
          >
            Review your application
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: { xs: "center", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Typography
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                textTransform: "uppercase",
                fontSize: { xs: 16, md: 20 },
                fontWeight: 600,
                // bgcolor: "#93f7a167",
                color: "#087917ff",
                borderRadius: 5,
                width: { xs: "100%", md: 350 },
              }}
            >
              <span style={{ display: "flex" }}>
                <UserCircleIcon
                  size={28}
                  stroke="#ffffffff"
                  strokeWidth={1}
                  fill="#995014ff"
                />
              </span>
              User introduction
              <span style={{ display: "flex" }}>
                <CircleCheck
                  size={25}
                  stroke="#ffffffff"
                  strokeWidth={2}
                  fill="#249914ff"
                />
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: { xs: 2, md: 5 },
              boxShadow: "0 2px 16px #424242b7",
              bgcolor: "#e7e7e7ff",
              width: { xs: "100%", md: "60%" },
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
              }}
            >
              <InputLabel>Fullname :</InputLabel>
              <Typography>
                {formState?.formData?.introData?.first_name}{" "}
                {formState?.formData?.introData?.last_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Email-id :</InputLabel>
              <Typography sx={{ wordBreak: "break-all" }}>
                {formState?.formData?.introData?.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Phone no :</InputLabel>
              <Typography>
                {formState?.formData?.introData?.phone_number}
              </Typography>
            </Box>
            {formState?.formData?.introData?.alternative_number && (
              <Box sx={{ display: "flex", gap: 3 }}>
                <InputLabel>Alternate no :</InputLabel>
                <Typography>
                  {formState?.formData?.introData?.alternative_number}
                </Typography>
              </Box>
            )}
            {formState?.formData?.introData?.d_o_b && (
              <Box sx={{ display: "flex", gap: 1 }}>
                <InputLabel>Date of Birth :</InputLabel>
                <Typography>{formState?.formData?.introData?.d_o_b}</Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", gap: 7 }}>
              <InputLabel>Age :</InputLabel>
              <Typography>{formState?.formData?.introData?.age}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Gender :</InputLabel>
              <Typography>
                {formState?.formData?.introData?.gender?.toUpperCase()}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Father :</InputLabel>
              <Typography>
                {formState?.formData?.introData?.father_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Mother :</InputLabel>
              <Typography>
                {formState?.formData?.introData?.mother_name}
              </Typography>
            </Box>

            {formState?.formData?.introData?.github_profile && (
              <Box sx={{ display: "flex", gap: 3 }}>
                <InputLabel>Github :</InputLabel>
                <Typography sx={{ wordBreak: "break-all" }}>
                  {formState?.formData?.introData?.github_profile}
                </Typography>
              </Box>
            )}
            {formState?.formData?.introData?.linkedIn_profile && (
              <Box sx={{ display: "flex", gap: 3 }}>
                <InputLabel>LinkedIn :</InputLabel>
                <Typography sx={{ wordBreak: "break-all" }}>
                  {formState?.formData?.introData?.linkedIn_profile}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: { xs: "center", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <Typography
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                textTransform: "uppercase",
                fontSize: { xs: 16, md: 20 },
                fontWeight: 600,
                // bgcolor: "#ff040423",
                color: "#ca5203ff",
                borderRadius: 5,
                width: { xs: "100%", md: 350 },
              }}
            >
              <span style={{ display: "flex" }}>
                <MapPinCheckInside
                  size={28}
                  stroke="#ffffffff"
                  strokeWidth={2}
                  fill="#ff0443ff"
                />
              </span>
              address information
              <span style={{ display: "flex" }}>
                <CircleCheck
                  size={25}
                  stroke="#ffffffff"
                  strokeWidth={2}
                  fill="#249914ff"
                />
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: { xs: 2, md: 5 },
              boxShadow: "0 2px 16px #424242b7",
              bgcolor: "#e7e7e7ff",
              width: { xs: "100%", md: "60%" },
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 4 }}>
              <InputLabel>Address :</InputLabel>
              <Typography sx={{ wordBreak: "break-word" }}>
                {formState?.formData?.addressData?.address_line_1}
              </Typography>
            </Box>
            {formState?.formData?.addressData?.address_line_2 && (
              <Box sx={{ display: "flex", gap: 4 }}>
                <InputLabel>Line 2 :</InputLabel>
                <Typography sx={{ wordBreak: "break-word" }}>
                  {formState?.formData?.addressData?.address_line_2}
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", gap: 3 }}>
              <InputLabel>Landmark :</InputLabel>
              <Typography>
                {formState?.formData?.addressData?.landmark}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 5 }}>
              <InputLabel>Country :</InputLabel>
              <Typography>
                {formState?.formData?.addressData?.country}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 8 }}>
              <InputLabel>City :</InputLabel>
              <Typography>{formState?.formData?.addressData?.city}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 6 }}>
              <InputLabel>State :</InputLabel>
              <Typography>{formState?.formData?.addressData?.state}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 8 }}>
              <InputLabel>Zip :</InputLabel>
              <Typography>
                {formState?.formData?.addressData?.zip_code}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formState?.isToggle}
                onChange={handleChecked}
                sx={{
                  color: "#000000ff",
                  "&.Mui-checked": {
                    color: "#058b54",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 16 },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: { xs: 10, md: 12 },
                  fontWeight: 600,
                  textAlign: { xs: "center" },
                  letterSpacing: { xs: 0 },
                  width: { xs: "110px", md: "auto", lg: "100%" },
                }}
              >
                I agree, to the{" "}
                <span style={{ fontSize: 12, textDecoration: "underline" }}>
                  Terms & Conditions
                </span>
              </Typography>
            }
            sx={{
              px: 6,
              // py: 2,
              borderRadius: 4,
              border: formState?.isToggle ? "1px solid #058b54" : "",
              bgcolor: formState?.isToggle ? "#9bf1a231" : "#b4aeae38",
              boxShadow: formState?.isToggle
                ? "0 4px 12px rgba(5, 139, 84, 0.2)"
                : "0 2px 4px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                // bgcolor: isChecked ? "#e8f5e9" : "#fbfbfb",
                boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
              },
              color: formState?.isToggle ? "#058b54" : "#424242",
            }}
          />
        </Box>
      </Stack>
      {/* {buttons} */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          position: { xs: "fixed", md: "relative" },
          bottom: { xs: 0, md: "auto" },
          left: 0,
          width: { xs: "80%", md: "auto" },
          // Transparent Footer
          bgcolor: "transparent",
          backdropFilter: "none",
          borderTop: "none",
          zIndex: 1000,
          p: { xs: 2, md: 2 },
          px: { xs: 3, md: 0 },
          boxShadow: "none",
          justifyContent: { xs: "space-between", md: "flex-start" },
          pointerEvents: "none",
        }}
      >
        <Button
          onClick={handleStepBack}
          sx={{
            // height: 50,
            // width: 50,
            // minWidth: 50,
            // borderRadius: "50%",
            bgcolor: { xs: "transparent", md: "transparent" },

            pointerEvents: "auto",
            "&:hover": {
              bgcolor: { xs: "transparent", md: "transparent" },
              "& svg": {
                // stroke: "#ffd001ce",
                transform: "translateX(-3px)",
                transition: "0.2s",
              },
            },
          }}
        >
          <ArrowLeftCircle size={32} stroke="#000" />
        </Button>
        <Button
          onClick={finalSubmission}
          variant="contained"
          // fullWidth // Removing fullWidth to allow flex shrink/grow control if needed, but keeping it for now in sx
          sx={{
            bgcolor: "#058b54ff",
            ":hover": { bgcolor: "#08a061ff" },
            flexGrow: { xs: 1, md: 0 }, // Grow on mobile
            width: { md: "100%", lg: "100%" },
            height: 45,
            borderRadius: 8,
            boxShadow: { xs: "0 4px 12px rgba(5, 139, 84, 0.3)", md: "none" },
            pointerEvents: "auto",
          }}
          disabled={!formState?.isToggle}
        >
          <Typography
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "space-between",
              alignItems: "center",
              textTransform: "uppercase",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Submit Application
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle size={20} stroke="#3cff00ff" />
            </span>
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewFormPage;
