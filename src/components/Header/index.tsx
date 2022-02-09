import { HeaderContainer, InputBox, Input, Logo, ButtonsBox } from "./style";
import React from "react";
import { BsShop, BsListUl } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MinimalistIconifiedButton } from "..";

const Header: React.FC = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                <Logo>
                    <p>MyCommerce</p>
                    <BsShop />
                </Logo>
                <InputBox>
                    <Input
                        placeholder="Search for my next item"
                        data-testid="input"
                    />
                    <div>
                        <BiSearch />
                    </div>
                </InputBox>
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
