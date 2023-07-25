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

interface PeripheryPaymentsWithFeeExtendedInterface
  extends ethers.utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "factory()": FunctionFragment;
    "poolDeployer()": FunctionFragment;
    "pull(address,uint256)": FunctionFragment;
    "refundETH()": FunctionFragment;
    "sweepToken(address,uint256,address)": FunctionFragment;
    "sweepTokenWithFee(address,uint256,uint256,address)": FunctionFragment;
    "unwrapWETH9(uint256,address)": FunctionFragment;
    "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
    "wrapETH(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolDeployer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pull",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sweepToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepTokenWithFee",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH9",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapWETH9WithFee",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapETH",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sweepTokenWithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWETH9",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unwrapWETH9WithFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapETH", data: BytesLike): Result;

  events: {};
}

export class PeripheryPaymentsWithFeeExtended extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PeripheryPaymentsWithFeeExtendedInterface;

  functions: {
    WETH9(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "WETH9()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    factory(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "factory()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    poolDeployer(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "poolDeployer()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "pull(address,uint256)"(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    refundETH(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "refundETH()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "wrapETH(uint256)"(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  "WETH9()"(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  poolDeployer(overrides?: CallOverrides): Promise<string>;

  "poolDeployer()"(overrides?: CallOverrides): Promise<string>;

  pull(
    token: string,
    value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "pull(address,uint256)"(
    token: string,
    value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  refundETH(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "refundETH()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "sweepToken(address,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sweepToken(address,uint256)"(
    token: string,
    amountMinimum: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sweepTokenWithFee(address,uint256,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sweepTokenWithFee(address,uint256,address,uint256,address)"(
    token: string,
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "unwrapWETH9(uint256,address)"(
    amountMinimum: BigNumberish,
    recipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "unwrapWETH9(uint256)"(
    amountMinimum: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "unwrapWETH9WithFee(uint256,address,uint256,address)"(
    amountMinimum: BigNumberish,
    recipient: string,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "unwrapWETH9WithFee(uint256,uint256,address)"(
    amountMinimum: BigNumberish,
    feeBips: BigNumberish,
    feeRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  wrapETH(
    value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "wrapETH(uint256)"(
    value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    "WETH9()"(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    poolDeployer(overrides?: CallOverrides): Promise<string>;

    "poolDeployer()"(overrides?: CallOverrides): Promise<string>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pull(address,uint256)"(
      token: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refundETH(overrides?: CallOverrides): Promise<void>;

    "refundETH()"(overrides?: CallOverrides): Promise<void>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapETH(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "wrapETH(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH9()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolDeployer(overrides?: CallOverrides): Promise<BigNumber>;

    "poolDeployer()"(overrides?: CallOverrides): Promise<BigNumber>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "pull(address,uint256)"(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    refundETH(overrides?: PayableOverrides): Promise<BigNumber>;

    "refundETH()"(overrides?: PayableOverrides): Promise<BigNumber>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "wrapETH(uint256)"(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH9()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolDeployer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pull(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "pull(address,uint256)"(
      token: string,
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    refundETH(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "refundETH()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "sweepToken(address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sweepToken(address,uint256)"(
      token: string,
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sweepTokenWithFee(address,uint256,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sweepTokenWithFee(address,uint256,address,uint256,address)"(
      token: string,
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9(uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9(uint256)"(
      amountMinimum: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9WithFee(uint256,address,uint256,address)"(
      amountMinimum: BigNumberish,
      recipient: string,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "unwrapWETH9WithFee(uint256,uint256,address)"(
      amountMinimum: BigNumberish,
      feeBips: BigNumberish,
      feeRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    wrapETH(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "wrapETH(uint256)"(
      value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
