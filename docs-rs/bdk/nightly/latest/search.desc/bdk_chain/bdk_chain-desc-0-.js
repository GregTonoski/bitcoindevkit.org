searchState.loadedDescShard("bdk_chain", 0, "This crate is a collection of core structures for Bitcoin …\nTrait that “anchors” blockchain data to a specific …\nAn <code>Anchor</code> that can be constructed from a given block, …\nTrait that makes an object appendable.\nMaximum BIP32 derivation index.\nA reference to a block in the canonical chain.\nHow many confirmations are needed f or a coinbase output …\nRepresents a service that tracks the blockchain.\nRepresents the observed position of some chain data.\nAn <code>Anchor</code> implementation that also records the exact …\nBlock height and timestamp at which a transaction is …\nAn <code>Anchor</code> implementation that also records the exact …\nThe chain data is seen as confirmed, and in anchored by <code>A</code>.\nThe transaction is confirmed\nA trait to extend the functionality of a miniscript …\nRepresents the ID of a descriptor, defined as the sha256 …\nError type.\nA <code>TxOut</code> with as much data as we can retrieve about it\nAn iterator for derived script pubkeys.\nAn index storing <code>TxOut</code>s that have a script pubkey that …\nThe chain data is not confirmed and last seen in the …\nThe transaction is unconfirmed\nThe script pubkeys that are being tracked by the index.\nReturns the <code>BlockId</code> that the associated blockchain data is …\nThe anchor block.\nThe anchor block.\nAppend another object of the same type onto <code>self</code>.\nReturns a reference to the inner hash (sha256, sh256d …\nThe position of the transaction in <code>outpoint</code> in the overall …\nMaps a <code>ChainPosition&lt;&amp;A&gt;</code> into a <code>ChainPosition&lt;A&gt;</code> by …\nThe exact confirmation height of the transaction.\nThe confirmation height of the transaction being anchored.\nGet the upper bound of the chain data’s confirmation …\nGet the upper bound of the chain data’s confirmation …\nDetermines the upper bound of the confirmation height.\nThe confirmation time of the transaction being anchored.\nGet a reference to the internal descriptor.\nReturns the descriptor id, calculated as the sha256 of the …\nReturns the minimum value (in satoshis) at which an output …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct the anchor from a given <code>block</code>, block height and …\nCreates this wrapper type from the inner hash type.\nGet the best chain’s chain tip.\nThe hash of the block.\nThe height of the block.\nReturns the index associated with the script pubkey.\nContains the <code>IndexedTxGraph</code> and associated types. Refer to …\nAdds a script pubkey to scan for. Returns <code>false</code> and does …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermines whether <code>block</code> of <code>BlockId</code> exists as an ancestor …\nReturns whether <code>ChainPosition</code> is confirmed or not.\nReturns whether <code>ConfirmationTime</code> is the confirmed variant.\nWhether the utxo is/was/will be spendable with chain <code>tip</code>.\nReturns whether the structure is considered empty.\nWhether the <code>txout</code> is considered mature.\nWhether this output is on a coinbase transaction.\nWhether any of the inputs of this transaction spend a …\nReturns whether the script pubkey at <code>index</code> has been used …\nModule for keychain related structures.\nThe <code>LocalChain</code> is a local implementation of <code>ChainOracle</code>.\nMarks the script pubkey at <code>index</code> as used even though it …\nComputes the net value transfer effect of <code>tx</code> on the script …\nCreate a new script pubkey iterator from <code>descriptor</code>.\nCreate a new script pubkey iterator from <code>descriptor</code> and a …\nThe location of the <code>TxOut</code>.\nGet a reference to the set of indexed outpoints.\nIterates over all the outputs with script pubkeys in an …\nScans a transaction’s outputs for matching script …\nScan a single <code>TxOut</code> for a matching script pubkey and …\nComputes the total value transfer effect <code>tx</code> has on the …\nThe txid and chain position of the transaction (if any) …\nReturns the script that has been inserted at the <code>index</code>.\nHelper types for spk-based blockchain clients.\nReturns the inner hash (sha256, sh256d etc.).\nModule for structures that store and traverse transactions.\nReturns the txout and script pubkey index of the <code>TxOut</code> at …\nThe <code>TxOut</code>.\nIterate over all known txouts that spend to tracked script …\nFinds all txouts on a transaction that has previously been …\nConstruct an unconfirmed variant using the given <code>last_seen</code> …\nUndoes the effect of <code>mark_used</code>. Returns whether the <code>index</code> …\nIterates over all unused script pubkeys in an index range.\nConfirmation height.\nThe last-seen timestamp in unix seconds.\nConfirmation time in unix seconds.\nRepresents changes to an <code>IndexedTxGraph</code>.\nThe resultant “changeset” when new transaction data is …\nThe <code>IndexedTxGraph</code> combines a <code>TxGraph</code> and an <code>Indexer</code> …\nUtilities for indexing transaction data.\nBatch insert all transactions of the given <code>block</code> of <code>height</code>.\nBatch insert all transactions of the given <code>block</code> of <code>height</code>…\nApply changeset to itself.\nApplies the <code>ChangeSet</code> to the <code>IndexedTxGraph</code>.\nApply an <code>update</code> directly.\nBatch insert transactions, filtering out those that are …\nBatch insert unconfirmed transactions, filtering out those …\nBatch insert unconfirmed transactions.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a reference of the internal transaction graph.\n<code>TxGraph</code> changeset.\nTransaction index.\nScans a transaction for relevant outpoints, which are …\nScan and index the given <code>outpoint</code> and <code>txout</code>.\n<code>Indexer</code> changeset.\nDetermines the <code>ChangeSet</code> between <code>self</code> and an empty <code>Indexer</code>.\nDetermines the <code>ChangeSet</code> between <code>self</code> and an empty …\nInsert an <code>anchor</code> for a given transaction.\nInsert a unix timestamp of when a transaction is seen in …\nInsert and index a transaction into the graph.\nInsert a floating <code>txout</code> of given <code>outpoint</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermines whether the transaction should be included in …\nConstruct a new <code>IndexedTxGraph</code> with a given <code>index</code>.\nBalance, differentiated into various categories.\nRepresents updates to the derivation index of a …\n<code>KeychainTxOutIndex</code> controls how script pubkeys are …\nGet unbounded spk iterators for all keychains.\nAppend another <code>ChangeSet</code> into self.\nApplies the derivation changeset to the <code>KeychainTxOutIndex</code>…\nConfirmed and immediately spendable balance\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets the descriptor associated with the keychain. Returns …\nAll coinbase outputs not yet matured\nReturns the keychain and keychain index associated with …\nReturn a reference to the internal <code>SpkTxOutIndex</code>.\nInsert a descriptor with a keychain associated to it.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns whether the changeset are empty.\nReturns whether the spk under the <code>keychain</code>’s <code>index</code> has …\nIterate over all <code>OutPoint</code>s that have <code>TxOut</code>s with script …\nIterate over <code>OutPoint</code>s that have script pubkeys derived …\nReturn the map of the keychain to descriptors.\nContains the keychains that have been added and their …\nContains for each descriptor_id the last revealed index of …\nGet the last derivation index revealed for <code>keychain</code>. …\nGet the last derivation index that is revealed for each …\nReturns the highest derivation index of the <code>keychain</code> where …\nReturns the highest derivation index of each keychain that …\nGet the lookahead setting.\nStore lookahead scripts until <code>target_index</code> (inclusive).\nMarks the script pubkey at <code>index</code> as used even though the …\nComputes the net value that this transaction gives to the …\nConstruct a <code>KeychainTxOutIndex</code> with the given <code>lookahead</code>.\nGet the next derivation index for <code>keychain</code>. The next index …\nGets the next unused script pubkey in the keychain. I.e., …\nGet the set of indexed outpoints, corresponding to tracked …\nAttempts to reveal the next script pubkey for <code>keychain</code>.\nReveals script pubkeys of the <code>keychain</code>’s descriptor <strong>up </strong>…\nConvenience method to call <code>Self::reveal_to_target</code> on …\nIterate over revealed spks of the given <code>keychain</code>.\nIterate over revealed spks of keychains in <code>range</code>\nComputes the total value transfer effect <code>tx</code> has on the …\nReturn the script that exists under the given <code>keychain</code>’s …\nGet the whole balance visible to the wallet.\nUnconfirmed UTXOs generated by a wallet tx\nGet sum of trusted_pending and confirmed coins.\nReturn the <code>TxOut</code> of <code>outpoint</code> if it has been indexed, and …\nIterate over known txouts that spend to tracked script …\nFinds all txouts on a transaction that has previously been …\nGet an unbounded spk iterator over a given <code>keychain</code>. …\nUndoes the effect of <code>mark_used</code>. Returns whether the <code>index</code> …\nUnconfirmed UTXOs received from an external wallet\nIterate over revealed, but unused, spks of the given …\nIterate over revealed, but unused, spks of all keychains.\nRepresents a failure when trying to insert/remove a …\nThe error type for <code>LocalChain::apply_header_connected_to</code>.\nOccurs when the update cannot connect with the original …\nOccurs when an update does not have a common checkpoint …\nThe <code>ChangeSet</code> represents changes to <code>LocalChain</code>.\nA <code>LocalChain</code> checkpoint is used to find the agreement …\nIterates over checkpoints backwards.\nOccurs when <code>connected_to</code> block conflicts with either the …\nThis is a local implementation of <code>ChainOracle</code>.\nAn error which occurs when a <code>LocalChain</code> is constructed …\nApply the given <code>changeset</code>.\nUpdate the chain with a given <code>Header</code> connecting it with …\nUpdate the chain with a given <code>Header</code> at <code>height</code> which you …\nApplies the given <code>update</code> to the chain.\nGet the <code>BlockId</code> of the checkpoint.\nRemoves blocks from (and inclusive of) the given <code>block_id</code>.\nExtends the checkpoint linked list by a iterator of block …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a checkpoint from a list of <code>BlockId</code>s in …\nConstructs a <code>LocalChain</code> from a <code>BTreeMap</code> of height to …\nConstruct a <code>LocalChain</code> from an initial <code>changeset</code>.\nConstruct <code>LocalChain</code> from genesis <code>hash</code>.\nConstruct a checkpoint from the given <code>header</code> and block …\nConstruct a <code>LocalChain</code> from a given <code>checkpoint</code> tip.\nGet the genesis hash.\nGet checkpoint at <code>height</code>.\nGet checkpoint at given <code>height</code> (if it exists).\nGet the block hash of the checkpoint.\nGet the height of the checkpoint.\nThe checkpoint’s height.\nDerives an initial <code>ChangeSet</code>, meaning that it can be …\nInserts <code>block_id</code> at its height within the chain.\nInsert a <code>BlockId</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterate from this checkpoint in descending height.\nIterate over checkpoints in descending height order.\nConstruct a new base block at the front of a linked list.\nThe original checkpoint’s block hash which cannot be …\nGet the previous checkpoint in the chain\nPuts another checkpoint onto the linked list representing …\nIterate checkpoints over a height range.\nIterate checkpoints over a height range.\nGet the highest checkpoint.\nThe suggested checkpoint to include to connect the two …\nThe attempted update to the <code>original_block</code> hash.\nData required to perform a spk-based blockchain client …\nData returned from a spk-based blockchain client full scan.\nData required to perform a spk-based blockchain client …\nData returned from a spk-based blockchain client sync.\nA cache of <code>Arc</code>-wrapped full transactions, identified by …\nAdd all transactions from <code>TxGraph</code> into the <code>TxCache</code>.\nAdd all transactions from <code>TxGraph</code> into the <code>TxCache</code>.\nAdd to the <code>TxCache</code> held by the request.\nAdd to the <code>TxCache</code> held by the request.\nChain on additional <code>OutPoint</code>s that will be synced against.\nChain on additional <code>Script</code>s that will be synced against.\nChain on additional <code>Script</code>s that will be synced against.\nA checkpoint for the current chain <code>LocalChain::tip</code>. The …\nA checkpoint for the current <code>LocalChain::tip</code>. The full …\nChain on additional <code>Txid</code>s that will be synced against.\nThe update to apply to the receiving <code>LocalChain</code>.\nThe update to apply to the receiving <code>TxGraph</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new <code>SyncRequest</code> from a given <code>cp</code> tip.\nConstruct a new <code>FullScanRequest</code> from a given <code>chain_tip</code>.\nConstruct a new <code>FullScanRequest</code> from a given <code>chain_tip</code> and …\nThe update to apply to the receiving <code>TxGraph</code>.\nThe update to apply to the receiving <code>LocalChain</code>.\nAdd a closure that will be called for <code>OutPoint</code>s previously …\nAdd a closure that will be called for <code>Script</code>s previously …\nAdd a closure that will be called for every <code>Script</code> …\nAdd a closure that will be called for every <code>Script</code> …\nAdd a closure that will be called for <code>Txid</code>s previously …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLast active indices for the corresponding keychains (<code>K</code>).\nTransactions with these outpoints or spent from these …\nPopulate the request with revealed script pubkeys from …\nSet the <code>OutPoint</code>s that will be synced against.\nSet the <code>Script</code>s that will be synced against.\nSet the <code>Script</code>s for a given <code>keychain</code>.\nSet the <code>Txid</code>s that will be synced against.\nTransactions that spend from or to these indexed script …\nIterators of script pubkeys indexed by the keychain index.\nCache of full transactions, so the chain-source can avoid …\nCache of full transactions, so the chain-source can avoid …\nTransactions with these txids.\nErrors returned by <code>TxGraph::calculate_fee</code>.\nA transaction that is included in the chain, or is still …\nThe <code>ChangeSet</code> represents changes to a <code>TxGraph</code>.\nMissing <code>TxOut</code> for one or more of the inputs of the tx\nWhen the transaction is invalid according to the graph it …\nAn iterator that traverses ancestors of a given root …\nAn iterator that traverses transaction descendants.\nA graph of transactions and spends.\nA transaction node in the <code>TxGraph</code>.\nGet all transaction anchors known by <code>TxGraph</code>.\nIterate over all tx outputs known by <code>TxGraph</code>.\nIterates over the heights of that the new transaction …\nThe blocks that the transaction is “anchored” in.\nAdded anchors.\nApplies <code>ChangeSet</code> to <code>TxGraph</code>.\nExtends this graph with another so that <code>self</code> becomes the …\nGet the total balance of <code>outpoints</code> that are in <code>chain</code> of …\nBatch insert unconfirmed transactions.\nCalculates the fee of a given transaction. Returns 0 if <code>tx</code> …\nHow the transaction is observed as (confirmed or …\nGiven a transaction, return an iterator of txids that …\nGet a filtered list of outputs from the given <code>outpoints</code> …\nGet a filtered list of unspent outputs (UTXOs) from the …\nIterate over floating txouts known by <code>TxGraph</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIterate over all full transactions in the graph.\nGet the position of the transaction in <code>chain</code> with tip …\nGet the txid of the spending transaction and where the …\nGet a transaction by txid. This only returns <code>Some</code> for full …\nGet a transaction node by txid. This only returns <code>Some</code> for …\nObtains a single tx output (if any) at the specified …\nDetermines the <code>ChangeSet</code> between <code>self</code> and an empty <code>TxGraph</code>.\nInserts the given <code>anchor</code> into <code>TxGraph</code>.\nInserts the given <code>seen_at</code> for <code>txid</code> into <code>TxGraph</code>.\nInserts the given transaction into <code>TxGraph</code>.\nInserts the given <code>TxOut</code> at <code>OutPoint</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the graph has any transactions or outputs in it.\nAdded last-seen unix timestamps of transactions.\nThe last-seen unix timestamp of the transaction as …\nList graph transactions that are in <code>chain</code> with <code>chain_tip</code>.\nTransform the <code>TxGraph</code> to have <code>Anchor</code>s of another type.\nTransform the <code>ChangeSet</code> to have <code>Anchor</code>s of another type.\nConstruct a new <code>TxGraph</code> from a list of transactions.\nThe transactions spending from this output.\nGet the total balance of <code>outpoints</code> that are in <code>chain</code> of …\nGet a filtered list of outputs from the given <code>outpoints</code> …\nGet a filtered list of unspent outputs (UTXOs) from the …\nGet the position of the transaction in <code>chain</code> with tip …\nGet the txid of the spending transaction and where the …\nList graph transactions that are in <code>chain</code> with <code>chain_tip</code>.\nA partial or full representation of the transaction.\nThe transaction node (as part of the graph).\nReturns known outputs of a given <code>txid</code>.\nIterates over the transactions spending from <code>txid</code>.\nTxid of the transaction.\nIterates over all outpoints contained within <code>ChangeSet</code>.\nAdded txouts.\nAdded transactions.\nUpdate the last seen time for all unconfirmed transactions.\nCreates an iterator that filters and maps ancestor …\nCreates an iterator that both filters and maps conflicting …\nCreates an iterator that filters and maps descendants from …")