import { useLottie } from "lottie-react";


const Loading = ({animation}) => {
  const options = {
    animationData: animation.default,
    loop: true,
    autoplay: true,
  };

  const style = {
    height: 300,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Loading;
