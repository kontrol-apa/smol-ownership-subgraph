import { Address, BigInt, log } from "@graphprotocol/graph-ts"

import {
  SmolApa,
  Transfer,
  Reveal
} from "../generated/SmolApa/SmolApa"
import {
  SmolApaNFT,

} from "../generated/schema"

const contractaddy: Address = Address.fromString('0x3dd5e0f0659ca8b52925e504fe9f0250bfe68301');
const baseImage: string = "https://bafybeiclp5u6uzuyzwaoamlc7bjt3qkry2s6t5tbczymvc723vjzsl7cci.ipfs.dweb.link/";
const imageExtention: string = ".jpg";
const collectionSize: i32 = 100;


export function handleSmolApaReveal(event: Reveal): void {
  log.error("Revealed seed {}", [event.params.batchSeed.toString()])
  log.error("Block number {}", [event.block.number.toString()])
  for (let index = 0; index < collectionSize; index++) {
    let token = SmolApaNFT.load(index.toString());
    if (token) {
      const imageId: i32 = (index + event.params.batchSeed.toI32()) % collectionSize;
      token.image = baseImage + imageId.toString() + imageExtention
      token.offset = event.params.batchSeed.toI32();

      token.save();
    }
  }

}

export function handleSmolApaTransfer(event: Transfer): void {
  if (event.params.from.equals(Address.zero())) {
    let token = new SmolApaNFT(event.params.tokenId.toI32().toString());
    token.owner = event.params.to;
    token.tokenId = event.params.tokenId.toI32();
    token.image = "";
    token.offset = 0;
    token.save();

  }
  else { // normal transfer
    let token = SmolApaNFT.load(event.params.tokenId.toI32().toString());
    if (token) {
      token.owner = event.params.to;
      token.save();
    }
    else {
      log.error("We have a problem!", [])
    }
  }


}

