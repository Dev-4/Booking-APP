import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";
import { AntDesign, Entypo } from "@expo/vector-icons";

const RoomScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transperent",
        shadowColor: "transperent",
      },
    });
  }, []);
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable
            style={{ margin: 10, backgroundColor: "white", padding: 10 }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}
              >
                {item.name}
              </Text>
              <SimpleLineIcons name="info" size={24} color="#007FFF" />
            </View>
            <Text style={{ marginTop: 3, fontSize: 15 }}>
              pay at the property{" "}
            </Text>
            <Text style={{ marginTop: 3, fontSize: 15, color: "green" }}>
              Free Cncelation Available
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18, color: "black" }}>
                Rs{route.params.newPrice}
              </Text>
            </View>
            <Amenities />
            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontWeight: "700",
                    fontSize: 15,
                    color: "#318CE7",
                    fontWeight: "bold",
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 0,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007FFF",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable onPress={()=> navigation.navigate("User", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate,
        })}
          style={{
            backgroundColor: "#007FFF",
            padding: 8,
            marginBottom: 30,
            borderRadius: 3,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
