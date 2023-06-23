import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}> About </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}> Products </SidebarLink>
                <SidebarLink to="services" onClick={toggle}> Solutions </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Pricing </SidebarLink>
                <SidebarLink to="services" onClick={toggle}> Resources </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}> Get Started</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin"> Sign In </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar