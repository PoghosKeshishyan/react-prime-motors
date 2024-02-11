import { useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { SelectLanguage } from './SelectLanguage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function Header({ navbar }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [subNavbarVisibility, setSubNavbarVisibility] = useState({});
  const navigate = useNavigate();

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
    setSubNavbarVisibility(0);
  };

  const handleSubNavbarToggle = (itemId) => {
    setSubNavbarVisibility((prevVisibility) => ({
      ...prevVisibility,
      [itemId]: !prevVisibility[itemId],
    }));
  };

  return (
    <header
      className='flex bg-white justify-between py-2 xl:px-24 md:px-[2rem] px-[2rem] sm:px-[2rem] shadow-xl border-b border-red-600 items-center fixed t-0 w-full z-50'
      onMouseLeave={() => window.innerWidth > 1023 && setSubNavbarVisibility(0)}
    >

      <div className='w-24 cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-full' src='images/logo.jpg' alt='logo' />
      </div>

      <div className='flex items-center justify-center'>

        {/* ========================== close navbar btn ========================== */}
        {showNavbar && (
          <div onClick={handleNavbarToggle} className="lg:hidden block absolute z-[100] text-white right-5 top-6">
            <FontAwesomeIcon
              className='text-white text-[1.2rem] cursor-pointer hover:text-red-500'
              icon={faCircleXmark}
            />
          </div>
        )}

        <nav
          className={
            `lg:flex items-center gap-[1rem] lg:bg-white bg-black text-white lg:text-black md:z-50 lg:static absolute top-0 right-0 lg:w-[100%] w-[270px] lg:h-[100%] h-[100vh] lg:p-0 px-[20px] pt-[50px] pb-[0] ${showNavbar ? `block ` : `hidden`}`
          }>
          {
            navbar.map((item, index) => (
              <div
                key={item.id}
              >
                {/* ========================== navbar links ========================== */}
                <Link
                  to={item.route} key={item.id}
                  className={`lg:inline-block lg:static text-[1.1rem] font-bold border-b-2 border-white md:relative block py-[10px] lg:py-[2px] hover:text-red-600`}
                  onMouseEnter={() => window.innerWidth > 1023 && handleSubNavbarToggle(item.id)}
                  onClick={handleNavbarToggle}
                >
                  {item.title}
                </Link>

                {/* =============== sub navbar btn - arrow up & arrow down =============== */}
                {
                  item.sub_navbar.length > 0 && <FontAwesomeIcon
                    className='lg:hidden block absolute right-[20px] top-[63px] cursor-pointer hover:text-red-600 text-[1rem]'
                    onClick={() => handleSubNavbarToggle(item.id)}
                    icon={subNavbarVisibility[item.id] ? faChevronUp : faChevronDown}
                  />
                }

                {/* ========================== sub navbar ========================== */}
                {
                  item.sub_navbar.length > 0 && subNavbarVisibility[item.id] && <div
                    key={index}
                    className={
                      'lg:bg-white bg-black lg:absolute top-[100%] left-0 right-0 text-end lg:px-[80px] py-[10px] lg:text-slate-600 text-white shadow-xl -z-[10] border-t border-red-600'
                    }>
                    {
                      item.sub_navbar.map(el => (
                        <Link
                          to={el.route} key={el.id}
                          onClick={() => window.innerWidth < 1023 && setShowNavbar(false)}
                          className={`hover:text-red-600 text-[1rem] lg:mx-[15px] mx-0 py-[15px] lg:inline-block block text-left lg:border-none md: border-b-2 border-white md:py-[15px] lg:py-0 first:pt-0 ml-[20px]`}
                        >
                          {el.sub_title}
                        </Link>
                      ))
                    }
                  </div>
                }
              </div>
            ))
          }
        </nav>

        <SelectLanguage />

        {/* ========================== menubar btn ========================== */}
        <div className="lg:hidden block w-[25px] text-center ml-[15px]">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowNavbar(true)}
            className='text-[20px] pt-[3px] text-red-500 cursor-pointer hover:text-black'
          />
        </div>
      </div>
    </header>
  )
}

