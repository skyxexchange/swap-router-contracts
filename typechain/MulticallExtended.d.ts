/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MulticallExtendedInterface extends ethers.utils.Interface {
  functions: {
    "multicall(bytes32,bytes[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;

  events: {};
}

export class MulticallExtended extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MulticallExtendedInterface;

  functions: {
    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  "multicall(bytes32,bytes[])"(
    previousBlockhash: BytesLike,
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multicall(uint256,bytes[])"(
    deadline: BigNumberish,
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "multicall(bytes[])"(
    data: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "multicall(bytes32,bytes[])"(
      previousBlockhash: BytesLike,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: BigNumberish,
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "multicall(bytes[])"(
      data: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
