import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { useBlog } from '../context';

const EditScreen = ({ navigation }) => {
  const post = navigation.getParam('post');
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const { updatePost } = useBlog();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>New Post</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Update"
        onPress={() => {
          updatePost(post.id, title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
});

EditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditScreen;
