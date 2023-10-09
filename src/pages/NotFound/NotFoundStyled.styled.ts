import {styled} from 'styled-components';

export const NotFoundStyling = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
gap: 88px;
padding-top: 174px;




.not-found-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 74px;
    // width: 100%;
    margin: 0 auto;
}

.not-found-header-heading {
color: #292F3F;
font-family: Inter;
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;


@media (max-width: 808px) {
    width: 366px;
    color: #292F3F;
font-family: Inter;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
}
}

.not-found-header-text {
color: #292F3F;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;


@media (max-width: 808px) {
    width: 366px;
    color: #292F3F;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
}
}

.not-found-main {
    display: flex;
    justify-content: space-around;
    // width: 100%;
    margin: 0 auto;
    gap: 350px;

    @media (max-width: 808px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
}

.not-found-main-button {
    width: 222px;
    height: 52px;
    border-radius: 8px;
    background: #292F3F;
    color: #fff;
    cursor: pointer;

    @media (max-width: 808px) {
        margin-left: 15px;
    }
}





`