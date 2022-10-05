import { Button } from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState(["item 1", "item 2"]);
  const inputRef = useRef("");

  const deleteItem = (index) => {
    return setData(
      data.filter((index) => {
        return item.index !== index;
      })
    );
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
          <Button
            variant="outlined"
            title="Add"
            onPress={() => setData([...data, value])}
          />
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.viewList}>
            {data.map((item, index) => {
              return (
                <View style={styles.listItem}>
                  <Text style={styles.textItem} key={index}>
                    {item}
                  </Text>
                  <Text style={styles.iconItem} onPress={deleteItem}>
                    X
                  </Text>
                </View>
              );
            })}
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
    width: "90%",
    height: "90%",
  },
  contentTop: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
  },
  contentBottom: {
    display: "flex",
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
  // scrollView
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  viewList: {
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "60%",
  },

  // listItem
  listItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
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
