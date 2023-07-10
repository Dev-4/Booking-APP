import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "Room Service",
    },
    {
      id: "2",
      name: "Free WIFI",
    },
    {
      id: "3",
      name: "Family Room",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "Swimming Pool",
    },
    {
      id: "6",
      name: "Resturant",
    },
    {
      id: "7",
      name: "Fitness Center",
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>
        Most Popular Facilities
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
         
        }}
      >
        {services.map((item, index) => (
          <View
            style={{
              margin: 10,
              backgroundColor: "#007FFF",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 25,
            }}
            key={index}
          >
            <Text style={{textAlign:"center",color:"white"}}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({});
