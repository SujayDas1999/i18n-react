import { useTranslationHook } from "../hooks/useTranslationHook";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../features/languageSlice";
import { useEffect } from "react";

export const AppOwnHook = () => {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  const { translateText } = useTranslationHook(language);

  useEffect(() => {}, [language]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {translateText("news")}
          </Typography>
          <Typography>{translateText("select_language")}</Typography>
          <Select
            labelId="demo-simple-select-label"
            style={{ color: "white" }}
            id="demo-simple-select"
            value={language}
            onChange={(e) => {
              dispatch(changeLanguage(e.target.value));
            }}
          >
            <MenuItem value={"en-us"}>English</MenuItem>
            <MenuItem value={"in-hin"}>Hindi</MenuItem>
            <MenuItem value={"eu-fr"}>French</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <Typography>{translateText("hello")} Sujay.</Typography>
      <Typography>{translateText("drinks.snacks")}</Typography>
    </>
  );
};
