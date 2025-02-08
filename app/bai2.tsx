import React, { useState, useCallback } from 'react';
import {
  ScrollView,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function bt2() {
  const [refreshing, setRefreshing] = useState(false);
  const [barStyle, setBarStyle] = useState<'light-content' | 'dark-content'>('light-content');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setBarStyle(prev => (prev === 'light-content' ? 'dark-content' : 'light-content'));
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={barStyle === 'light-content' ? '#00BFFF' : '#FF69B4'}
        translucent={true}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.text}>
          Kéo xuống để thay đổi màu StatusBar
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 18
  },
});