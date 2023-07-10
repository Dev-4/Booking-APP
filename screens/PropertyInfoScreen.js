import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
   
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 6 }}>
              <Image
                style={{
                  width: 110,
                  height: pixelNormalize(90),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show more
            </Text>
          </Pressable>
        </Pressable>
        <View
          style={{
            marginHorizontal: 5,
            marginTop: 10,
            flexDirection: "row ",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              marginHorizontal: 12,
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                {route.params.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 7,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View
                  style={{
                    backgroundColor: "#003580",
                    paddingVertical: 3,
                    borderRadius: 5,
                    width: 100,
                    marginHorizontal: 48,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    Genius level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#178169",
                paddingHorizontal: 6,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", fontSize: 13 }}>
                Travel sustainable
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        ></Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults}adults
        </Text>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            marginVertical: 10,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            Rs{route.params.oldPrice * route.params.adults}
          </Text>
          <Text style={{ color: "black", fontSize: 20 }}>
            Rs {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 2,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 78,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)} %OFF
          </Text>
        </View>
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        ></Text>
        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.selectedDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        ></Text>
        <Amenities />
        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRooms,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate,
          })
        }
        style={{
          backgroundColor: "#6CB4EE",
          marginBottom: 30,
          position: "absolute",
          width: "95%",
          marginHorizontal: 10,
          padding: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Select Availability
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
