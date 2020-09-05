import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

import warn from "../../../assets/warn.png";

interface IModal {
  isVisible: boolean;
  closeModal: () => void;
}

const styles = StyleSheet.create({
  modalView: {
    width: 250,
    height: 200,
    backgroundColor: "#355C7D",
    borderRadius: 6,
    elevation: 12,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "UbuntuRegular",
    fontSize: 18,
    paddingVertical: 23,
    paddingHorizontal: 26,

    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF7582",
    width: "60%",
    paddingVertical: 2,
    borderRadius: 6,
  },
  ok: {
    color: "#fff",
    fontFamily: "UbuntuRegular",
    fontSize: 20,

    textAlign: "center",
  },
});

const WarnModal = ({ isVisible, closeModal }: IModal) => {
  return (
    <View>
      <Modal
        style={{ alignSelf: "center" }}
        isVisible={isVisible}
        backdropOpacity={0.3}
        animationIn="fadeInDown"
        animationOut="bounceOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
      >
        <View style={styles.modalView}>
          <Image source={warn} />
          <Text style={styles.text}>
            Hey! First, choose the weight and the height!
          </Text>
          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.ok}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default WarnModal;
