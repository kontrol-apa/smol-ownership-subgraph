import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import {
  SmolJoe,
  Reveal,
  Transfer,

} from "../generated/SmolJoe/SmolJoe"
import { SmolJoeNFT} from "../generated/schema"

const contractaddy: Address = Address.fromString('0xc70df87e1d98f6a531c8e324c9bcec6fc82b5e8d');
const baseImage: string = "https://bafybeiap4yjrdz4d4atlhsx42p6tvhexjr2d4m3dvghmaeiqljdfd7a7u4.ipfs.dweb.link/";
const imageExtention: string = ".png";
const collectionSize: i32 = 100;


export function handleReveal(event: Reveal): void {
  log.error("Revealed seed {}", [event.params.batchSeed.toString()])
  log.error("Block number {}", [event.block.number.toString()])
  for (let index = 0; index < collectionSize; index++) {
    let token = SmolJoeNFT.load(index.toString());
    if (token) {
      const imageId: i32 = (index + event.params.batchSeed.toI32()) % collectionSize;
      token.image = baseImage + imageId.toString() + imageExtention
      token.offset = event.params.batchSeed.toI32();
      token.save();
    }
  }

}


export function handleTransfer(event: Transfer): void {
  if(event.params.from.equals(Address.zero())) {
    let token = new SmolJoeNFT(event.params.tokenId.toI32().toString());
    token.owner = event.params.to;
    token.tokenId = event.params.tokenId.toI32();
    token.image = "";
    token.offset = 0;
    token.save();
  }
  else { // normal transfer
      let token = SmolJoeNFT.load(event.params.tokenId.toI32().toString());
      if(token) {
        token.owner = event.params.to;
        token.save();
      }
      else {
        log.error("We have a problem!", [])
      }
    }
  
  


}

function batchInitiate(collectionSize: i32, contractAddress: Address, offset:i32, baseImageUrl:string): void {
  let contract = SmolJoe.bind(contractAddress)
  for (let index = 0; index < collectionSize; index++) {
    let token = new SmolJoeNFT(index.toString());
    token.owner = contract.ownerOf(BigInt.fromI32(index));
    token.tokenId = index;
    const imageId:i32 = (index + offset) % collectionSize;
    token.image = baseImageUrl + imageId.toString() + '.png'
    token.save();
  }
}

