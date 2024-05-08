/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Serializer,
  scalarEnum,
  u32,
} from '@metaplex-foundation/umi/serializers';

export enum NonceState {
  Uninitialized,
  Initialized,
}

export type NonceStateArgs = NonceState;

export function getNonceStateSerializer(): Serializer<
  NonceStateArgs,
  NonceState
> {
  return scalarEnum<NonceState>(NonceState, {
    size: u32(),
    description: 'NonceState',
  }) as Serializer<NonceStateArgs, NonceState>;
}
