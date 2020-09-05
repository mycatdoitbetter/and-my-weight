import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

// import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import warn from "../../../assets/warn.png";
import Button from "../Button";

interface IModal {
  isVisible: boolean;
  closeModal: () => void;
}

const styles = StyleSheet.create({
  modalView: { width: 180, height: 150, backgroundColor: "#fff" },
});

const WarnModal = ({ isVisible, closeModal }: IModal) => {
  return (
    <View>
      <Modal
        style={{ alignSelf: "center" }}
        isVisible={isVisible}
        backdropColor="transparent"
        backdropOpacity={0.8}
        animationIn="fadeInDown"
        animationOut="bounceOutDown"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
      >
        <View style={styles.modalView}>
          <Image source={warn} />
          <TouchableOpacity onPress={() => closeModal()}>
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default WarnModal;
