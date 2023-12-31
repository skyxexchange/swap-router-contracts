/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IOracleSlippage } from "../IOracleSlippage";

export class IOracleSlippage__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracleSlippage {
    return new Contract(address, _abi, signerOrProvider) as IOracleSlippage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "paths",
        type: "bytes[]",
      },
      {
        internalType: "uint128[]",
        name: "amounts",
        type: "uint128[]",
      },
      {
        internalType: "uint24",
        name: "maximumTickDivergence",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "checkOracleSlippage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint24",
        name: "maximumTickDivergence",
        type: "uint24",
      },
      {
        internalType: "uint32",
        name: "secondsAgo",
        type: "uint32",
      },
    ],
    name: "checkOracleSlippage",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];
