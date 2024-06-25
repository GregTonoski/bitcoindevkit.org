searchState.loadedDescShard("bdk_wallet", 0, "BDK Wallet\nExternal keychain, used for deriving recipient addresses.\nA UTXO owned by another wallet.\nInternal keychain, used for deriving change addresses.\nTypes of keychains\nA UTXO owned by the local wallet.\nAn unspent output owned by a <code>Wallet</code>.\nAn unspent transaction output (UTXO).\nA <code>Utxo</code> with its <code>satisfaction_weight</code>.\nReturn <code>KeychainKind</code> as a byte\nThe confirmation time for transaction containing this utxo\nThe derivation index for the script pubkey in the wallet\nDescriptors\nMacro to write full descriptors with code\nMacro to write descriptor fragments with code\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this UTXO is spent or not\nType of keychain\nKey formats\nGet the location of the UTXO\nReference to a transaction output\nAdditional functions on the <code>rust-bitcoin</code> <code>Psbt</code> structure.\nThe weight of the witness data and <code>scriptSig</code> expressed in …\nGet the sequence number if an explicit sequence number has …\nGet the <code>TxOut</code> of the UTXO\nTransaction output\nThe UTXO\nGet the version of BDK at runtime\nWallet\nThe location of the output.\nThe information about the input we require to add it to a …\nThe nSequence value to set for this input.\nA raw scriptpubkey (including pay-to-pubkey) under Legacy …\nA raw scriptpubkey (including pay-to-pubkey) under Legacy …\nA raw scriptpubkey (including pay-to-pubkey) under Legacy …\nAlias for a <code>Descriptor</code> that contains extended <strong>derived</strong> keys\nScript descriptor\nThe descriptor pubkey, either a single pubkey or an xpub.\nAlias for a <code>Descriptor</code> that can contain extended keys …\nTrait implemented on <code>Descriptor</code>s to add a method to …\nThe <code>0</code> combinator.\nAlias for the type of maps that represent derivation paths …\nTrait for types which can be converted into an …\nThe consensus key associated with the type. Must be a …\nLegacy ScriptContext To be used as P2SH scripts For …\nThe top-level miniscript abstract syntax tree (AST).\nMultiple extended public keys.\nPay-to-PubKey-Hash\nPay-to-PubKey-Hash\nPay-to-PubKey-Hash\nThe ScriptContext for Miniscript. Additional type …\nSegwitv0 ScriptContext\nPay-to-ScriptHash(includes nested wsh/wpkh/sorted multi)\nPay-to-ScriptHash(includes nested wsh/wpkh/sorted multi)\nPay-to-ScriptHash(includes nested wsh/wpkh/sorted multi)\nSingle public key.\nThe <code>1</code> combinator.\nAlias for the type of maps that represent taproot key …\nPay-to-Taproot\nPay-to-Taproot\nPay-to-Taproot\nPay-to-Witness-PubKey-Hash\nPay-to-Witness-PubKey-Hash\nPay-to-Witness-PubKey-Hash\nPay-to-Witness-ScriptHash with Segwitv0 context\nPay-to-Witness-ScriptHash with Segwitv0 context\nPay-to-Witness-ScriptHash with Segwitv0 context\nExtended public key (xpub).\nComputes the Bitcoin address of the descriptor, if one …\nGet a reference to the inner <code>AstElem</code> representing the root …\nReplaces all wildcards (i.e. <code>/*</code>) in the descriptor with a …\nEnumerates all child nodes of the current AST node (<code>self</code>) …\nAttempt to produce a non-malleable witness template given …\nAttempt to produce a malleable witness template given the …\nDepending on script Context, some of the Terminals might …\nDepending on script Context, some of the script resource …\nCheck the consensus + policy(if not disabled) rules that …\nConsensus rules at the Miniscript satisfaction time. It is …\nPolicy rules at the Miniscript satisfaction time. It is …\nCheck the consensus + policy(if not disabled) rules …\nEach context has slightly different rules on what Pks are …\nDepending on ScriptContext, fragments can be malleable. …\nCheck whether the given satisfaction is valid under the …\nDescriptor checksum\nWhether the given miniscript contains a raw pkh fragment\nDeprecated name for <code>Self::at_derivation_index</code>.\nConvert all the public keys in the descriptor to …\nConvert all the public keys in the descriptor to …\nGet the DescriptorType of Descriptor\nEncode as a Bitcoin script\nDescriptor errors\nComputes the the underlying script before any hashing is …\nAdditional information helpful for extra analysis.\nCheck whether the miniscript follows the given Extra …\nExtract the spending <code>policy</code>\nUtility method for deriving the descriptor at each index …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAdd type information(Type and Extdata) to Miniscript based …\nCreate a new <code>Miniscript</code> from a <code>Terminal</code> node and a <code>Type</code> …\nParse a Miniscript from string and perform sanity checks …\nAttempt to parse an Miniscripts that don’t follow the …\nAttempt to parse an insane(scripts don’t clear sanity …\nParse an expression tree into a descriptor.\nParse an expression tree into a Miniscript. As a general …\nReturns child node with given index, if any\nReturns <code>Option::Some</code> with cloned n’th public key from …\nReturns satisfying non-malleable witness and scriptSig to …\nReturns a possilbly mallable satisfying non-malleable …\nWhether the miniscript contains a combination of timelocks\nWhether the miniscript has repeated Pk or Pkh\nWhether or not the descriptor has any wildcards i.e. <code>/*</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtracts the <code>AstElem</code> representing the root of the …\nGet as many descriptors as different paths in this …\nConvert to wallet descriptor\nWhether or not the descriptor has any wildcards\nWhether this descriptor contains a key that has multiple …\nWhether the miniscript is malleable\nCreates a new Iter iterator that will iterate over all …\nCreates a new PkIter iterator that will iterate over all …\nLifting corresponds to conversion of a miniscript into a …\nDepending on script context, the size of a satifaction …\nMaximum size, in bytes, of a satisfying witness. For …\nComputes an upper bound on the weight of a satisfying …\nMaximum number of witness elements used to satisfy the …\nComputes an upper bound on the difference between a …\nLocal helper function to display error messages with …\nCreate a new bare descriptor from witness script Errors …\nCreate a new pk descriptor\nCreate a new PkH descriptor\nCreate a new sh for a given redeem script Errors when …\nCreate a new sh sortedmulti descriptor with threshold <code>k</code> …\nCreate a new sh wrapper for the given wpkh descriptor\nCreate a new sh wrapper for the given wsh descriptor\nCreate a new sh wrapped wpkh from <code>Pk</code>. Errors when …\nCreate a new sh wrapped wsh descriptor with witness script …\nCreate a new sh wrapped wsh sortedmulti descriptor from …\nCreate new tr descriptor Errors when miniscript exceeds …\nCreate a new Wpkh descriptor Will return Err if …\nCreate a new wsh descriptor from witness script Errors …\nCreate a new wsh sorted multi descriptor Errors when …\nA node in the AST.\nOther top level checks that are context specific\nAttempt to parse a Script into Miniscript representation.\nParse a descriptor that may contain secret keys\nAttempt to parse an insane(scripts don’t clear sanity …\nAttempt to parse an miniscript with extra features that …\nGet the len of public key when serialized based on context …\nReturns a plan if the provided assets are sufficient to …\nReturns a plan if the provided assets are sufficient to …\nDescriptor policy\nWhether all spend paths of miniscript require a signature\nChecks whether the descriptor is safe.\nCheck whether the underlying Miniscript is safe under the …\nAttempts to produce a non-malleable satisfying witness and …\nAttempt to produce non-malleable satisfying witness for the\nAttempt to produce a malleable satisfying witness for the …\nComputes the <code>scriptCode</code> of a transaction output.\nComputes the scriptpubkey of the descriptor.\nSize, in bytes of the script-pubkey. If this Miniscript is …\nThe type of signature required for satisfaction\nSubstitutes raw public keys hashes with the public keys as …\nDescriptor templates\nSerialize a descriptor to string with its secret keys\nCheck top level consensus rules.\nCheck whether the top-level is type B\nConverts a descriptor using abstract keys to one using …\nTranslates a struct from one generic to another where the …\nThe correctness and malleability type information for the …\nComputes the scriptSig that will be in place for an …\nWhether the miniscript can exceed the resource …\nCompute the checksum of a descriptor, excludes any …\nCompute the checksum bytes of a descriptor, excludes any …\nError during base58 decoding\nBIP32 error\nErrors related to the parsing and usage of descriptors\nThe provided wallet descriptors are identical\nThe descriptor contains hardened derivation steps on …\nHex decoding error\nInvalid byte found in the descriptor checksum\nThe provided descriptor doesn’t match its checksum\nInvalid HD Key path, such as having a wildcard but a …\nError thrown while working with <code>keys</code>\nMiniscript error\nThe descriptor contains multipath keys\nKey-related error\nError while extracting and manipulating policies\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAbsolute timeclock timestamp\nCan not add to an item that is <code>Satisfaction::None</code> or …\nCan not add to an item that is …\nOptions to build the satisfaction field in the policy\nCan satisfy the policy item\nAn extra condition that must be satisfied but that is out …\nType for a map of sets of <code>Condition</code> items keyed by each set…\nECDSA Signature for a raw public key\nAn extended key fingerprint\nType for a map of folded sets of <code>Condition</code> items keyed by …\nSHA256 then RIPEMD160 preimage hash\nDouble SHA256 preimage hash\nIncompatible conditions (not currently used)\nIndex out of range for an item to satisfy a …\nCan not merge CSV or timelock values unless both are less …\nMulti-signature public keys with threshold count\nCannot satisfy or contribute to the policy item\nDon’t generate <code>satisfaction</code> field\nNot enough items are selected to satisfy a …\nOnly a partial satisfaction of some kind of threshold …\nCan reach the threshold of some kind of threshold policy\nA unique identifier for a key\nDescriptor spending policy\nErrors that can happen while extracting and manipulating …\nAnalyze the given PSBT to check for existing signatures\nLike <code>Psbt</code> variant and also check for expired timelocks\nA legacy public key\nRelative timelock locktime\nRIPEMD160 preimage hash\nRepresent if and how much a policy item is satisfied by …\nAn item that needs to be satisfied\nSchnorr Signature for a raw public key\nSHA256 preimage hash\nThreshold items with threshold count\nA x-only public key\nHow the wallet’s descriptor can satisfy this policy node\nOptional CheckSequenceVerify condition\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the conditions that are set by the spending policy …\nReturns a unique id for the <code>SatisfiableItem</code>\nIdentifier for this policy node\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the <code>SatisfiableItem</code> is a leaf item\nReturns whether the <code>Satisfaction</code> is a leaf item\nReturns <code>true</code> if there are no extra conditions to verify\nType of this policy node\nReturn whether or not a specific path in the policy tree …\nHow much a given PSBT already satisfies this policy node …\nOptional timelock condition\nCurrent blockchain height\nThe highest confirmation height between the inputs CSV …\nGiven PSBT\nExtra conditions that also need to be satisfied\nExtra conditions that also need to be satisfied\nExtra conditions that also need to be satisfied\nThe items that can be satisfied by the descriptor or are …\nThe items that can be satisfied by the descriptor\nThreshold\nThreshold\nTotal number of items\nTotal number of items\nWhether the items are sorted in lexicographic order (used …\nWhether the items are sorted in lexicographic order (used …\nThe digest value\nThe digest value\nThe digest value\nThe digest value\nThe policy items\nThe raw public key or extended key fingerprint\nThe required threshold count\nThe required threshold count\nThe timelock value\nThe timelock value\nBIP44 template. Expands to <code>pkh(key/44&#39;/{0,1}&#39;/0&#39;/{0,1}/*)</code>\nBIP44 public template. Expands to <code>pkh(key/{0,1}/*)</code>\nBIP49 template. Expands to …\nBIP49 public template. Expands to <code>sh(wpkh(key/{0,1}/*))</code>\nBIP84 template. Expands to <code>wpkh(key/84&#39;/{0,1}&#39;/0&#39;/{0,1}/*)</code>\nBIP84 public template. Expands to <code>wpkh(key/{0,1}/*)</code>\nBIP86 template. Expands to <code>tr(key/86&#39;/{0,1}&#39;/0&#39;/{0,1}/*)</code>\nBIP86 public template. Expands to <code>tr(key/{0,1}/*)</code>\nTrait for descriptor templates that can be built into a …\nType alias for the return type of <code>DescriptorTemplate</code>, …\nP2PKH template. Expands to a descriptor <code>pkh(key)</code>\nP2TR template. Expands to a descriptor <code>tr(key)</code>\nP2WPKH template. Expands to a descriptor <code>wpkh(key)</code>\nP2WPKH-P2SH template. Expands to a descriptor <code>sh(wpkh(key))</code>\nBuild the complete descriptor\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nBIP32 error\nTrait for keys that can be derived.\nContainer for public or secret keys\nThe descriptor pubkey, either a single pubkey or an xpub.\nThe descriptor secret key, either a single private key or …\nType specifying the amount of entropy required e.g. <code>[u8;32]</code>\nReturned error in case of failure\nTrait that adds extra useful methods to <code>ScriptContext</code>s\nEnum for extended keys that can be either <code>xprv</code> or <code>xpub</code>\nA bitcoin public key (compressed or uncompressed).\nTrait that allows generating a key with the default options\nTrait for keys that can be generated\nOutput of a <code>GeneratableKey</code> key generation\nTrait for objects that can be turned into a public or …\nThe key has an invalid checksum\nThe key is not valid for the given network\nThe key cannot exist in the given script context\nThe consensus key associated with the type. Must be a …\nErrors thrown while working with <code>keys</code>\nAlias type for a map of public key to secret key\nLegacy scripts\nCustom error message\nMiniscript error\nMultiple extended private keys.\nMultiple extended public keys.\nExtra options required by the <code>generate_with_entropy</code>\nA private extended key, aka an <code>xprv</code>\nOptions for generating a <code>PrivateKey</code>\nA public extended key, aka an <code>xpub</code>\nThe ScriptContext for Miniscript. Additional type …\nEnum representation of the known valid <code>ScriptContext</code>s\nSegwitv0 scripts\nSingle public key.\nSingle private key.\nA descriptor <code>bitcoin::PrivateKey</code> with optional origin …\nA descriptor <code>SinglePubKey</code> with optional origin information.\nSingle public key without any origin or range information.\nContents of a “sortedmulti” descriptor\nTaproot scripts\nSet of valid networks for a key\nAn xonly public key.\nExtended private key (xpriv).\nExtended public key (xpub).\nCreate a set containing mainnet, testnet, signet, and …\nReturns the <code>ScriptContext</code> as a <code>ScriptContextEnum</code>\nReplaces any wildcard (i.e. <code>/*</code>) in the key with a …\nAttempt to produce a witness template given the assets …\nDepending on script Context, some of the Terminals might …\nDepending on script Context, some of the script resource …\nCheck the consensus + policy(if not disabled) rules that …\nConsensus rules at the Miniscript satisfaction time. It is …\nPolicy rules at the Miniscript satisfaction time. It is …\nCheck the consensus + policy(if not disabled) rules …\nEach context has slightly different rules on what Pks are …\nDepending on ScriptContext, fragments can be malleable. …\nCheck whether the given satisfaction is valid under the …\nWhether the generated key should be “compressed” or not\nDeprecated name for <code>Self::at_derivation_index</code>.\nEncode as a Bitcoin script\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an instance given a public key and a set of valid …\nCreate an instance given a secret key and a set of valid …\nParse an expression tree into a SortedMultiVec\nFull path, from the master key\nReturns a vector containing the full derivation paths from …\nGenerate a key given the options with random entropy.\nGenerate a key with the default options and a random …\nGenerate a key with the default options and a random …\nGenerate a key given the options with random entropy.\nGenerate a key given the extra options and the entropy\nGenerate a key with the default options and a given entropy\nReturn whether or not the key contains the private data\nWhether or not the key has a wildcard\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTurn the key into a <code>DescriptorKey</code> within the requested …\nConsume <code>self</code> and turn it into a <code>DescriptorKey</code> by adding …\nConsume <code>self</code> and turn it into an <code>ExtendedKey</code>\nConsumes <code>self</code> and returns the key\nGet as many keys as derivation paths in this key.\nGet as many keys as derivation paths in this key.\nTransform the <code>ExtendedKey</code> into an <code>Xpriv</code> for the given …\nTransform the <code>ExtendedKey</code> into an <code>Xpub</code> for the given …\nWhether or not the key has a wildcard\nReturns whether the script context is <code>Legacy</code>\nReturns whether the script context is …\nWhether or not this key has multiple derivation paths.\nWhether or not this key has multiple derivation paths.\nReturns whether the script context is <code>Segwitv0</code>\nReturns whether the script context is …\nReturns whether the script context is <code>Tap</code>, aka Taproot or …\nReturns whether the script context is …\nThe threshold value for the multisig.\nThe public key.\nThe private key.\nCreate a set only containing mainnet\nThe fingerprint of the master key associated with this …\nDepending on script context, the size of a satifaction …\nMaximum size, in bytes, of a satisfying witness. In …\nMaximum number of witness elements used to satisfy the …\nCompute the intersection of two sets\nThe number of keys in the multisig.\nLocal helper function to display error messages with …\nCreate a new instance of <code>SortedMultiVec</code> given a list of …\nOrigin information (fingerprint and derivation path).\nOrigin information (fingerprint and derivation path).\nOther top level checks that are context specific\nOverride the computed set of valid networks\nGet the len of public key when serialized based on context …\nAccessor for the public keys in the multisig.\nutility function to sanity a sorted multi vec\nAttempt to produce a satisfying witness for the witness …\nSize, in bytes of the script-pubkey. If this Miniscript is …\nThe type of signature required for satisfaction\nCreate Terminal::Multi containing sorted pubkeys\nCreate a set containing testnet and regtest\nReturns the public version of this key.\nCheck top level consensus rules.\nCheck whether the top-level is type B\nThis will panic if fpk returns an uncompressed key when …\nTrait to add functions to extract utxos and calculate fees.\nThe total transaction fee amount, sum of input amounts …\nThe transaction’s fee rate. This value will only be …\nGet the <code>TxOut</code> for the specified input index, if it doesn’…\nA derived address and the index it was found at. For …\nAn error that may occur when applying a block to <code>Wallet</code>.\nBalance, differentiated into various categories.\nOccurs when the update chain cannot connect with original …\nThe changes made to a wallet by applying an <code>Update</code>.\nThe error variant that occurs when the caller attempts to …\nThere was problem with the passed-in descriptor(s).\nThere was a problem with the passed-in descriptor(s).\nThere is a problem with the passed-in descriptor.\nAn error that may occur when inserting a transaction into …\nTrait to check if a value is below the dust limit. We are …\nThe error type when loading a <code>Wallet</code> from a <code>ChangeSet</code>.\nThe loaded desccriptor does not match what was provided.\nThe loaded genesis hash does not match what was provided.\nThe loaded network type does not match what was provided.\nData loaded from persistence is missing descriptor.\nData loaded from persistence is missing genesis hash.\nData loaded from persistence is missing network type.\nThe error type when constructing a fresh <code>Wallet</code>.\nError type for when we try load a <code>Wallet</code> from persistence …\nOccurs when the <code>connected_to</code> hash does not match the hash …\nAn update to <code>Wallet</code>.\nA Bitcoin wallet\nAdd an external signer\nAddress\nGet unbounded script pubkey iterators for both <code>Internal</code> …\nIntroduces a <code>block</code> of <code>height</code> to the wallet, and tries to …\nApplies relevant transactions from <code>block</code> of <code>height</code> to the …\nApply relevant unconfirmed transactions to the wallet.\nApplies an update to the wallet and stages the changes …\nReturn the balance, separated into available, …\nBump the fee of a transaction previously created with this …\nStart building a transaction.\nCalculates the fee of a given transaction. Returns …\nCalculate the <code>FeeRate</code> for a given transaction.\nInforms the wallet that you no longer intend to broadcast …\nChanges to the <code>LocalChain</code>.\nUpdate for the wallet’s internal <code>LocalChain</code>.\nGet all the checkpoints the wallet is currently storing …\nCoin selection\nConfirmed and immediately spendable balance\nThe derivation index of this wallet. It will return <code>None</code> …\nFinds how the wallet derived the script pubkey <code>spk</code>.\nReturn the checksum of the public descriptor associated to …\nErrors that can be thrown by the <code>Wallet</code>\nWallet export\nFinalize a PSBT, i.e., for each input determine if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the descriptor used to create addresses for a …\nget the corresponding PSBT Input for a LocalUtxo\nGet the signers\nGet a single transaction from the wallet as a <code>CanonicalTx</code> …\nReturns the utxo owned by this wallet corresponding to …\nUpdate for the wallet’s internal <code>TxGraph</code>.\nAll coinbase outputs not yet matured\nChild index of this address\nChanges to <code>IndexedTxGraph</code>.\nAdd a new checkpoint to the wallet’s internal view of …\nAdd a transaction to the wallet’s internal view of the …\nInserts a <code>TxOut</code> at <code>OutPoint</code> into the wallet’s …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck whether or not a value is below dust limit\nReturn whether or not a <code>script</code> is part of this wallet …\nType of keychain\nIterator over all keychains in this wallet\nContains the last active derivation indices per keychain (<code>K</code>…\nReturns the latest checkpoint.\nList all relevant outputs (includes both spent and …\nReturn the list of unspent outputs of this wallet\nList addresses that are revealed but unused.\nLoad <code>Wallet</code> from the given previously persisted <code>ChangeSet</code>.\nGet a reference to the inner <code>LocalChain</code>.\nMarks an address used of the given <code>keychain</code> at <code>index</code>.\nGet the Bitcoin network the wallet is using.\nStores the network type of the transaction data.\nInitialize an empty <code>Wallet</code>.\nEither loads <code>Wallet</code> from the given <code>ChangeSet</code> or …\nEither loads <code>Wallet</code> from a <code>ChangeSet</code> or initializes it if …\nInitialize an empty <code>Wallet</code> with a custom genesis hash.\nThe index of the next address that you would get if you …\nGet the next unused address for the given <code>keychain</code>, i.e. …\nPeek an address of the given <code>keychain</code> at <code>index</code> without …\nReturn the spending policies for the wallet’s descriptor\nReturn the “public” version of the wallet’s …\nReveal addresses up to and including the target <code>index</code> and …\nAttempt to reveal the next address of the given <code>keychain</code>.\nReturn the secp256k1 context used for all signing …\nCompute the <code>tx</code>’s sent and received <code>Amount</code>s.\nSign a transaction with all the wallet’s signers, in the …\nGeneralized signers\nGet a reference to the inner <code>KeychainTxOutIndex</code>.\nGet a reference of the staged <code>ChangeSet</code> that are yet to be …\nCreate a `FullScanRequest for this wallet.\nCreate a partial <code>SyncRequest</code> for this wallet for all …\nTake the staged <code>ChangeSet</code> to be persisted now (if any).\nGet the whole balance visible to the wallet.\nIterate over the transactions in the wallet.\nUnconfirmed UTXOs generated by a wallet tx\nGet sum of trusted_pending and confirmed coins.\nTransaction builder\nGet a reference to the inner <code>TxGraph</code>.\nGet an unbounded script pubkey iterator for the given …\nUndoes the effect of <code>mark_used</code> and returns whether the …\nUnconfirmed UTXOs received from an external wallet\nDeterministically generate a unique name given the …\nBlock hash of <code>connected_to</code>.\nExpected block hash of <code>connected_to</code>, as derived from <code>block</code>.\nThe internal chain’s tip height.\nThe introduced transaction’s confirmation height.\nThe expected genesis block hash.\nThe expected network type.\nThe block hash loaded from persistence.\nThe network type loaded from persistence.\nThe descriptor loaded from persistence.\nThe keychain of the descriptor not matching\nBranch and bound coin selection tries to avoid needing a …\nBranch and bound coin selection possible attempts with …\nBranch and bound coin selection\nIt’s possible to create spendable output from excess …\nTrait for generalized coin selection algorithms\nResult of a successful coin selection\nDefault coin selection algorithm used by <code>TxBuilder</code> if not …\nErrors that can be thrown by the <code>coin_selection</code> module\nRemaining amount after performing coin selection\nWallet’s UTXO set is not enough to cover recipient’s …\nSimple and dumb coin selection\nIt’s not possible to create spendable output from excess …\nOldestFirstCoinSelection always picks the utxo with the …\nPerform the coin selection\nDecide if change can be created\nRemaining amount after deducing fees and outgoing outputs\nTotal fee amount for the selected utxos in satoshis\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe total value of the inputs selected from the local …\nCreate new instance with target size for change output\nList of outputs selected for use as inputs\nThe total value of the inputs selected.\nSats available for spending\nSats needed for some transaction\nEffective amount available to create change after …\nThe calculated fee for the drain TxOut with the selected …\nThreshold to consider amount as dust for this particular …\nThe deducted change output fee\nExceeding amount of current selection over outgoing value …\nError returned from <code>Wallet::build_fee_bump</code>\nThere was an error with coin selection\nDescriptor key conversion error\nError returned from <code>TxBuilder::finish</code>\nThere was a problem with the descriptors passed in\nWhen bumping a tx the fee rate requested is lower than …\nNode doesn’t have data to estimate a fee rate\nWhen bumping a tx the absolute fee requested is lower than …\nTrying to replace a tx that has a sequence &gt;= <code>0xFFFFFFFE</code>\nRequested <code>LockTime</code> is less than is required to spend from …\nMiniscript PSBT error\nErrors returned by miniscript when updating inconsistent …\nIn order to use the <code>TxBuilder::add_global_xpubs</code> option …\nMissing non_witness_utxo on foreign utxo for given <code>OutPoint</code>\nCannot build a tx without recipients\n<code>manually_selected_only</code> option is selected but no utxo has …\nOutput created is under the dust limit, 546 satoshis\nReturn error type for …\nThere was a problem while extracting and manipulating …\nPartially signed bitcoin transaction error\nCannot enable RBF with a <code>Sequence</code> &gt;= 0xFFFFFFFE\nCannot enable RBF with <code>Sequence</code> given a required OP_CSV\nSpending policy is not compatible with this <code>KeychainKind</code>\nHappens when trying to bump a transaction that is already …\nThrown when a tx is not found in the internal database\nHappens when trying to spend an UTXO that is not in the …\nHappens when trying to spend an UTXO that is not in the …\nReturn error type for PsbtExt::update_input_with_descriptor\nRequested invalid transaction version ‘0’\nRequested transaction version <code>1</code>, but at least <code>2</code> is needed …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRequired OP_CSV <code>Sequence</code>\nGiven RBF <code>Sequence</code>\nRequested <code>LockTime</code>\nRequired <code>LockTime</code>\nRequired fee absolute value <code>Amount</code>\nRequired fee rate\nStructure that contains the export of a wallet\nAlias for <code>FullyNodedExport</code>\nEarliest block to rescan when looking for the wallet’s …\nEarliest block to rescan when looking for the wallet’s …\nReturn the internal descriptor, if present\nReturn the external descriptor\nExport a wallet\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nArbitrary label for the wallet\nArbitrary label for the wallet\nThe signer will sign all the leaves it has a key for.\nDummy identifier\nThe signer won’t sign the specified leaves.\nTo be used only by external libraries implementing …\nThe fingerprint of a BIP32 extended key\nThe signer won’t sign leaves other than the ones …\nInput index is out of range\nPSBT Input signer\nThe private key in use has the right fingerprint but …\nThe <code>non_witness_utxo</code> specified is invalid\nInvalid SIGHASH for the signing context in use\nLegacy context\nMiniscript PSBT error\nThe fingerprint and derivation path are missing from the …\nThe private key is missing for the required public key\nThe <code>non_witness_utxo</code> field of the transaction is required …\nThe <code>witness_script</code> field of the transaction is required to …\nThe <code>witness_utxo</code> field of the transaction is required to …\nThe psbt contains a non-<code>SIGHASH_ALL</code> sighash in one of its …\nThe signer won’t sign any leaf.\nBitcoin HASH160 (RIPEMD160 after SHA256) hash of an ECDSA …\nPSBT sign error.\nSegwit v0 context (BIP 143)\nError while computing the hash to sign a Taproot input.\nOptions for a software signer\nCommon signer methods\nSigning context\nSigning error\nIdentifier of a signer in the <code>SignersContainers</code>. Used as a …\nDefines the order in which signers are called\nWrapper to pair a signer with its context\nContainer for multiple signers\nTaproot context (BIP 340)\nCustomize which taproot script-path leaves the signer …\nPSBT signer\nThe user canceled the operation\nAdds an external signer to the container for the specified …\nWhether the signer should use the <code>sighash_type</code> set in the …\nWhether we should grind ECDSA signature to ensure signing …\nCreate a map of public keys to secret keys\nWhether the wallet should assume a specific height has …\nBuild a new signer container from a <code>KeyMap</code>\nReturn the secret key for the signer\nFinds the signer with lowest ordering for a given id in …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the <code>SignerId</code> for this signer\nReturns the list of identifiers of all the signers in the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a wrapped signer from a signer and a context\nDefault constructor\nRemoves a signer from the container and returns it\nSign a single psbt input\nSign all the inputs of the psbt\nWhether we should try to sign a taproot transaction with …\nReturns the list of signers in the container, sorted by …\nSpecifies which Taproot script-spend leaves we should sign …\nWhether the signer should trust the <code>witness_utxo</code>, if the …\nWhether to try finalizing the PSBT after the inputs are …\nWhether the signer can sign for the internal key or not\nError returned from <code>TxBuilder::add_foreign_utxo</code>.\nError returned from <code>TxBuilder::add_utxo</code> and …\nBIP69 / Lexicographic\nUse both change and non-change outputs (default)\nOnly use non-change outputs (see …\nPolicy regarding the use of change outputs when creating a …\nRequested outpoint doesn’t exist in the tx (vout greater …\nForeign utxo outpoint txid does not match PSBT input txid\nForeign utxo missing witness_utxo or non_witness_utxo\nOnly use change outputs (see <code>TxBuilder::only_spend_change</code>)\nRandomized (default)\nA transaction builder\nOrdering of the transaction’s inputs and outputs\nHappens when trying to spend an UTXO that is not in the …\nUnchanged\nAdd data as an output, using OP_RETURN\nAdd a foreign UTXO i.e. a UTXO not owned by this wallet.\nSame as add_foreign_utxo but allows to set the nSequence …\nFill-in the <code>PSBT_GLOBAL_XPUB</code> field with the extended keys …\nAdd a recipient to the internal list\nAdd a utxo to the internal list of unspendable utxos\nAdd a utxo to the internal list of utxos that <strong>must</strong> be spent\nAdd the list of outpoints to the internal list of UTXOs …\nSet whether or not the dust limit is checked.\nSet a specific <code>ChangeSpendPolicy</code>. See …\nChoose the coin selection algorithm\nSet the current blockchain height.\nDo not spend change outputs\nSets the address to <em>drain</em> excess coins to.\nSpend all the available inputs. This respects filters like …\nEnable signaling RBF\nEnable signaling RBF with a specific nSequence value\nSet an absolute fee The fee_absolute method refers to the …\nSet a custom fee rate.\nFinish building the transaction.\nFinish building the transaction.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFill-in the <code>psbt::Output::redeem_script</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOnly spend utxos added by <code>add_utxo</code>.\nUse a specific nLockTime while creating the transaction\nOnly spend change outputs\nOnly Fill-in the <code>psbt::Input::witness_utxo</code> field when …\nChoose the ordering for inputs and outputs of the …\nSet the policy path to use while creating the transaction …\nReplace the recipients already added with a new list\nSign with a specific sig hash\nSort transaction inputs and outputs by <code>TxOrdering</code> variant.\nSort transaction inputs and outputs by <code>TxOrdering</code> variant.\nReplace the internal list of unspendable utxos with a new …\nBuild a transaction with a specific version\nForeign UTXO outpoint\nPSBT input txid")