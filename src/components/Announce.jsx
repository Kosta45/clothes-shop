import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex item-center justify-center"
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden");
  };

  return (
    <div className={announceStyle}>
      <h2>Hurry up it`s 40% off now</h2>
      <CloseIcon onClick={handleClose} className="cursor-pointer" />
    </div>
  );
};

export default Announce;
