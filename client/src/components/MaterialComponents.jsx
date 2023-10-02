import { styled } from "@mui/material/styles";
import { Drawer, TextField, Snackbar } from "@mui/material";

// <---------------------- CHAT ------------------------------>

// CHAT DRAWER
export const ChatDrawer = styled(Drawer)({
  root: {
    width: "300px",
    "@media (max-width: 768px)": {
      width: "240px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  paper: {
    width: "300px",
    "@media (max-width: 768px)": {
      width: "240px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});

// MESSAGE INPUT FIELD
export const MessageInput = styled(TextField)({
  root: {
    width: "100%",
    paddingBottom: "1rem",
    "& label.Mui-focused": {
      color: "#64379f",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#64379f",
    },
  },
});

// USER NAME INPUT FIELD
export const UserNameInput = styled(TextField)({
  root: {
    width: "95%",
    paddingBottom: "1rem",
    "& label.Mui-focused": {
      color: "#64379f",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#64379f",
    },
  },
});

// NOTIFICATION
export const Notification = styled(Snackbar)({
  root: {
    "& .MuiSnackbarContent-root": {
      backgroundColor: "#fff",
      paddingTop: "0",
      paddingBottom: "0",
      borderLeft: "5px solid #64379f",
      borderRight: "5px solid #64379f",
    },
    "& .MuiSnackbarContent-message": {
      color: "#64379f",
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "800",
    },
  },
});
