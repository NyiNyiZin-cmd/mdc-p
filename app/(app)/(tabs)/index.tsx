import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import Card from "@/components/shop/Card";
import { API_URL } from "@/config";
import { useEffect, useState } from "react";

type UserProps = {
  id: number;
  name: string;
  image: string;
};

export default function HomeScreen() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/users`);
      const userList = await response.json();
      // console.log("Users :", userList);

      setUsers(userList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={users}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          // pagingEnabled
          contentContainerStyle={styles.container}
          // horizontal
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
    gap: 7,
  },
  row: {
    justifyContent: "space-between",
  },
});
