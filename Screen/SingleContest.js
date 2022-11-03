import React from "react";
import moment from "moment/moment";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SingleContestInfo from "../Component/SingleContestInfo";
import { CurrentContestList } from "../JSONData";
import * as Calendar from "expo-calendar";

const SingleContest = ({ route }) => {
  const { item: Data, CalenderId } = route.params;

  const AddEvent = (obj) => {
    Calendar.createEventAsync(CalenderId, {
      calendarId: CalenderId,
      title: obj.title,
      startDate: moment.utc(obj.start),
      endDate: moment.utc(obj.end),
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {CurrentContestList.map((ele) => {
          if (ele.resource_id === Data.id) {
            return (
              <TouchableOpacity
                key={ele.id}
                activeOpacity={0.8}
                onPress={(ele) => AddEvent(ele)}
              >
                <SingleContestInfo icon={Data.icon} data={ele} />
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default SingleContest;
