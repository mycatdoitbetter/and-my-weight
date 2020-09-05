import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { MainParamList } from "../../routes/MainParamList";

interface IValue {
  _weight: number;
  _height: number;
}

const Result = ({ route }: { route: RouteProp<MainParamList, "Result"> }) => {
  const [values, setValues] = useState<IValue>({ _weight: 0, _height: 0 });

  useEffect(() => {
    const { _height, _weight } = route.params;
    setValues({ _weight, _height });
  }, [route]);

  return (
    <View>
      <Text>{values._height}</Text>
    </View>
  );
};

export default Result;
