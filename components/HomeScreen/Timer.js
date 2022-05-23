import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;

  const startTimer = () => {
    interval = setInterval(() => {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const timerDate = new Date("May 10,2022 ").getTime();
      const currentDate = new Date().getTime();

      const timerInterval = timerDate - currentDate;

      const days = Math.floor(timerInterval / day);
      const hours = Math.floor((timerInterval % day) / hour);
      const minutes = Math.floor((timerInterval % hour) / minute);
      const seconds = Math.floor((timerInterval % minute) / second);

      if (interval < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    // <Text>
    //   {timerHours}:{timerMinutes}:{timerSeconds}
    // </Text>
    <Text style={{ fontSize: 18, lineHeight: 30, color: "#686868" }}>
      Ends in: 04:46:39
      {/* Ends in: {days} days : {hours} hours: {minutes} minutes : {seconds}{" "}
      seconds */}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({});
