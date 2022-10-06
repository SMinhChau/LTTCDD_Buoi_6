import { Button } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const handleSubmit = () => {
    setData([...data, value]);
    setValue("");
  };

  const handleRemove = (itemIndex) => {
    const newTodos = data.filter((item, index) => {
      return index !== itemIndex;
    });
    setData(newTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>To Do List</Text>
        <View style={styles.contentTop}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="item"
            value={value}
            onChangeText={(value) => setValue(value)}
          />
          <View style={styles.contentButton}>
            <Button
              variant="outlined"
              style={styles.button}
              title="Add"
              onPress={handleSubmit}
            />
          </View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.viewList}>
            <ScrollView style={styles.scroll}>
              {data.map((item, index) => {
                return (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.textItem}>{item}</Text>
                    <Text
                      style={styles.iconItem}
                      onPress={() => handleRemove(index)}
                    >
                      X
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    backgroundColor: "#E0FFFF",
    padding: 20,
  },
  contentTop: {
    display: "flex",
    height: "20%",

    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  contentBottom: {
    display: "flex",
    height: "80%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  // title
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: "5%",
    marginBottom: 10,
    fontSize: 18,
  },
  // button
  contentButton: {
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {},
  // scrollView
  scroll: {
    width: "80%",
  },
  viewList: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  // listItem
  listItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: "5%",
    marginBottom: 10,
    backgroundColor: "pink",
  },
  textItem: {
    width: "70%",
    margin: 5,
    fontSize: 18,
    textAlign: "center",
    textItem: "center",
  },
  iconItem: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 10,
  },
});
