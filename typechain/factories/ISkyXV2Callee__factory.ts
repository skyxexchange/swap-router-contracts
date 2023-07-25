/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISkyXV2Callee } from "../ISkyXV2Callee";

export class ISkyXV2Callee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISkyXV2Callee {
    return new Contract(address, _abi, signerOrProvider) as ISkyXV2Callee;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "skyxV2Call",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];