import { BigInt } from "@graphprotocol/graph-ts"
import {
  SmolJoe,
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
import { ExampleEntity } from "../generated/schema"

export function handleAllowlistSeeded(event: AllowlistSeeded): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BASIS_POINT_PRECISION(...)
  // - contract.allowlist(...)
  // - contract.allowlistPrice(...)
  // - contract.allowlistStartTime(...)
  // - contract.amountForAllowlist(...)
  // - contract.amountForDevs(...)
  // - contract.amountMintedByDevs(...)
  // - contract.amountMintedDuringAllowlist(...)
  // - contract.amountMintedDuringPublicSale(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.batchToSeed(...)
  // - contract.callbackGasLimit(...)
  // - contract.collectionSize(...)
  // - contract.currentPhase(...)
  // - contract.getApproved(...)
  // - contract.getOwnershipData(...)
  // - contract.hasBatchToReveal(...)
  // - contract.hasBeenForceRevealed(...)
  // - contract.isApprovedForAll(...)
  // - contract.joeFeeCollector(...)
  // - contract.joeFeePercent(...)
  // - contract.keyHash(...)
  // - contract.lastTokenRevealed(...)
  // - contract.maxBatchSize(...)
  // - contract.maxPerAddressDuringMint(...)
  // - contract.name(...)
  // - contract.nextBatchToReveal(...)
  // - contract.numberMinted(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.projectOwner(...)
  // - contract.publicSaleStartTime(...)
  // - contract.requestConfirmations(...)
  // - contract.revealBatchSize(...)
  // - contract.revealInterval(...)
  // - contract.revealStartTime(...)
  // - contract.royaltyInfo(...)
  // - contract.salePrice(...)
  // - contract.subscriptionId(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.unrevealedURI(...)
  // - contract.useVRF(...)
  // - contract.vrfRequestedForBatch(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAvaxWithdraw(event: AvaxWithdraw): void {}

export function handleBaseURISet(event: BaseURISet): void {}

export function handleDefaultRoyaltySet(event: DefaultRoyaltySet): void {}

export function handleDevMint(event: DevMint): void {}

export function handleInitialized(event: Initialized): void {}

export function handleJoeFeeInitialized(event: JoeFeeInitialized): void {}

export function handleMint(event: Mint): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProjectOwnerUpdated(event: ProjectOwnerUpdated): void {}

export function handlePublicSaleStateChanged(
  event: PublicSaleStateChanged
): void {}

export function handleReveal(event: Reveal): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnrevealedURISet(event: UnrevealedURISet): void {}

export function handleVRFSet(event: VRFSet): void {}
