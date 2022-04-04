import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillHome,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiSearch, FiLogOut } from "react-icons/fi";

const SideBar = () => {
  const [active, setActive] = useState("");
  const handleClick = () => {
    setActive((prevState) => (prevState ? "" : "sidebar__active"));
  };
  return (
    <div className="sidebar-container">
      <div className={`sidebar ${active}`}>
        <div className="logo">
          <div className="logo__div">
            <AiFillHome className="logo__img"></AiFillHome>
            <div className="logo__name">Yarik</div>
          </div>
          <button onClick={handleClick} type="button" className="sidebar__btn">
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <button
              onClick={handleClick}
              type="button"
              className="sidebar__searchBtn"
            >
              <FiSearch className="sidebar__searchIcon" />
            </button>

            <input
              className="sidebar__search"
              type="Поиск"
              placeholder="search"
            />
            <span className="sidebar__tooltip">Поиск</span>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link" to="/user">
              <AiOutlineUser className="sidebar__icon" />
              <span className="sidebar__link-name">Пользователь</span>
            </Link>
            <span className="sidebar__tooltip">Пользователь</span>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              {" "}
              <AiOutlineShopping className="sidebar__icon" />
              <span className="sidebar__link-name">Товары</span>
            </a>
            <span className="sidebar__tooltip">Товары</span>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              {" "}
              <AiOutlineShoppingCart className="sidebar__icon" />
              <span className="sidebar__link-name">Корзина</span>
            </a>
            <span className="sidebar__tooltip">Корзина</span>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              {" "}
              <AiOutlineHeart className="sidebar__icon" />
              <span className="sidebar__link-name">Избранное</span>
            </a>
            <span className="sidebar__tooltip">Избранное</span>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              <AiOutlineSetting className="sidebar__icon" />
              <span className="sidebar__link-name">Настройки</span>
            </a>
            <span className="sidebar__tooltip">Настройки</span>
          </li>
        </ul>
        <div className="profile">
          <div className="profile__content">
            <div className="profile__details">
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${(
                  Math.random() + 1
                )
                  .toString(36)
                  .substring(7)}.svg`}
                alt="profile pic"
                className="profile__img"
              />
              <div className="profile__name">Yarik</div>
            </div>
            <button className="profile__logOut" type="button">
              <FiLogOut className="profile__logOutBtn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
