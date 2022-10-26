import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AllowlistSeeded,
  Approval,
  ApprovalForAll,
  AvaxWithdraw,
  BaseURISet,
  DefaultRoyaltySet,
  DevMint,
  Initialized,
  JoeFeeInitialized,
  Mint,
  OwnershipTransferred,
  ProjectOwnerUpdated,
  PublicSaleStateChanged,
  Reveal,
  Transfer,
  UnrevealedURISet,
  VRFSet
} from "../generated/SmolJoe/SmolJoe"

export function createAllowlistSeededEvent(): AllowlistSeeded {
  let allowlistSeededEvent = changetype<AllowlistSeeded>(newMockEvent())

  allowlistSeededEvent.parameters = new Array()

  return allowlistSeededEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createAvaxWithdrawEvent(
  sender: Address,
  amount: BigInt,
  fee: BigInt
): AvaxWithdraw {
  let avaxWithdrawEvent = changetype<AvaxWithdraw>(newMockEvent())

  avaxWithdrawEvent.parameters = new Array()

  avaxWithdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  avaxWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  avaxWithdrawEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return avaxWithdrawEvent
}

export function createBaseURISetEvent(baseURI: string): BaseURISet {
  let baseUriSetEvent = changetype<BaseURISet>(newMockEvent())

  baseUriSetEvent.parameters = new Array()

  baseUriSetEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return baseUriSetEvent
}

export function createDefaultRoyaltySetEvent(
  receiver: Address,
  feePercent: BigInt
): DefaultRoyaltySet {
  let defaultRoyaltySetEvent = changetype<DefaultRoyaltySet>(newMockEvent())

  defaultRoyaltySetEvent.parameters = new Array()

  defaultRoyaltySetEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  defaultRoyaltySetEvent.parameters.push(
    new ethereum.EventParam(
      "feePercent",
      ethereum.Value.fromUnsignedBigInt(feePercent)
    )
  )

  return defaultRoyaltySetEvent
}

export function createDevMintEvent(sender: Address, quantity: BigInt): DevMint {
  let devMintEvent = changetype<DevMint>(newMockEvent())

  devMintEvent.parameters = new Array()

  devMintEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  devMintEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )

  return devMintEvent
}

export function createInitializedEvent(
  allowlistStartTime: BigInt,
  publicSaleStartTime: BigInt,
  allowlistPrice: BigInt,
  salePrice: BigInt
): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "allowlistStartTime",
      ethereum.Value.fromUnsignedBigInt(allowlistStartTime)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "publicSaleStartTime",
      ethereum.Value.fromUnsignedBigInt(publicSaleStartTime)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "allowlistPrice",
      ethereum.Value.fromUnsignedBigInt(allowlistPrice)
    )
  )
  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "salePrice",
      ethereum.Value.fromUnsignedBigInt(salePrice)
    )
  )

  return initializedEvent
}

export function createJoeFeeInitializedEvent(
  feePercent: BigInt,
  feeCollector: Address
): JoeFeeInitialized {
  let joeFeeInitializedEvent = changetype<JoeFeeInitialized>(newMockEvent())

  joeFeeInitializedEvent.parameters = new Array()

  joeFeeInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "feePercent",
      ethereum.Value.fromUnsignedBigInt(feePercent)
    )
  )
  joeFeeInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "feeCollector",
      ethereum.Value.fromAddress(feeCollector)
    )
  )

  return joeFeeInitializedEvent
}

export function createMintEvent(
  sender: Address,
  quantity: BigInt,
  price: BigInt,
  tokenId: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return mintEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProjectOwnerUpdatedEvent(
  owner: Address
): ProjectOwnerUpdated {
  let projectOwnerUpdatedEvent = changetype<ProjectOwnerUpdated>(newMockEvent())

  projectOwnerUpdatedEvent.parameters = new Array()

  projectOwnerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return projectOwnerUpdatedEvent
}

export function createPublicSaleStateChangedEvent(
  isActive: boolean
): PublicSaleStateChanged {
  let publicSaleStateChangedEvent = changetype<PublicSaleStateChanged>(
    newMockEvent()
  )

  publicSaleStateChangedEvent.parameters = new Array()

  publicSaleStateChangedEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )

  return publicSaleStateChangedEvent
}

export function createRevealEvent(
  batchNumber: BigInt,
  batchSeed: BigInt
): Reveal {
  let revealEvent = changetype<Reveal>(newMockEvent())

  revealEvent.parameters = new Array()

  revealEvent.parameters.push(
    new ethereum.EventParam(
      "batchNumber",
      ethereum.Value.fromUnsignedBigInt(batchNumber)
    )
  )
  revealEvent.parameters.push(
    new ethereum.EventParam(
      "batchSeed",
      ethereum.Value.fromUnsignedBigInt(batchSeed)
    )
  )

  return revealEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnrevealedURISetEvent(
  unrevealedURI: string
): UnrevealedURISet {
  let unrevealedUriSetEvent = changetype<UnrevealedURISet>(newMockEvent())

  unrevealedUriSetEvent.parameters = new Array()

  unrevealedUriSetEvent.parameters.push(
    new ethereum.EventParam(
      "unrevealedURI",
      ethereum.Value.fromString(unrevealedURI)
    )
  )

  return unrevealedUriSetEvent
}

export function createVRFSetEvent(
  _vrfCoordinator: Address,
  _keyHash: Bytes,
  _subscriptionId: BigInt,
  _callbackGasLimit: BigInt
): VRFSet {
  let vrfSetEvent = changetype<VRFSet>(newMockEvent())

  vrfSetEvent.parameters = new Array()

  vrfSetEvent.parameters.push(
    new ethereum.EventParam(
      "_vrfCoordinator",
      ethereum.Value.fromAddress(_vrfCoordinator)
    )
  )
  vrfSetEvent.parameters.push(
    new ethereum.EventParam("_keyHash", ethereum.Value.fromFixedBytes(_keyHash))
  )
  vrfSetEvent.parameters.push(
    new ethereum.EventParam(
      "_subscriptionId",
      ethereum.Value.fromUnsignedBigInt(_subscriptionId)
    )
  )
  vrfSetEvent.parameters.push(
    new ethereum.EventParam(
      "_callbackGasLimit",
      ethereum.Value.fromUnsignedBigInt(_callbackGasLimit)
    )
  )

  return vrfSetEvent
}
