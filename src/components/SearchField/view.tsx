import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";

import { Colors } from "constants/colors";

interface Props {
  value: string;
  onChange: (value: string) => void;
  isFocused?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;
}

const SearchFieldView = ({
  onChange,
  onFocus,
  onBlur,
  value,
  isFocused,
  onClear,
}: Props) => {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        isFocused && styles.containerFocused,
      ])}
    >
      <TextInput
        placeholder="Search images..."
        value={value}
        onChangeText={onChange}
        selectionColor={Colors.gray80}
        autoCorrect={false}
        autoComplete="off"
        style={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={Colors.gray50}
      />
      {onClear && (
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={onClear} style={styles.closeButton} />
        </View>
      )}
    </View>
  );
};

export default SearchFieldView;
