import { bytecode as pairBytecode } from '@skyxexchange/v2-core/artifacts/contracts/SkyXV2Pair.sol/SkyXV2Pair.json'
import { bytecode as poolBytecode } from '@skyxexchange/v3-core/artifacts/contracts/SkyXV3Pool.sol/SkyXV3Pool.json'
import { utils } from 'ethers'

// export const PAIR_BYTECODE_HASH = utils.keccak256(pairBytecode)
// console.log("PAIR_BYTECODE_HASH", PAIR_BYTECODE_HASH)
// export const POOL_BYTECODE_HASH = utils.keccak256(poolBytecode)
// console.log("POOL_BYTECODE_HASH", POOL_BYTECODE_HASH)
export const PAIR_BYTECODE_HASH = "0xa795368f72739ee47c6b417165c10b6eae74f9c99804f7c42ef183686dda3f4b"
export const POOL_BYTECODE_HASH = "0x1b5c366cb0b7109926c0b161c0a85469fa485e75389d33a4dd753c35b22f157b"

export function computePoolAddress(poolDeployerAddress: string, [tokenA, tokenB]: [string, string], fee: number): string {
  const [token0, token1] = tokenA.toLowerCase() < tokenB.toLowerCase() ? [tokenA, tokenB] : [tokenB, tokenA]
  const constructorArgumentsEncoded = utils.defaultAbiCoder.encode(
    ['address', 'address', 'uint24'],
    [token0, token1, fee]
  )
  const create2Inputs = [
    '0xff',
    poolDeployerAddress,
    // salt
    utils.keccak256(constructorArgumentsEncoded),
    // init code hash
    POOL_BYTECODE_HASH,
  ]
  const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join('')}`
  return utils.getAddress(`0x${utils.keccak256(sanitizedInputs).slice(-40)}`)
}
