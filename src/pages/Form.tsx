// import React from 'react'

import { useContext } from "react";
import IntroductionFormPage from "../components/IntroductionFormPage";
import { FormContext } from "../hooks/context/FormContext.create";
import AddressFormPage from "../components/AddressFormPage";
import ReviewFormPage from "../components/ReviewFormPage";
import { Box, Typography } from "@mui/material";
import { UserRoundCheck, MapPin, NotepadText, CircleCheck } from "lucide-react";

import backdrop from "../assets/images/16.jpg";
import Mainbackdrop from "../assets/images/000.jpg";

const sidebar = [
  {
    icon: <UserRoundCheck size={28} />,
    name: "PERSONAL INFO.",

    id: 1,
  },
  {
    icon: <MapPin size={28} />,
    name: "ADDRESS",

    id: 2,
  },
  {
    icon: <NotepadText size={28} />,
    name: "REVIEW",

    id: 3,
  },
];

const Form = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Must be wrapped with FormProvider");
  }

  const { formState } = context;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          minHeight: "100vh",
          gap: { xs: 0, md: 5 }, // No gap on mobile, padding handled by margin
          backgroundImage: `url(${Mainbackdrop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#1036a823",
          backgroundBlendMode: "multiply",
          overflowX: "hidden",
        }}
      >
        {/* navbar/sidebar */}
        <Box
          sx={{
            height: { xs: "auto", md: "100vh" },
            width: { xs: "100%", md: "20%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: { xs: "fixed", md: "relative" }, // Fixed on mobile
            top: 0,
            left: 0,
            zIndex: 1200,
            bgcolor: { xs: "#f0f4f8", md: "transparent" },
            boxShadow: { xs: "0 4px 10px rgba(0,0,0,0.1)", md: "none" }, // Shadow for separation
          }}
        >
          <Box
            sx={{
              height: { xs: "auto", md: "80vh" },
              width: { xs: "100%", md: "100%" },
              boxShadow: { xs: "none", md: "0 4px 16px #b9b9b9ff" },
              // borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "row", md: "column" },
              backgroundImage: { xs:`url(${backdrop})`, md: `url(${backdrop})` }, // Remove bg image on mobile header for clean look
              bgcolor: { xs: "#0e2a753f", md: "#0e2a753f" },
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              borderRadius: { xs: 0, md: 0 },
              padding: { xs: 1, md: 0 },
              flexWrap: { xs: "nowrap", md: "nowrap" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: 1, md: 3 },
                flexDirection: "column",
                gap: { xs: 0, md: 2 },
                width: { xs: "auto", md: "auto" },
                mr: { xs: 2, md: 0 }, // Right margin for title on mobile
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 18, lg:24 }, // Smaller font on mobile
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "#0d0666ff",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                multi-step <br style={{ display: "block" }} /> form
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  textTransform: "capitalize",
                  color: "#b316a5ff",
                  textAlign: "center",
                  display: { xs: "none", md: "block" },
                }}
              >
                <li style={{ listStyle: "none" }}> complete all the steps.</li>
                <li style={{ listStyle: "none" }}>
                  feilds mark with (*) are required.
                </li>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 2 },
                width: { xs: "auto", md: "auto" },
                paddingBottom: { xs: 0, md: 0 },
              }}
            >
              {sidebar?.map((item, index) => {
                const isCompleted =
                  index === 2
                    ? formState.isToggle
                    : formState.current_step > index;
                return (
                  <Box
                    key={item?.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: { xs: 0, md: 2 },
                      // border:"1px solid",
                      width: { xs: "auto", md: "90%" },
                      gap: { xs: 0, md: 2 },
                      flexDirection: { xs: "column", md: "row" },
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "auto",
                        padding: { xs: 1.5, md: 2 },
                        borderRadius: 50,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        bgcolor: item?.id % 2 === 0 ? "#ffc400ff" : "#eeff00ff",
                        transform: { xs: "scale(0.7)", md: "scale(1)" }, // Downscale icons on mobile
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "none", md: "none", lg:"flex" },
                        width: "100%",
                        padding: 1,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 16px #5a5a5a85",
                        bgcolor: item?.id % 2 === 0 ? "#ffc400ff" : "#eeff00b4",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          textAlign: "center",
                          color: item?.id % 2 === 0 ? "#524005ff" : "#404403ff",
                        }}
                      >
                        {item?.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 24,
                        display: "flex",
                        justifyContent: "center",
                        position: { xs: "absolute", md: "static" },
                        bottom: 0,
                        right: 0,
                        bgcolor: { xs: "", md: "transparent" },
                        borderRadius: "50%",
                        border: { xs: "none", md: "none" }, // White border for tick to pop
                      }}
                    >
                      {isCompleted && (
                        <CircleCheck
                          size={18} // Smaller tick
                          stroke="#ffffff" // White check
                          strokeWidth={2}
                          fill="#249914" // Green fill
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: { xs: "100vh", md: "100vh" },
            pt: { xs: 0, md: 0 },
            mt: { xs: "100px", md: 0 }, // Push content down on mobile to clear fixed header
          }}
        >
          <Box
            sx={{
              width: "100%",
              // boxShadow: "0 4px 16px #443a3aff",
              // borderRadius: 5,
              padding: { xs: 0, md: 2 },
            }}
          >
            {formState?.current_step === 0 && <IntroductionFormPage />}
            {formState?.current_step === 1 && <AddressFormPage />}
            {formState?.current_step === 2 && <ReviewFormPage />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
