import React from 'react';
import { Platform, StyleSheet, Text, View, Pressable } from 'react-native';

function truncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100) + '...';
}

function FeedListItem({ log }) {
  const { title, body, date } = log;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: '#ededed' }}
    >
      <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#263238',
  },
  body: {
    fontSize: 14,
    color: '#37474f',
    lineHeight: 21,
  },
});

export default FeedListItem;
