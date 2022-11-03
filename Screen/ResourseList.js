import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import SingleContestInfo from "../Component/SingleContestInfo";

import { Data } from "../JSONData";

import Contest from "../Component/Contest";
import SafeScreen from "../Component/SafeScreen";

const ResourseList = ({ navigation }) => {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <FlatList
          data={Data}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.DisplayFlex}
              onPress={() =>
                navigation.navigate("Single Contest", {
                  name: `${item.title}`,
                  item,
                })
              }
            >
              <Contest item={item} />
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </SafeScreen>
  );
};

export default ResourseList;

const styles = StyleSheet.create({
  DisplayFlex: {
    flex: 1,
    elevation: 50,
  },
});
