import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Calendar from "expo-calendar";
import moment from "moment/moment";
import React from "react";

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day " : " days ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";

  if (d > 0 && h > 0) {
    dDisplay = dDisplay + ", ";
  }

  if (h > 0 && m > 0) {
    hDisplay += ", ";
  }

  return dDisplay + hDisplay + mDisplay;
}

const SingleContestInfo = ({ data, icon }) => {
  const eventConfig = {
    title: data.event,
    startDate: "2017-09-25T08:00:00.000Z",
    notes: "Default Event Description",
  };

  function addEventToCalendar() {
    console.log(eventConfig);

    AddCalendarEvent.presentEventViewingDialog(eventConfig)
      .then((eventInfo) => {
        alert(JSON.stringify(eventInfo));
      })
      .catch((error) => {
        alert("Error ", () => {
          console.log(error);
        });
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 50, height: 50, resizeMode: "cover", margin: 20 }}
          source={{ uri: `${icon}` }}
        />
      </View>
      <View style={styles.textContainer}>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text style={styles.contestName}>{data.event}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.Date}>
            Start : {moment(data.start).format("llll")}
          </Text>
          <Text style={styles.Date}>
            End : {moment(data.end).format("llll")}
          </Text>
          <Text style={styles.Date}>
            Duration : {secondsToDhms(data.duration)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SingleContestInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  imageContainer: {
    width: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    height: "100%",
  },
  contestName: {
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  dateContainer: {
    height: 200,
    width: "100%",
  },
  Date: {
    width: "100%",
    textAlign: "left",
  },
});
