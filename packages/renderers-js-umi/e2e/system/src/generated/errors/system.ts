/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** AccountAlreadyInUse: an account with the same address already exists */
export class AccountAlreadyInUseError extends ProgramError {
  override readonly name: string = 'AccountAlreadyInUse';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('an account with the same address already exists', program, cause);
  }
}
codeToErrorMap.set(0x0, AccountAlreadyInUseError);
nameToErrorMap.set('AccountAlreadyInUse', AccountAlreadyInUseError);

/** ResultWithNegativeLamports: account does not have enough SOL to perform the operation */
export class ResultWithNegativeLamportsError extends ProgramError {
  override readonly name: string = 'ResultWithNegativeLamports';

  readonly code: number = 0x1; // 1

  constructor(program: Program, cause?: Error) {
    super(
      'account does not have enough SOL to perform the operation',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1, ResultWithNegativeLamportsError);
nameToErrorMap.set(
  'ResultWithNegativeLamports',
  ResultWithNegativeLamportsError
);

/** InvalidProgramId: cannot assign account to this program id */
export class InvalidProgramIdError extends ProgramError {
  override readonly name: string = 'InvalidProgramId';

  readonly code: number = 0x2; // 2

  constructor(program: Program, cause?: Error) {
    super('cannot assign account to this program id', program, cause);
  }
}
codeToErrorMap.set(0x2, InvalidProgramIdError);
nameToErrorMap.set('InvalidProgramId', InvalidProgramIdError);

/** InvalidAccountDataLength: cannot allocate account data of this length */
export class InvalidAccountDataLengthError extends ProgramError {
  override readonly name: string = 'InvalidAccountDataLength';

  readonly code: number = 0x3; // 3

  constructor(program: Program, cause?: Error) {
    super('cannot allocate account data of this length', program, cause);
  }
}
codeToErrorMap.set(0x3, InvalidAccountDataLengthError);
nameToErrorMap.set('InvalidAccountDataLength', InvalidAccountDataLengthError);

/** MaxSeedLengthExceeded: length of requested seed is too long */
export class MaxSeedLengthExceededError extends ProgramError {
  override readonly name: string = 'MaxSeedLengthExceeded';

  readonly code: number = 0x4; // 4

  constructor(program: Program, cause?: Error) {
    super('length of requested seed is too long', program, cause);
  }
}
codeToErrorMap.set(0x4, MaxSeedLengthExceededError);
nameToErrorMap.set('MaxSeedLengthExceeded', MaxSeedLengthExceededError);

/** AddressWithSeedMismatch: provided address does not match addressed derived from seed */
export class AddressWithSeedMismatchError extends ProgramError {
  override readonly name: string = 'AddressWithSeedMismatch';

  readonly code: number = 0x5; // 5

  constructor(program: Program, cause?: Error) {
    super(
      'provided address does not match addressed derived from seed',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x5, AddressWithSeedMismatchError);
nameToErrorMap.set('AddressWithSeedMismatch', AddressWithSeedMismatchError);

/** NonceNoRecentBlockhashes: advancing stored nonce requires a populated RecentBlockhashes sysvar */
export class NonceNoRecentBlockhashesError extends ProgramError {
  override readonly name: string = 'NonceNoRecentBlockhashes';

  readonly code: number = 0x6; // 6

  constructor(program: Program, cause?: Error) {
    super(
      'advancing stored nonce requires a populated RecentBlockhashes sysvar',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x6, NonceNoRecentBlockhashesError);
nameToErrorMap.set('NonceNoRecentBlockhashes', NonceNoRecentBlockhashesError);

/** NonceBlockhashNotExpired: stored nonce is still in recent_blockhashes */
export class NonceBlockhashNotExpiredError extends ProgramError {
  override readonly name: string = 'NonceBlockhashNotExpired';

  readonly code: number = 0x7; // 7

  constructor(program: Program, cause?: Error) {
    super('stored nonce is still in recent_blockhashes', program, cause);
  }
}
codeToErrorMap.set(0x7, NonceBlockhashNotExpiredError);
nameToErrorMap.set('NonceBlockhashNotExpired', NonceBlockhashNotExpiredError);

/** NonceUnexpectedBlockhashValue: specified nonce does not match stored nonce */
export class NonceUnexpectedBlockhashValueError extends ProgramError {
  override readonly name: string = 'NonceUnexpectedBlockhashValue';

  readonly code: number = 0x8; // 8

  constructor(program: Program, cause?: Error) {
    super('specified nonce does not match stored nonce', program, cause);
  }
}
codeToErrorMap.set(0x8, NonceUnexpectedBlockhashValueError);
nameToErrorMap.set(
  'NonceUnexpectedBlockhashValue',
  NonceUnexpectedBlockhashValueError
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getSystemErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getSystemErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
