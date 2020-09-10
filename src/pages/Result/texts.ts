interface ITexts {
  normal: {
    title: string;
    description: string;
  };
  thinness: {
    title: string;
    description: string;
  };
  overweight: {
    title: string;
    description: string;
  };
}
const Texts: ITexts = {
  normal: {
    title: "Your BMI is Normal! Stay Healthy!",
    description: "You are doing great!",
  },
  thinness: {
    title: "Your BMI indicates thinness.",
    description: "You can try healthy eating, look for a specialist!",
  },
  overweight: {
    title: "Your BMI indicates overweight.",
    description: "You can try do some more exercises! Look for a specialist!",
  },
};

export default Texts;
