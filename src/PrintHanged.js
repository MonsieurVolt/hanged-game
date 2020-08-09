import React from "react";

function PrintHanged({ number }) {
  return (
    <div>
      <img
        src={require(`../public/hangedimg/img_hanged_${number}.svg`)}
        alt="hanged draw"
      />
    </div>
  );
}
PrintHanged.defaultProps = {
  number: 0,
};
export default PrintHanged;
