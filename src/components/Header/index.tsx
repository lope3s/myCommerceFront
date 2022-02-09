import { HeaderContainer, Input, Logo, ButtonsBox } from "./style";
import React from "react";
import { BsShop, BsListUl } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { MinimalistIconifiedButton } from "..";

const Header: React.FC = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                <Logo>
                    <p>MyCommerce</p>
                    <BsShop />
                </Logo>
                <Input placeholder="Search for my next item" />
                <ButtonsBox>
                    <MinimalistIconifiedButton text="Categories">
                        <BsListUl />
                    </MinimalistIconifiedButton>
                    <MinimalistIconifiedButton text="Login">
                        <MdLogin />
                    </MinimalistIconifiedButton>
                </ButtonsBox>
            </HeaderContainer>
            {children}
        </>
    );
};

export default Header;
