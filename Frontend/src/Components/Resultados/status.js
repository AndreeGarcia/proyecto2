import React, { useState } from "react";
import { MdCircle } from "react-icons/md";

const ReservaStatus = () => {
  const [status, setStatus] = useState(false);
  const state = !setStatus;
  return (
    <div>
      <label>
        <input type="radio" onClick={() => setStatus({ state })} />
        <MdCircle color={status ? "#01BF71" : "#C82222"} size={15} />
      </label>
    </div>
  );
};

export default ReservaStatus;
