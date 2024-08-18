import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../features/languageSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// when using this component nest the translation jsons inside a translation object

export const AppTranslationLibrary = () => {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  // use of translation library
  const { t, i18n } = useTranslation("translation", { lng: language });

  useEffect(() => {
    console.log("I am rendered");
  }, [language]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("news")}
          </Typography>
          <Typography>{t("select_language")}</Typography>
          <Select
            labelId="demo-simple-select-label"
            style={{ color: "white" }}
            id="demo-simple-select"
            value={language}
            onChange={(e) => {
              dispatch(changeLanguage(e.target.value));
            }}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"hindi"}>Hindi</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <div>
        {t("selected_language")}: {language}
      </div>

      <div>{t("hello")}</div>
    </>
  );
};
