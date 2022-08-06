import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactIconImage from '../assets/icons8-mail-50.png';
import BackIconImage from '../assets/icons8-left-arrow-50.png';
import { CONTACT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from '../utils/routeNames';
import styles from './Header.module.css';

export default function Header(props) {
  const { pathname } = useLocation();
  const isMainPage = pathname === HOME_ROUTE;
  const isFormPage = pathname === CONTACT_ROUTE;
  const isProjectsPage = pathname === PROJECTS_ROUTE;

  return (
    <header className='d-flex justify-content-between'>
      <div>
        <h1>
          {props.name}
        </h1>
        <p>
          {props.position}
        </p>
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        {isMainPage && (
          <Link to={CONTACT_ROUTE}>
            <img
              src={ContactIconImage}
              alt='Kontakt'
            />
          </Link>
        )}
        {(isFormPage || isProjectsPage) && (
          <Link to={HOME_ROUTE}>
            <img
              src={BackIconImage}
              alt='Powrót'
              className={styles.iconInHeader}
            />
          </Link>
        )}
      </div>
    </header>
  );
}
