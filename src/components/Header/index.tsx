import { HeaderContainer, InputBox, Input, Logo, ButtonsBox } from "./style";
import React, { useState } from "react";
import { BsShop, BsListUl } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MinimalistIconifiedButton } from "..";

const Header: React.FC = ({ children }) => {
    const [inputVale, setInputValue] = useState("");

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
                        value={inputVale}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                console.log(inputVale);
                            }
                        }}
                    />
                    <div
                        onClick={() => {
                            console.log(inputVale);
                        }}
                    >
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
