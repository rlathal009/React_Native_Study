import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/Stack";
import TabNavigation from "./navigations/Tab";

const App = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
};

export default App;