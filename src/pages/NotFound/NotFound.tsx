import React from 'react';
import { useNavigate } from 'react-router-dom';
import {NotFoundStyling} from './NotFoundStyled.styled.ts';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

  const handleGoToHomepage = () => {
    navigate('/');
  };
    return (
        <>
        <NotFoundStyling>
        <div className="not-found-header">
        <h5 className="not-found-header-heading">
        Sorry, we looked but couldn’t find that page
        </h5>
        <p className="not-found-header-text">
        It may have been moved, deleted, or is temporarily unavailable.<br/> click on the button below to return to the homepage
        </p>
        </div>
        <div className="not-found-main">
            <button className="not-found-main-button" onClick={handleGoToHomepage}>Go To Homepage</button>
            <img src="./icons/404.svg" />         
        </div>
        </NotFoundStyling>
        </>
    )
}

export default NotFound;