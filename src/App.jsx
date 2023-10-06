import './App.css'
import { useTranslation } from "react-i18next";
import image from "./assets/image.jpg"

function App() {
  const { t, i18n } = useTranslation();
  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <>
      {/* 
      <p>{t('name')}</p>
      <nav>
      </nav> */}

      {/* PromoBar */}
      <div className="promo-bar">
        <h3>{t('promoBar')}</h3>
        <button className="my-btn">{t('actionBtn')}</button>
      </div>

      <div className="intro">
        {/* headings */}
        <div className="headings">
          <h1>{t('storeName')}</h1>
          <h3>{t('slogan')}</h3>
        </div>
        {/* navBar */}
        <nav>
          <ul>
            <li>{t('Home')}</li>
            <li>{t('About')}</li>
            <li>{t('Shop')}</li>
            <li>{t('Contact')}</li>
            <select className="custom-select" onChange={changeLanguageHandler}>
              <option value="en" >🇺🇸 English</option>
              <option value="ar" >🇸🇦 Arabic</option>
            </select>
          </ul>
        </nav>
        {/* image */}
        <img height="400" src={image} alt="" srcset="" />
      </div>
    </>
  )
}

export default App
