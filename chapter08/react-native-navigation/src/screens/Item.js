import { TabRouter } from "@react-navigation/routers";
import React from "react";
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const Item = ({ route }) => {
    return(
        <Container>
            <StyledText>Item</StyledText>
            <StyledText>Id: {route.params.id}</StyledText>
            <StyledText>Name: {route.params.name}</StyledText>
        </Container>
    );
};

export default Item;