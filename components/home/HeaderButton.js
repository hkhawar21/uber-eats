import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { SET_CURRENT_TAB } from "../../store/type";

const HeaderButton = ({ text, activeTab }) => {
  const dispatch = useDispatch();
  const selectedStyles = {
    headerBtn: {
      backgroundColor: activeTab === text ? "black" : "white",
    },
    headerBtnText: {
      color: activeTab === text ? "white" : "black",
    },
  };
  return (
    <TouchableOpacity
      style={{
        ...selectedStyles.headerBtn,
        paddingVertical: 6,
        paddingHorizontal: 16,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        dispatch({
          type: SET_CURRENT_TAB,
          payload: {
            newTab: text,
          },
        });
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "900",
          ...selectedStyles.headerBtnText,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
