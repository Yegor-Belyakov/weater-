import React from "react";
import Select from 'react-select'
import GlobalSvgSelector from "../../assets/images/icons/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";

import s from "./Header.module.scss";

const Header = () => {
  const theme = useTheme()
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];
 


  const colourStyles = {
    control: (styles) => ({
      ...styles, 
      backgroundColor: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100'
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === 'dark'  ? '#fff' : '#000'
    })
  }
  
  function  changeTheme  () {
   
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')

    

  }


  
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          {" "}
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          {" "}
          <GlobalSvgSelector id="change-theme" />
          
        </div>
        <Select defaultValue={options[0]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
};

export default Header;
