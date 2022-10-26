import { Address, BigInt, log } from "@graphprotocol/graph-ts"

import {
  Transfer,
  Reveal
} from "../generated/SmolLand/SmolLand"
import {
  SmolLandNFT
} from "../generated/schema"


const contractaddy: Address = Address.fromString('0x77e0459eb2fefa3c772a7fabe45c746377b1ed10');
const baseImage: string = "https://bafybeif7rosnbyu36q3qjujmoaisisk5l4i2en43nxaje7tih2wmkacq5a.ipfs.dweb.link/";
const imageExtention: string = ".png";
const collectionSize: i32 = 200;


export function handleSmolLandTransfer(event: Transfer): void {
  if(event.params.from.equals(Address.zero())) {
    let token = new SmolLandNFT(event.params.tokenId.toI32().toString());
    token.owner = event.params.to;
    token.tokenId = event.params.tokenId.toI32();
    token.image = "";
    token.offset = 0;
    token.save();
  }
  else { // normal transfer
      let token = SmolLandNFT.load(event.params.tokenId.toI32().toString());
      if(token) {
        token.owner = event.params.to;
        token.save();
      }
      else {
        log.error("We have a problem!", [])
      }
    }

}


export function handleReveal(event: Reveal): void {
  log.error("Revealed seed {}", [event.params.batchSeed.toString()])
  log.error("Block number {}", [event.block.number.toString()])
  for (let index = 0; index < collectionSize; index++) {
    let token = SmolLandNFT.load(index.toString());
    if (token) {
      token.tokenId = index;
      const imageId: i32 = (index + event.params.batchSeed.toI32()) % collectionSize;
      token.image = baseImage + imageId.toString() + imageExtention
      token.offset = event.params.batchSeed.toI32();
      token.save();
    }
  }

}

