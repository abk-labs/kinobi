/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  WritableAccount,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';

export type InitializeAccountInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountAccount extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountRent extends
    | string
    | IAccountMeta<string> = 'SysvarRent111111111111111111111111111111111',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAccount extends string
        ? WritableAccount<TAccountAccount>
        : TAccountAccount,
      TAccountMint extends string
        ? ReadonlyAccount<TAccountMint>
        : TAccountMint,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      ...TRemainingAccounts,
    ]
  >;

export type InitializeAccountInstructionData = { discriminator: number };

export type InitializeAccountInstructionDataArgs = {};

export function getInitializeAccountInstructionDataEncoder(): Encoder<InitializeAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 1 })
  );
}

export function getInitializeAccountInstructionDataDecoder(): Decoder<InitializeAccountInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getInitializeAccountInstructionDataCodec(): Codec<
  InitializeAccountInstructionDataArgs,
  InitializeAccountInstructionData
> {
  return combineCodec(
    getInitializeAccountInstructionDataEncoder(),
    getInitializeAccountInstructionDataDecoder()
  );
}

export type InitializeAccountInput<
  TAccountAccount extends string = string,
  TAccountMint extends string = string,
  TAccountOwner extends string = string,
  TAccountRent extends string = string,
> = {
  /** The account to initialize. */
  account: Address<TAccountAccount>;
  /** The mint this account will be associated with. */
  mint: Address<TAccountMint>;
  /** The new account's owner/multisignature. */
  owner: Address<TAccountOwner>;
  /** Rent sysvar. */
  rent?: Address<TAccountRent>;
};

export function getInitializeAccountInstruction<
  TAccountAccount extends string,
  TAccountMint extends string,
  TAccountOwner extends string,
  TAccountRent extends string,
>(
  input: InitializeAccountInput<
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >
): InitializeAccountInstruction<
  typeof TOKEN_PROGRAM_ADDRESS,
  TAccountAccount,
  TAccountMint,
  TAccountOwner,
  TAccountRent
> {
  // Program address.
  const programAddress = TOKEN_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.rent.value) {
    accounts.rent.value =
      'SysvarRent111111111111111111111111111111111' as Address<'SysvarRent111111111111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.rent),
    ],
    programAddress,
    data: getInitializeAccountInstructionDataEncoder().encode({}),
  } as InitializeAccountInstruction<
    typeof TOKEN_PROGRAM_ADDRESS,
    TAccountAccount,
    TAccountMint,
    TAccountOwner,
    TAccountRent
  >;

  return instruction;
}

export type ParsedInitializeAccountInstruction<
  TProgram extends string = typeof TOKEN_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** The account to initialize. */
    account: TAccountMetas[0];
    /** The mint this account will be associated with. */
    mint: TAccountMetas[1];
    /** The new account's owner/multisignature. */
    owner: TAccountMetas[2];
    /** Rent sysvar. */
    rent: TAccountMetas[3];
  };
  data: InitializeAccountInstructionData;
};

export function parseInitializeAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedInitializeAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      owner: getNextAccount(),
      rent: getNextAccount(),
    },
    data: getInitializeAccountInstructionDataDecoder().decode(instruction.data),
  };
}
