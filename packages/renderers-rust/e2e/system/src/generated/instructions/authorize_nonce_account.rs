//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/kinobi-so/kinobi]
//!

use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

/// Accounts.
pub struct AuthorizeNonceAccount {
    pub nonce_account: solana_program::pubkey::Pubkey,

    pub nonce_authority: solana_program::pubkey::Pubkey,
}

impl AuthorizeNonceAccount {
    pub fn instruction(
        &self,
        args: AuthorizeNonceAccountInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: AuthorizeNonceAccountInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            self.nonce_account,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.nonce_authority,
            true,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = AuthorizeNonceAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::SYSTEM_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct AuthorizeNonceAccountInstructionData {
    discriminator: u32,
}

impl AuthorizeNonceAccountInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 7 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct AuthorizeNonceAccountInstructionArgs {
    pub new_nonce_authority: Pubkey,
}

/// Instruction builder for `AuthorizeNonceAccount`.
///
/// ### Accounts:
///
///   0. `[writable]` nonce_account
///   1. `[signer]` nonce_authority
#[derive(Clone, Debug, Default)]
pub struct AuthorizeNonceAccountBuilder {
    nonce_account: Option<solana_program::pubkey::Pubkey>,
    nonce_authority: Option<solana_program::pubkey::Pubkey>,
    new_nonce_authority: Option<Pubkey>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl AuthorizeNonceAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[inline(always)]
    pub fn nonce_account(&mut self, nonce_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.nonce_account = Some(nonce_account);
        self
    }
    #[inline(always)]
    pub fn nonce_authority(
        &mut self,
        nonce_authority: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.nonce_authority = Some(nonce_authority);
        self
    }
    #[inline(always)]
    pub fn new_nonce_authority(&mut self, new_nonce_authority: Pubkey) -> &mut Self {
        self.new_nonce_authority = Some(new_nonce_authority);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = AuthorizeNonceAccount {
            nonce_account: self.nonce_account.expect("nonce_account is not set"),
            nonce_authority: self.nonce_authority.expect("nonce_authority is not set"),
        };
        let args = AuthorizeNonceAccountInstructionArgs {
            new_nonce_authority: self
                .new_nonce_authority
                .clone()
                .expect("new_nonce_authority is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `authorize_nonce_account` CPI accounts.
pub struct AuthorizeNonceAccountCpiAccounts<'a, 'b> {
    pub nonce_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub nonce_authority: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `authorize_nonce_account` CPI instruction.
pub struct AuthorizeNonceAccountCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,

    pub nonce_account: &'b solana_program::account_info::AccountInfo<'a>,

    pub nonce_authority: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: AuthorizeNonceAccountInstructionArgs,
}

impl<'a, 'b> AuthorizeNonceAccountCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: AuthorizeNonceAccountCpiAccounts<'a, 'b>,
        args: AuthorizeNonceAccountInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            nonce_account: accounts.nonce_account,
            nonce_authority: accounts.nonce_authority,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(2 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new(
            *self.nonce_account.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.nonce_authority.key,
            true,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = AuthorizeNonceAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::SYSTEM_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(2 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.nonce_account.clone());
        account_infos.push(self.nonce_authority.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `AuthorizeNonceAccount` via CPI.
///
/// ### Accounts:
///
///   0. `[writable]` nonce_account
///   1. `[signer]` nonce_authority
#[derive(Clone, Debug)]
pub struct AuthorizeNonceAccountCpiBuilder<'a, 'b> {
    instruction: Box<AuthorizeNonceAccountCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> AuthorizeNonceAccountCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(AuthorizeNonceAccountCpiBuilderInstruction {
            __program: program,
            nonce_account: None,
            nonce_authority: None,
            new_nonce_authority: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    #[inline(always)]
    pub fn nonce_account(
        &mut self,
        nonce_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nonce_account = Some(nonce_account);
        self
    }
    #[inline(always)]
    pub fn nonce_authority(
        &mut self,
        nonce_authority: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.nonce_authority = Some(nonce_authority);
        self
    }
    #[inline(always)]
    pub fn new_nonce_authority(&mut self, new_nonce_authority: Pubkey) -> &mut Self {
        self.instruction.new_nonce_authority = Some(new_nonce_authority);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = AuthorizeNonceAccountInstructionArgs {
            new_nonce_authority: self
                .instruction
                .new_nonce_authority
                .clone()
                .expect("new_nonce_authority is not set"),
        };
        let instruction = AuthorizeNonceAccountCpi {
            __program: self.instruction.__program,

            nonce_account: self
                .instruction
                .nonce_account
                .expect("nonce_account is not set"),

            nonce_authority: self
                .instruction
                .nonce_authority
                .expect("nonce_authority is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct AuthorizeNonceAccountCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    nonce_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    nonce_authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    new_nonce_authority: Option<Pubkey>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
