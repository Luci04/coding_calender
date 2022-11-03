import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ResourseList from "./Screen/ResourseList";
import SingleContest from "./Screen/SingleContest";
import * as Calendar from "expo-calendar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [CalenderId, setCalenderId] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        for (let i = 0; i < calendars.length; i++) {
          if (calendars[i].name === "avinashukla2000@gmail.com") {
            setCalenderId(calendars[i].id);
          }
        }
      }
    })();
  }, [CalenderId]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ResourseList} />
          <Stack.Screen
            options={({ route }) => ({ title: route.params.name })}
            name="Single Contest"
            initialParams={{ CalenderId }}
            component={SingleContest}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar auto />
    </>
  );
}
