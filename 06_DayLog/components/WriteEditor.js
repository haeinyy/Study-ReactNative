import React, {useRef} from "react";
import { View, TextInput, StyleSheet } from "react-native";

function WriteEditor({title, content, onChangeTitle, onChangeContent}) {
    const bodyRef = useRef();
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.titleInput}
                placeholder="제목을 입력하세요."
                value={title}
                onChangeText={onChangeTitle}
                returnKeyType="next"
                onSubmitEditing={() => {
                    bodyRef.current.focus();
                }}
            />
            <TextInput
                style={styles.bodyInput}
                placeholder="당신의 오늘을 기록해보세요."
                value={body}
                multiline
                onChangeText={onChangeBody}
                textAlignVertical="top"
                ref={bodyRef}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        padding: 16,
        flex: 1,
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginBottom: 16,
        color: "#263238",
        fontWeight: "bold",
    },
    bodyInput: {
        paddingVertical: 0,
        fontSize: 16,
        flex: 1,
        color: "#263238",
    },
});

export default WriteEditor;