import React from "react";
import useSound from "use-sound";

import oofSfx from "../../assets/audio/mc_oof.mp3";
import { h1Text, h2Text } from "../../assets/text/heroText";

const HeroHeader = () => {
  const [play] = useSound(oofSfx);
  return (
    <>
      <h1 onClick={play} className="text-dark">
        {h1Text}
      </h1>
      <h2 className="text-dark">{h2Text}</h2>
    </>
  );
};

export default HeroHeader;
