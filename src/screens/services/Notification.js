import * as Notifications from "expo-notifications";

export const sendPushNotification = async (token, message) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "SOS Alert",
        body: message
      },
      trigger: null
    });
  } catch (error) {
    console.error("Notification error:", error);
  }
};