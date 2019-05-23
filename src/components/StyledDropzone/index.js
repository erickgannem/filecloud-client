import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { MdFileUpload } from "react-icons/md";

import "./index.css";

const baseStyle = {
  // flex: 1,
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
  padding: "25px"
  // borderWidth: 2,
  // borderRadius: 4,
  // borderColor: "#757575",
  // borderStyle: "dashed",
  // backgroundColor: "#eeeeee",
  // color: "#757575",
  // outline: "none",
  // transition: "border .24s ease-in-out",
  // cursor: "pointer"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

export default function StyledDropzone(props) {
  const onDrop = props.onDrop;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className="upload-icon-container">
          <MdFileUpload size={42} className="upload-icon" />
        </div>
        <p className="upload-text">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </div>
  );
}
