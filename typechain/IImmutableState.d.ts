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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IImmutableStateInterface extends ethers.utils.Interface {
  functions: {
    "factoryV2()": FunctionFragment;
    "positionManager()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionManager",
    data: BytesLike
  ): Result;

  events: {};
}

export class IImmutableState extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IImmutableStateInterface;

  functions: {
    factoryV2(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "factoryV2()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    positionManager(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "positionManager()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  factoryV2(overrides?: CallOverrides): Promise<string>;

  "factoryV2()"(overrides?: CallOverrides): Promise<string>;

  positionManager(overrides?: CallOverrides): Promise<string>;

  "positionManager()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    factoryV2(overrides?: CallOverrides): Promise<string>;

    "factoryV2()"(overrides?: CallOverrides): Promise<string>;

    positionManager(overrides?: CallOverrides): Promise<string>;

    "positionManager()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    factoryV2(overrides?: CallOverrides): Promise<BigNumber>;

    "factoryV2()"(overrides?: CallOverrides): Promise<BigNumber>;

    positionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "positionManager()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factoryV2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "positionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
