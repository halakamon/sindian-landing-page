import { StyleSheet, TextInput } from "react-native";

type FieldProps = {
  onChangeText: (text: string) => void;
    placeholder: string;
 secureTextEntry? : boolean;
};

function Field({ onChangeText ,placeholder ,secureTextEntry}: FieldProps) {
  return (
    <TextInput
      style={styles.fieldContainer}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: 200,
    paddingHorizontal: 10,
  },
});

export default Field;