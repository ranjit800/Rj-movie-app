import React from "react";

const Dropwodn = ({title,options, func}) => {
  return (
    <div className="select mt-3">
      <select defaultValue="0" onChange={func} name="format" id="format">
        <option value="0" disabled>
            {title}
        </option>
        {options.map((o,i)=>(
            <option key={i} value={o}>
                {o.toUpperCase()}
        </option>
        ))}
      </select>
    </div>
  );
};

export default Dropwodn;
