import React from 'react';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const style = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 15%;
`;

const Loader = ({loading}) => {
    return (
        <HashLoader
            css={style}
            size={60}
            color={"#ffc200"}
            loading={loading}
        />
    )
};

export default Loader;
