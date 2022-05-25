import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react";
import { RingLoader } from 'react-spinners';

const override = css`
  display: block;
  margin:auto;
  
  borderColor:white;
`;
export default function Progressing() {
  let [loading, setLoading] = useState();
  let [color, setColor] = useState("#E21717");
  return (
    <RingLoader 
    css={override}
    color={color}
    loading={loading}
    size={140} />
  )
}
