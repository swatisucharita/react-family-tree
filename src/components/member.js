import React from 'react';
import styled from 'styled-components';
import { MdPerson } from "react-icons/md";

const StyledWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledAvatar = styled.div`
  min-width: 20px;
  border: 1px solid;
  border-radius: 50%;
`

const Member = (member) => {
    const defaultAvatar = <MdPerson style={{fontSize: 50}} />;
    const { name, avatar } = member;
    return (
        <StyledWrapper>
            <StyledAvatar>{ avatar ? <img src={avatar} /> : defaultAvatar}</StyledAvatar>
            <span>{name}</span>
        </StyledWrapper>
    );
}

export default Member;