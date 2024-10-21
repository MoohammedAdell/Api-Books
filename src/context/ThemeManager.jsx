/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, createContext, useContext } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // أيقونة القمر
import Brightness7Icon from "@mui/icons-material/Brightness7"; // أيقونة الشمس

// إنشاء Context لإدارة حالة الدارك واللايت مود
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeManager = ({ children }) => {
  // حالة للتحكم في الوضع المظلم أو الفاتح
  const [darkMode, setDarkMode] = useState(false);

  // تغيير السمة بناءً على الوضع الحالي
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // التعامل مع التبديل بين الوضعين
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* شريط الأدوات مع زر الأيقونة لتغيير الوضع */}
        <AppBar position="static">
          <Toolbar style={{ justifyContent: "flex-end" }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* باقي التطبيق يتم تمريره كـ children */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeManager;
